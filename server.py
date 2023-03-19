from flask import Flask, request
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import re

app = Flask(__name__)
CORS(app, resources={
    r"*": {
    "origin": "http://127.0.0.1:3000"
    }
})

@app.route('/', methods=['GET'])
def get_data():
    # 클라이언트로부터 데이터 받기
    print("request.form:", request.form)
    name = request.args.get('name', 'Hydrogen')
    # 위키백과 URL 생성
    url = "https://en.wikipedia.org/wiki/" + name
    
    # 위키백과 페이지에서 정보 추출
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    content_div = soup.find("div", {"id": "mw-content-text", "class": "mw-content-ltr"})
    parser_output_div = content_div.find("div", {"class": "mw-parser-output"})
    p_tags = parser_output_div.find_all("p")
    second_p = p_tags[1]
    text = re.sub(r'\[[^]]*\]', '', second_p.text)
    
    # 클라이언트에게 결과 전송
    return text

if __name__ == '__main__':
    app.run(debug=True)
