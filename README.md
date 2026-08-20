# MarketLens — Interactive Forecast Lab

Educational stock-market forecasting project used in Kyle Lim's portfolio.

## What it does
- Uses historical monthly AAPL, S&P 500 and NASDAQ values.
- Creates only past-looking lag, moving-average and volatility features.
- Uses a chronological 75/25 train-test split.
- Fits linear regression and exports hold-out predictions.
- The portfolio page replays those predictions interactively month by month.

## Hold-out results
- MAE: $4.54
- RMSE: $6.51
- R²: 0.981
- Previous-month baseline MAE: $4.59
- Direction accuracy: 49.5%

A high price-level R² does not mean the model is a reliable trading signal. This project explicitly shows that limitation.

Educational prototype only; not financial advice.
