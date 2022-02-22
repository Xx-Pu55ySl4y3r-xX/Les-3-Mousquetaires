from flask import Flask
from flask import request
from flask import render_template
from functions import *

app = Flask(__name__)
list_futur = import_csv_dict('mondedufutur.csv',",")


@app.route('/')
def hello():
    return render_template("home.html", liste=list_futur[0:10])

@app.route('/', methods=['POST'])
def text_box():
    text = request.form['text']
    processed_text = text.upper()
    return render_template("home.html", message = processed_text)

if __name__ == "__main__":
    app.run()
