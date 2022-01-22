import pymongo
import gridfs


def main():
    client = pymongo.MongoClient("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.btwbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    database = client.Audio
    fs = gridfs.GridFS(database)
    fileID = fs.put( open('static/css/audio/Levitation21.wav'))

if __name__ == '__main__':
    main()

