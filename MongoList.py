#PymongoからMongoDBに接続
from pymongo import MongoClient

class MongoList(object):

    def __init__(self,Dataname):
        self.client = MongoClient("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.btwbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        self.db = self.client[Dataname]

    #データを抽出
    def get_one(self,Collection,field,answer):
        return self.db[Collection].find_one({str(field):str(answer)})


def MongoExsert(Dataname,Collection,Field,Answer):
    mongo = MongoList(Dataname)
    rest = mongo.get_one(Collection,Field,Answer)
    return rest
