"""Run the retail SQL project. Requires Python 3, no packages."""
from pathlib import Path
import sqlite3
root = Path(__file__).resolve().parent
with sqlite3.connect(":memory:") as db:
    db.executescript((root / "schema_and_data.sql").read_text())
    for statement in (root / "queries.sql").read_text().split(";"):
        if not statement.strip(): continue
        cursor = db.execute(statement)
        print("\n" + " | ".join(column[0] for column in cursor.description))
        for row in cursor.fetchall(): print(" | ".join(map(str, row)))
    total = db.execute("SELECT SUM(quantity * unit_price_cents) FROM order_items").fetchone()[0]
    assert total == 8700, "Expected S$87 total sales"
    assert db.execute("PRAGMA foreign_key_check").fetchall() == []
    print("\nChecks passed: S$87 total sales; foreign keys valid.")
