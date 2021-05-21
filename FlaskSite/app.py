from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup as BS
from urllib.parse import urlparse

url = 'https://brawlify.com/stats/profile/P8R09GLP9'

app = Flask(__name__)

@app.route('/')
def index():
    r = requests.get(url)
    html = BS(r.content, 'html.parser')
    items = html.select('.content-container > .post-type1.pt-2 > .shareParent > .row > div:first-child > table > tr:last-child td')
    items2 = html.select('.content-container > .post-type1.pt-2 > .shareParent > .row > div:last-child > table > tr td')
    newItems = []
    newItems2 = []
    for item in items:
        newItems.append(item.get_text())

    for item in items2:
        newItems2.append(item.get_text())

    return render_template("index.html", articles=newItems, articles2=newItems2)


if __name__ == "__main__":
    app.run(debug=False)