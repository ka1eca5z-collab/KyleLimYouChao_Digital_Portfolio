# Retail SQL Lab
A small student-level portfolio project using Python's built-in SQLite engine and fictional shop data. Created as a portfolio demonstration, not presented as a school submission.

## Run
Download these files into one folder and run `python run_lab.py`. No packages or account required. The database runs in memory, so each run starts fresh.

## Model
`customers` → `orders` → `order_items` ← `products`. Orders reference customers; line items reference orders and products. Prices use integer cents. Each line item saves its purchase price.

## Queries
Filtering, inner joins, aggregation, HAVING, left joins and daily sales. Expected total revenue: S$87. Daniel has no orders. Edit `queries.sql` to experiment with real SQL; the website shows reproducible saved results of the supplied queries.

## Limits
A small synthetic dataset; no real customer data, checkout, tax, refunds or authentication. This demonstrates relational querying, not a production commerce system.
