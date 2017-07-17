import sys
from flask import Blueprint, current_app
from app.db.utils import get_cursor

root = Blueprint("root", __name__)


@root.route('/')
def index():
    return current_app.send_static_file('index.html')

@root.route("/database")
def database_entries():
    with get_cursor() as c:
        if not c:
            sys.stderr.write('Failed to connect to DB')
            return
        c.execute("SELECT * FROM serene.public.user")
        return " ".join(str(col) for col in c.fetchone())

