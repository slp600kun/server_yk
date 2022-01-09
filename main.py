from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", \
        index = True,
        title = 'index.html')

@app.route('/Playlists')
def Playlists():
    return render_template("Playlists.html", \
        Playlists = True,
        title = 'Playlists.html')

@app.route('/Music')
def Music():
    return render_template("Music.html", \
        Music = True,
        title = 'Music.html')

@app.route('/Article')
def Article():
    return render_template("Article.html", \
        Article = True,
        title = 'Article.html')


        
if __name__ == "__main__":
    app.run()