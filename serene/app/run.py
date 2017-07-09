from flask import Flask
from controllers.main import root
from controllers.health import monitor

app = Flask("serene")
app.register_blueprint(root)
app.register_blueprint(monitor)
app.run(host="0.0.0.0", debug=True)
