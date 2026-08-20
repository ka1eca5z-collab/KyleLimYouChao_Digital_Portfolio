"""MarketLens: chronological monthly AAPL forecasting experiment."""
from pathlib import Path
import json
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

ROOT = Path(__file__).parent
DATA = ROOT / "data" / "market_monthly.csv"

def build_features(df):
    df = df.copy()
    for lag in [1, 2, 3, 6, 12]:
        df[f"aapl_lag{lag}"] = df["AAPL"].shift(lag)
        df[f"sp_lag{lag}"] = df["SP500"].shift(lag)
        df[f"nas_lag{lag}"] = df["NASDAQ"].shift(lag)
    for win in [3, 6, 12]:
        df[f"aapl_sma{win}"] = df["AAPL"].shift(1).rolling(win).mean()
        df[f"aapl_std{win}"] = df["AAPL"].shift(1).rolling(win).std()
    features = [c for c in df.columns if c.startswith(("aapl_lag","sp_lag","nas_lag","aapl_sma","aapl_std"))]
    return df.dropna(subset=features + ["AAPL"]), features

def main():
    df = pd.read_csv(DATA, parse_dates=["Date"])
    model_df, features = build_features(df)
    split = int(len(model_df) * 0.75)
    train, test = model_df.iloc[:split], model_df.iloc[split:].copy()
    model = LinearRegression().fit(train[features], train["AAPL"])
    test["Predicted"] = model.predict(test[features])
    test["Previous"] = test["aapl_lag1"]
    test["PredDirection"] = np.where(test["Predicted"] >= test["Previous"], "UP", "DOWN")
    test["ActualDirection"] = np.where(test["AAPL"] >= test["Previous"], "UP", "DOWN")
    test["CorrectDirection"] = test["PredDirection"] == test["ActualDirection"]
    metrics = {
        "mae": float(mean_absolute_error(test["AAPL"], test["Predicted"])),
        "rmse": float(np.sqrt(mean_squared_error(test["AAPL"], test["Predicted"]))),
        "r2": float(r2_score(test["AAPL"], test["Predicted"])),
        "naive_mae": float(mean_absolute_error(test["AAPL"], test["Previous"])),
        "direction_accuracy": float(test["CorrectDirection"].mean()),
    }
    (ROOT / "outputs").mkdir(exist_ok=True)
    test[["Date","AAPL","Predicted","Previous","PredDirection","ActualDirection","CorrectDirection"]].to_csv(ROOT/"data"/"test_predictions.csv", index=False)
    (ROOT/"outputs"/"metrics.json").write_text(json.dumps(metrics, indent=2))
    print(json.dumps(metrics, indent=2))

if __name__ == "__main__":
    main()
