from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from routes import api_bp
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
jwt = JWTManager(app)

app.register_blueprint(api_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
