from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from models import db

api_bp = Blueprint('api', __name__)

@api_bp.route('/modules', methods=['GET'])
def get_modules():
    modules = [
        {'id': 1, 'title': 'Introduction to Social Capital', 'description': 'Learn the basics of social capital'},
        {'id': 2, 'title': 'Community Mapping', 'description': 'Understand your community structure'}
    ]
    return jsonify(modules)
