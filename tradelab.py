"""TradeLab: educational long-only moving-average crossover backtester."""
from pathlib import Path
import argparse
import pandas as pd
import numpy as np

ROOT = Path(__file__).parent

def backtest(df, short=3, long=10, capital=10000.0, fee=0.001):
    if short >= long:
        raise ValueError("short window must be smaller than long window")
    x = df.copy()
    x["short_sma"] = x.AAPL.rolling(short).mean()
    x["long_sma"] = x.AAPL.rolling(long).mean()
    cash, shares, trades = float(capital), 0.0, []
    equity = []
    prev_above = None
    for row in x.itertuples():
        above = None if pd.isna(row.short_sma) or pd.isna(row.long_sma) else row.short_sma > row.long_sma
        if above is not None and prev_above is not None:
            if above and not prev_above and shares == 0:
                shares = (cash * (1-fee)) / row.AAPL
                cash = 0.0
                trades.append((row.Date, "BUY", row.AAPL))
            elif not above and prev_above and shares > 0:
                cash = shares * row.AAPL * (1-fee)
                shares = 0.0
                trades.append((row.Date, "SELL", row.AAPL))
        if above is not None:
            prev_above = above
        equity.append(cash + shares * row.AAPL)
    x["equity"] = equity
    running_max = x.equity.cummax()
    drawdown = (x.equity / running_max - 1).min()
    final = x.equity.iloc[-1]
    result = {
        "final_equity": final,
        "return_pct": (final / capital - 1) * 100,
        "max_drawdown_pct": drawdown * 100,
        "trades": len(trades),
    }
    return x, trades, result

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--short", type=int, default=3)
    ap.add_argument("--long", type=int, default=10)
    ap.add_argument("--capital", type=float, default=10000)
    ap.add_argument("--fee", type=float, default=0.001)
    args = ap.parse_args()
    df = pd.read_csv(ROOT/"data"/"aapl_monthly.csv", parse_dates=["Date"])
    df = df[df.Date >= "2008-01-01"].reset_index(drop=True)
    curve, trades, result = backtest(df, args.short, args.long, args.capital, args.fee)
    print(result)
    print("First trades:", trades[:8])

if __name__ == "__main__":
    main()
