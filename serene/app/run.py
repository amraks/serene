from flask import Flask
from app.controllers.main import root
from app.controllers.health import monitor

app = Flask("serene")
app.register_blueprint(root)
app.register_blueprint(monitor)
app.run(host="0.0.0.0", debug=True)
