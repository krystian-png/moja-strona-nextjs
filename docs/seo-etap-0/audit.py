import json,sys,urllib.request,urllib.error,concurrent.futures,datetime
from html.parser import HTMLParser
from pathlib import Path
slugs=['prokurent-krs-ustanowienie-prokury-wpis','zmiana-adresu-i-siedziby-spolki-w-krs','zmiana-zarzadu-spolka-zoo-krok-po-kroku-najwazniejsze-formalnosci','zmiana-przedmiotu-dzialalnosci-spolka-zoo','zmiany-spolka-jawna-zgloszenie-krs','rezygnacja-czlonka-zarzadu-spolka-zoo-wpis-krs','zmiana-umowy-spolki-portal-s24-instrukcja']
paths=['/','/cennik','/uslugi','/o-nas','/ksiegowi','/blog']+['/uslugi/'+s for s in ['zmiana-zarzadu-spolki-zoo','zmiana-adresu-spolki-zoo','prokurent-krs','zmiana-umowy-spolki-zoo','zmiana-wspolnika-spolki-zoo','zmiana-kodow-pkd']]+['/artykul/'+s for s in slugs]+['/blog/'+slugs[0],'/robots.txt','/sitemap.xml','/admin']
class Parser(HTMLParser):
 def __init__(self):
  super().__init__();self.titles=[];self.h1=[];self.canonical=[];self.links=[];self.ids=[];self.capture=None;self.depth=0;self.robots=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag in ['title','h1']:self.capture=[];self.kind=tag
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if tag=='a':self.links.append(a.get('href'))
  if tag=='meta' and a.get('name')=='robots':self.robots.append(a.get('content'))
 def handle_data(self,d):
  if self.capture is not None:self.capture.append(d)
 def handle_endtag(self,tag):
  if tag in ['title','h1'] and self.capture is not None:
   (self.titles if tag=='title' else self.h1).append(''.join(self.capture));self.capture=None

def fetch(path):
 url=sys.argv[1]+path
 try:
  try:r=urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 SEO baseline'}),timeout=35)
  except urllib.error.HTTPError as e:r=e
  body=r.read().decode('utf8',errors='replace');p=Parser();p.feed(body)
  return dict(path=path,status=r.status,url=r.url,title=p.titles,h1=p.h1,canonical=p.canonical,links=p.links,ids=p.ids,robots=p.robots,x_robots_tag=r.headers.get('X-Robots-Tag'),body=body if path in ['/robots.txt','/sitemap.xml'] else None)
 except Exception as e:return dict(path=path,error=str(e))
rows=list(concurrent.futures.ThreadPoolExecutor(max_workers=8).map(fetch,paths))
if sys.argv[1].startswith('https:'):rows.append(fetch('/')) if False else None
Path(sys.argv[2]).write_text(json.dumps(dict(date=datetime.datetime.now(datetime.timezone.utc).isoformat(),base=sys.argv[1],pages=rows),ensure_ascii=False,indent=2))
print([(r['path'],r.get('status'),r.get('error')) for r in rows])
