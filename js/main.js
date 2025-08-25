// Tema claro/oscuro
const root = document.documentElement;
(function initTheme(){
  const saved = localStorage.getItem("theme") || "dark";
  if(saved==="light") root.classList.add("light");
})();
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.onclick = ()=>{
    root.classList.toggle("light");
    localStorage.setItem("theme", root.classList.contains("light")?"light":"dark");
  };
}

// Utilidad: crea elemento
export function el(tag, attrs={}, children=[]) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k==="class") node.className = v;
    else if(k==="html") node.innerHTML = v;
    else node.setAttribute(k,v);
  });
  children.forEach(ch => node.appendChild(ch));
  return node;
}

// Fecha legible
export function fmtDate(d){
  try{ return new Date(d).toLocaleString(); }catch{ return ""; }
}
