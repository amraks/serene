import os

DB_NAME = os.getenv('DB_NAME', 'serene')
DB_HOST = os.getenv('DB_HOST', 'postgres')
DB_USER = os.getenv('DB_USER', 'postgres')
DB_PASSWD = os.getenv('DB_PASSWD', 'postgres')
DB_PORT = os.getenv('DB_PORT', 5432)
