from flask import Blueprint

monitor = Blueprint('monitor', __name__, url_prefix="/health")

@monitor.route('/')
def health():
    return "I'm healthy!"
