PRAGMA foreign_keys = ON;
CREATE TABLE customers (customer_id INTEGER PRIMARY KEY, name TEXT NOT NULL, city TEXT NOT NULL);
CREATE TABLE products (product_id INTEGER PRIMARY KEY, name TEXT NOT NULL, price_cents INTEGER NOT NULL CHECK(price_cents >= 0));
CREATE TABLE orders (order_id INTEGER PRIMARY KEY, customer_id INTEGER NOT NULL REFERENCES customers(customer_id), order_date TEXT NOT NULL);
CREATE TABLE order_items (order_id INTEGER NOT NULL REFERENCES orders(order_id), product_id INTEGER NOT NULL REFERENCES products(product_id), quantity INTEGER NOT NULL CHECK(quantity > 0), unit_price_cents INTEGER NOT NULL CHECK(unit_price_cents >= 0), PRIMARY KEY(order_id, product_id));
INSERT INTO customers VALUES (1,'Aisha','Bishan'),(2,'Ben','Tampines'),(3,'Chloe','Woodlands'),(4,'Daniel','Bishan');
INSERT INTO products VALUES (1,'Notebook',450),(2,'Pen set',300),(3,'Desk lamp',1800),(4,'Cable organiser',650);
INSERT INTO orders VALUES (101,1,'2026-10-02'),(102,2,'2026-10-03'),(103,1,'2026-10-07'),(104,3,'2026-10-10'),(105,2,'2026-10-12'),(106,3,'2026-10-15');
INSERT INTO order_items VALUES (101,1,2,450),(101,2,1,300),(102,3,1,1800),(103,4,2,650),(104,1,3,450),(104,2,2,300),(105,4,1,650),(106,3,1,1800);


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