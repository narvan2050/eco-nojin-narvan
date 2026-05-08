# src/database.py - پایتون با باگ عمدی SQL Injection
import sqlite3

DB_NAME = "eco_nojin.db"
SECRET_KEY = "my-secret-key-123"   # ❌ کلید امنیتی هاردکد شده

def get_user_by_id(user_id):
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    # ❌ استفاده از string interpolation به جای parameterized query
    query = f"SELECT * FROM users WHERE id = {user_id}"
    cursor.execute(query)
    return cursor.fetchone()

def process_command(cmd):
    os.system(cmd)   # ❌ اجرای دستورات سیستم بدون اعتبارسنجی
