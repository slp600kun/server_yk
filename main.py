from flask import Flask, render_template
import MongoList
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", \
        index = True,
        title = 'index.html')

@app.route('/Playlist')
def Playlist():
    return render_template("Playlist.html", \
        Playlist = True,
        title = 'Playlist.html',
        contents = MongoList.MongoExsert("Article_box","container","category","Playlist"))

@app.route('/Music')
def Music():
    return render_template("Music.html", \
        Music = True,
        title = 'Music.html',
        contents = MongoList.MongoExsert("Article_box","container","category","Music"))

@app.route('/Article')
def Article():
    return render_template("Article.html", \
        Article = True,
        title = 'Article.html')

@app.route('/Levitation21')
def Levitation21():
    return render_template("Levitation21.html", \
        Article = True,
        title = 'Levitation21.html')

@app.route('/Playlist01')
def Playlist01():
    return render_template("Playlist01.html", \
        Article = True,
        title = 'Playlist01.html')

        
if __name__ == "__main__":
    app.run()

