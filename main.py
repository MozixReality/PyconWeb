from bs4.element import PY3K
import requests
import json
import os
import re
import click
from pathlib import Path
from bs4 import BeautifulSoup 
from urllib.parse import unquote
from loguru import logger

PYCON_YEAR = "2016"
PYCON_URL = "https://tw.pycon.org"

def mkdir(path):
    try:
        # 1) correct the path to directory path and be a local path
        # 2) by using unquote to avoid the Garbled path
        dir = '.' + path[0:path.rfind('/') + 1]
        dir = unquote(dir)
        if not os.path.exists(os.path.dirname(dir)):
            os.makedirs(dir)
    except OSError as err:
        logger.error(err)

def writefile(path):
    # request to the Pycon path, and fetch it to local file by using binary writing
    request = requests.get(PYCON_URL + path)
    file = '.' + unquote(path)
    try:
        with open(file, 'wb') as f:
            f.write(request.content)
    except OSError as err:
        logger.error(err)

def getcssimg(path):
    # get all url like /year/... target, and try to save them all.
    file = '.' + path
    with open(file, 'rb') as f:
        content = str(f.read())
        all_url = re.findall('/' + PYCON_YEAR + '[^\s]*', content)
        for url in all_url:
            url = url.replace('\\n', '')
            url = url[0:url.rfind('\\')]
            url = url[0:url.rfind('?')]
            if not Path('.' + url).exists():
                mkdir(url)
                writefile(url)
            

def script(soup):
    for script in soup.find_all("script"):
        # get all url like /year/... target, and try to save them all.
        all_url = re.findall('/' + PYCON_YEAR + '[^\s]*', str(script))
        for url in all_url:
            url = url[0:max(url.rfind('\''), url.rfind('\"'))]
            if not Path('.' + url).exists():
                mkdir(url)
                writefile(url)

def css(soup):
    for css in soup.find_all("link"):
        # if the link tag has the 'href' attribute and
        # if the target is css file and not using outer css site
        if css.attrs.get("href") and css["href"].find("https://") == -1 and css["href"].find("css") != -1 and not Path('.' + css["href"]).exists():
            mkdir(css["href"])
            writefile(css["href"])
            getcssimg(css["href"])

def img(soup):
    for img in soup.find_all("img"):
        # if img has attr src
        if img.attrs.get("src"):
            mkdir(img["src"])
            writefile(img["src"])
    # get imgs in json, especially for pycon /2017/zh-hant/events/keynotes/
    for script in soup.find_all("script", type="application/json"):
        json_object = json.loads(script.contents[0])
        if "keynote" in json_object:
            for person in json_object["keynote"]:
                mkdir(person['photo'])
                writefile(person['photo'])

def get_page(path):
    # filter our target path
    if path[0] != '/' or Path('.' + path + 'index.html').exists():
        return
    logger.info("fetching " + PYCON_URL + path)
    request = requests.get(PYCON_URL + path)
    soup = BeautifulSoup(request.content, "html.parser")
    
    script(soup)    # get scripts in this page
    css(soup)       # get css in this page
    img(soup)       # get imgs in this page
    # save the html
    # 1) for supporting 2 languages, each pycon year will deal separately.
    # 2) by using unquote to avoid the Garbled path
    mkdir(path)
    with open('.' + path + 'index.html', 'w') as f:
        for input in soup.find_all("input", {'name':'csrfmiddlewaretoken'}): 
            input.decompose()
        if PYCON_YEAR == '2017':
            if path[6:8] == 'zh':
                elements = soup.find_all("a", {'data-lang':'en-us'})
                for elm in elements:
                    elm.replace_with("en-us_target")
            if path[6:8] == 'en':
                elements = soup.find_all("a", {'data-lang':'zh-hant'})
                for elm in elements:
                    elm.replace_with("zh-hant_target")
        html = str(soup)
        html = html.replace("action=\"/" + PYCON_YEAR + "/set-language/\"", "")
        html = html.replace(
            f"/{PYCON_YEAR}/", f"{BASE_URL}/{PYCON_YEAR}/"
        ) # Replace base url since the gh-pages use base url following `{host}/{repo}/` instead of {host}/
        path = BASE_URL + path
        if PYCON_YEAR == '2016':
            html = html.replace("<a data-lang=\"zh-hant\" href=\"#\">", "<a data-lang=\"zh-hant\" href=\"" + path.replace("en-us", "zh-hant") + "\">")
            html = html.replace("<a data-lang=\"en-us\" href=\"#\">", "<a data-lang=\"en-us\" href=\"" + path.replace("zh-hant", "en-us") + "\">")
        if PYCON_YEAR == '2017':
            if path[6:8] == 'zh':
                html = html.replace("en-us_target", "<div data-lang=\"en-us\" style=\"margin-left: 40px; line-height: 60px;\"> <a href='" + path.replace("zh-hant", "en-us") + "' style=\"font-size: 16px;\">English (US)</a></div>", 1)
                html = html.replace("en-us_target", "<div data-lang=\"en-us\" style=\"margin-left: 20px;\"> <a href='" + path.replace("zh-hant", "en-us") + "'>English (US)</a></div>", 1)
            if path[6:8] == 'en':
                html = html.replace("zh-hant_target", "<div data-lang=\"zh-hant\" style=\"margin-left: 40px; line-height: 60px;\"> <a href='" + path.replace("en-us", "zh-hant") + "' style=\"font-size: 16px;\">繁體中文</a></div>", 1)
                html = html.replace("zh-hant_target", "<div data-lang=\"zh-hant\" style=\"margin-left: 20px;\"> <a href='" + path.replace("en-us", "zh-hant") + "'>繁體中文</a></div>", 1)
        if PYCON_YEAR == '2018':
            if path[6:8] == 'zh':
                html = html.replace("EN", "<a href='" + path.replace("zh-hant", "en-us") + "' class=\"myclass\">EN</a>", 1)
            if path[6:8] == 'en':
                html = html.replace("ZH", "<a href='" + path.replace("en-us", "zh-hant") + "' class=\"myclass\">ZH</a>", 1)
            html += "<style>.myclass{text-decoration: none;color: rgba(255, 255, 255, 0.35);}.myclass:hover{text-decoration: none;color: rgba(255, 255, 255, 0.7);}</style>"
        if PYCON_YEAR == '2019':
            if path[6:8] == 'zh':
                html = html.replace("EN", "<a href='" + path.replace("zh-hant", "en-us") + "' class=\"myclass\">EN</a>", 1)
            if path[6:8] == 'en':
                html = html.replace("ZH", "<a href='" + path.replace("en-us", "zh-hant") + "' class=\"myclass\">ZH</a>", 1)
            html += "<style>.myclass{text-decoration: none;color: #616e86;}.myclass:hover{text-decoration: none;color: #4a5363;}</style>"
        if PYCON_YEAR == '2020':
            if path[6:8] == 'zh':
                html = html.replace("EN", "<a href='" + path.replace("zh-hant", "en-us") + "' style=\"text-decoration: none;\">EN</a>", 1)
            if path[6:8] == 'en':
                html = html.replace("ZH", "<a href='" + path.replace("en-us", "zh-hant") + "' style=\"text-decoration: none;\">ZH</a>", 1)
        f.write(unquote(html))

    # get talk and tutorial page
    for link in soup.find_all('a'):
        if not link.attrs.get("href") or link["href"].find("https://") != -1 or link["href"].find("#") != -1:
            continue
        if link.get('href').find("talk") != -1 or link.get('href').find("tutorial") != -1:
            talk_link = unquote(link["href"])
            get_page(talk_link)

def main():
    # Get pycon website, including zh-hant and en-us, according to given year.
    request = requests.get(PYCON_URL + "/" + PYCON_YEAR + "/zh-hant/")    # Get HTML
    soup = BeautifulSoup(request.text, "html.parser")       # Using html parser
    navs = soup.select("nav a")                             # Get each <a> tag in <nav> and save in navs
    navs = set([nav["href"] for nav in navs])               # Get each href in navs, and make it unique
    
    for nav in navs:                                        # Get each page in navs and deal with en-us at the same time
        get_page(nav)
        get_page(nav.replace("zh-hant", "en-us"))

@click.command()
@click.option('-y', 'param', help='Pycon Year (2016 - 2020)', type=click.DateTime(formats=["%Y"]), required=True)
@click.option('--base', 'base_url', help='The base url for all site', type=str, required=False)
def check_year(param, base_url):
    '''Get Pycon Website According To the Year'''
    global PYCON_YEAR
    global BASE_URL # TODO: [Refactor] to encapuslate all the global variable 
    BASE_URL = base_url
    PYCON_YEAR = str(param.year)
    if PYCON_YEAR >= '2016' and PYCON_YEAR <= '2020':
        main()
    else:
        logger.error('Pycon Year Should be between 2016 and 2020 !')

if __name__ == '__main__':
    check_year()