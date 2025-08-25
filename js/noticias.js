import {el, fmtDate} from '/js/main.js';

// Feeds por defecto (puedes editar/añadir)
const generalFeeds = [
  "https://www.marca.com/rss/futbol.html",
  "https://as.com/rss/futbol/primera.xml"
];
const transferFeeds = [
  "https://as.com/rss/futbol/mercado_de_fichajes.xml",
  "https://www.marca.com/rss/futbol/primera-division/fichajes.html"
];

// Parser RSS sencillo (desde texto XML)
function parseItems(xml){
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m=>{
    const block = m[1];
    const title = (block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || block.match(/<title>(.*?)<\/title>/) || [,""])[1];
    const link  = (block.match(/<link>(.*?)<\/link>/) || [,""])[1];
    const pub   = (block.match(/<pubDate>(.*?)<\/pubDate>/) || [,""])[1];
    const desc  = (block.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/s) || block.match(/<description>(.*?)<\/description>/s) || [,""])[1];
    return { title, link, pubDate: pub, description: desc.replace(/<[^>]*>/g,'').slice(0,160) };
  });
  return items;
}

// Carga vía proxy AllOrigins (evita CORS)
async function fetchRSS(url){
  const r = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent(url));
  if(!r.ok) throw new Error("Proxy error");
  const j = await r.json();
  return parseItems(j.contents || "");
}

function renderNews(listEl, items){
  items.slice(0,12).forEach(it=>{
    const card = el('div',{class:'news-card'});
    const a = el('a',{href:it.link,target:'_blank',rel:'noopener'},[document.createTextNode(it.title||"(Sin título)")]);
    const meta = el('div',{class:'news-meta'},[
      el('span',{},[document.createTextNode(fmtDate(it.pubDate))])
    ]);
    const p = el('p',{class:'muted'},[document.createTextNode(it.description||"")]);
    card.appendChild(a);
    card.appendChild(meta);
    card.appendChild(p);
    listEl.appendChild(card);
  });
}

// Noticias generales
const newsList = document.getElementById('newsList');
if (newsList) {
  (async ()=>{
    newsList.innerHTML = "";
    for (const feed of generalFeeds){
      try{
        const items = await fetchRSS(feed);
        renderNews(newsList, items);
      }catch(e){
        const err = el('div',{class:'news-card'},[document.createTextNode("No se pudo leer: "+feed)]);
        newsList.appendChild(err);
      }
    }
  })();

  // Form añadir feed
  const form = document.getElementById('rssForm');
  const rssUrl = document.getElementById('rssUrl');
  form?.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const url = rssUrl.value.trim();
    if(!url) return;
    try{
      const items = await fetchRSS(url);
      renderNews(newsList, items);
      rssUrl.value = "";
    }catch{
      const err = el('div',{class:'news-card'},[document.createTextNode("No se pudo leer: "+url)]);
      newsList.appendChild(err);
    }
  });
}

// Traspasos (usado por traspasos.html)
export async function loadTransferFeeds(){
  const box = document.getElementById('transferList');
  if(!box) return;
  box.innerHTML = "";
  for (const feed of transferFeeds){
    try{
      const items = await fetchRSS(feed);
      renderNews(box, items);
    }catch{
      box.appendChild(el('div',{class:'news-card'},[document.createTextNode("No se pudo leer: "+feed)]));
    }
  }
}
