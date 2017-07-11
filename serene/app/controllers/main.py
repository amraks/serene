import sys
from flask import Blueprint
from app.db.utils import get_cursor

root = Blueprint("root", __name__)

@root.route("/")
def hello():
    return "Hello world!"

@root.route("/database")
def database_entries():
    with get_cursor() as c:
        if not c:
            sys.stderr.write('Failed to connect to DB')
            return
        c.execute("SELECT * FROM serene.public.user")
        return " ".join(str(col) for col in c.fetchone())

