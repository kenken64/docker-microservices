from flask import Flask
from flask_pymongo import PyMongo
import os
import json
from bson import json_util
from flask import jsonify
from bson.json_util import dumps
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", default="true")
app.config["MONGO_URI"] = os.environ.get("MONGODB_URL", default="true")
mongo = PyMongo(app)

@app.route('/artists')
def artists():
    artistsCursor = mongo.db.artists.find() 
    resp = dumps(artistsCursor)
    return resp

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp

if __name__ == "__main__":
    print(os.environ.get("FLASK_PORT", default="true"))
    app.run(host = '0.0.0.0', port=5000)
