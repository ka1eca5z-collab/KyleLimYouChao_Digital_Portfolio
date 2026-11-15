-- Filter a product catalogue
SELECT name, ROUND(price_cents / 100.0, 2) AS price_sgd
FROM products
WHERE price_cents < 1000
ORDER BY price_cents;

-- Join orders to customers
SELECT o.order_id, c.name AS customer, o.order_date
FROM orders AS o
JOIN customers AS c ON c.customer_id = o.customer_id
ORDER BY o.order_id;

-- Calculate sales by product
SELECT p.name, SUM(i.quantity) AS units_sold,
       ROUND(SUM(i.quantity * i.unit_price_cents) / 100.0, 2) AS revenue_sgd
FROM order_items AS i
JOIN products AS p ON p.product_id = i.product_id
GROUP BY p.product_id, p.name
ORDER BY revenue_sgd DESC, p.name;

-- Find repeat customers
SELECT c.name, COUNT(o.order_id) AS order_count
FROM customers AS c
JOIN orders AS o ON o.customer_id = c.customer_id
GROUP BY c.customer_id, c.name
HAVING COUNT(o.order_id) >= 2
ORDER BY c.name;

-- Find customers without orders
SELECT c.name, c.city
FROM customers AS c
LEFT JOIN orders AS o ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;

-- Summarise daily revenue
SELECT o.order_date,
       ROUND(SUM(i.quantity * i.unit_price_cents) / 100.0, 2) AS revenue_sgd
FROM orders AS o
JOIN order_items AS i ON i.order_id = o.order_id
GROUP BY o.order_date
ORDER BY o.order_date;