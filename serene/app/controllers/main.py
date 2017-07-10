from flask import Blueprint
import psycopg2

root = Blueprint("root", __name__)

@root.route("/")
def hello():
    return "Hello world!"

@root.route("/database")
def database_entries():
    with psycopg2.connect(host="postgres", database="serene", user="postgres", password="postgres").cursor() as c:
        c.execute("SELECT * FROM serene.public.user")
        return " ".join(str(col) for col in c.fetchone())

