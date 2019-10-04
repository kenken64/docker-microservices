from pymongo import MongoClient
import os
from bson import json_util

client = MongoClient('mongodb://localhost:27017')
print(client)
db = client['testdb']
collection = db.movie.find()
print(collection)
y = list(collection)
print(y)
#x = json_util.dumps({'data': collection })
#print(x)
