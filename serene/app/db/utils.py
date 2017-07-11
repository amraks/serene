import sys
from time import sleep
from contextlib import contextmanager
import psycopg2
from psycopg2.pool import ThreadedConnectionPool
from app.utils import config

__all__ = ['init_db_connection', 'get_cursor']

conn_pool = None

def init_db_connection():
    global conn_pool
    if conn_pool:
        return
    for _ in range(10):
        try:
            conn_pool = ThreadedConnectionPool(
                minconn=2,
                maxconn=4,
                dbname=config.DB_NAME,
                host=config.DB_HOST,
                port=config.DB_PORT,
                user=config.DB_USER,
                password=config.DB_PASSWD
            )
        except psycopg2.Error as e:
            sys.stderr.write(str(e))
            sleep(1)
        else:
            break


@contextmanager
def get_cursor():
    conn = None
    for attempt in range(3):
        try:
            conn = conn_pool.getconn()
            conn.autocommit = True
            yield conn.cursor()
            break
        except psycopg2.Error as e:
            if attempt == 2:
                sys.stderr.write(str(e))
                yield
                return
            else:
                sleep(0.1)
    if conn:
        conn_pool.putconn(conn)

init_db_connection()
