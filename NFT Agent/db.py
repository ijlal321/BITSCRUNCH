import sqlite3

DB_NAME = "nft_data.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS nft_addresses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            address TEXT UNIQUE NOT NULL
        )
    ''')

    conn.commit()
    conn.close()

def get_nft_addresses():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute("SELECT address FROM nft_addresses")
    nft_addresses = [row[0] for row in cursor.fetchall()]
    conn.close()
    return nft_addresses
