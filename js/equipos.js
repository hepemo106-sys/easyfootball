import {el} from '/js/main.js';

const teams = [
  { id:101, name:"Real Madrid", short:"RMA", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    squad:[
      {name:"Thibaut Courtois", pos:"POR", age:33},
      {name:"Dani Carvajal", pos:"LD", age:33},
      {name:"Éder Militão", pos:"DFC", age:27},
      {name:"Jude Bellingham", pos:"MC", age:22},
      {name:"Vinícius Jr", pos:"EI", age:25}
    ]},
  { id:102, name:"Barcelona", short:"BAR", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    squad:[
      {name:"Marc-André ter Stegen", pos:"POR", age:33},
      {name:"Ronald Araújo", pos:"DFC", age:26},
      {name:"Alejandro Balde", pos:"LI", age:21},
      {name:"Pedri", pos:"MC", age:22},
      {name:"Robert Lewandowski", pos:"DC", age:37}
    ]},
  { id:103, name:"Atlético de Madrid", short:"ATL", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
    squad:[
      {name:"Jan Oblak", pos:"POR", age:32},
      {name:"José María Giménez", pos:"DFC", age:30},
      {name:"Koke", pos:"MC", age:33},
      {name:"Antoine Griezmann", pos:"SD", age:34}
    ]},
  { id:104, name:"Sevilla", short:"SEV", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
    squad:[
      {name:"Jesús Navas", pos:"LD", age:39},
      {name:"Ivan Rakitić", pos:"MC", age:37}
    ]},
  { id:105, name:"Real Betis", short:"BET", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg",
    squad:[
      {name:"Claudio Bravo", pos:"POR", age:42},
      {name:"Nabil Fekir", pos:"MP", age:32}
    ]},
  { id:106, name:"Villarreal", short:"VIL", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg",
    squad:[
      {name:"Gerard Moreno", pos:"DC", age:33}
    ]},
  { id:107, name:"Valencia", short:"VAL", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg",
    squad:[
      {name:"José Gayà", pos:"LI", age:30}
    ]},
  { id:108, name:"Real Sociedad", short:"RSO", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg",
    squad:[
      {name:"Mikel Oyarzabal", pos:"EI", age:28}
    ]},
  { id:109, name:"Athletic Club", short:"ATH", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/9/98/Athletic_bilbao.svg",
    squad:[
      {name:"Iñaki Williams", pos:"ED", age:31}
    ]},
  { id:110, name:"Celta de Vigo", short:"CEL", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/1/10/Logo_RC_Celta_de_Vigo.svg",
    squad:[
      {name:"Iago Aspas", pos:"DC", age:38}
    ]},
  { id:111, name:"Girona", short:"GIR", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/5/5e/Girona_FC_Logo.svg",
    squad:[
      {name:"Artem Dovbyk", pos:"DC", age:28}
    ]},
  { id:112, name:"Getafe", short:"GET", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/5/56/Getafe_logo.svg", squad:[]},
  { id:113, name:"Osasuna", short:"OSA", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/5/5f/Osasuna_logo.svg", squad:[]},
  { id:114, name:"Rayo Vallecano", short:"RAY", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/1/1f/Rayo_Vallecano_crest.svg", squad:[]},
  { id:115, name:"Real Mallorca", short:"MLL", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/c/c0/Rcd_mallorca.svg", squad:[]},
  { id:116, name:"Las Palmas", short:"LPA", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/7/7f/UD_Las_Palmas_logo.svg", squad:[]},
  { id:117, name:"Deportivo Alavés", short:"ALA", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/2/2e/Deportivo_Alav%C3%A9s_logo.svg", squad:[]},
  { id:118, name:"Real Valladolid", short:"VLD", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/6/6e/Real_Valladolid_Logo.svg", squad:[]},
  { id:119, name:"Leganés", short:"LEG", country:"España", logo:"https://upload.wikimedia.org/wikipedia/en/1/15/Club_Deportivo_Legan%C3%A9s_logo.svg", squad:[]}
];
// (Puedes completar el resto de squads cuando quieras)

const grid = document.getElementById('teamsGrid');
const modal = document.getElementById('profileModal');
const modalContent = document.getElementById('profileContent');
const closeModal = document.getElementById('closeModal');

function renderTeams(filter=""){
  grid.innerHTML = "";
  teams
    .filter(t => !filter || t.name.toLowerCase().includes(filter) || t.short.toLowerCase().includes(filter) || t.squad.some(p=>p.name.toLowerCase().includes(filter)))
    .forEach(t=>{
      const card = el('div',{class:'tile'});
      const head = el('h3',{},[
        el('img',{src:t.logo,alt:t.name,loading:'lazy'}),
        document.createTextNode(t.name)
      ]);
      const openBtn = el('button',{class:'btn'},[document.createTextNode('Ver plantilla')]);
      openBtn.onclick = ()=>openTeam(t);
      card.appendChild(head);
      card.appendChild(el('p',{class:'muted'},[document.createTextNode('País: '+t.country+' · Sigla: '+t.short)]));
      card.appendChild(openBtn);
      grid.appendChild(card);
    });
}

function openTeam(team){
  const list = team.squad.length
    ? `<ul>${team.squad.map(p=>`<li>${p.name} — ${p.pos} · ${p.age} años</li>`).join('')}</ul>`
    : `<p class="muted">Plantilla pendiente de completar.</p>`;
  modalContent.innerHTML = `
    <h2>${team.name}</h2>
    <p><strong>País:</strong> ${team.country} · <strong>Sigla:</strong> ${team.short}</p>
    <img src="${team.logo}" alt="${team.name}" style="width:64px;height:64px;background:#fff;border-radius:8px;border:1px solid var(--border)">
    <h3>Plantilla</h3>
    ${list}
  `;
  modal.showModal();
}
closeModal?.addEventListener('click', ()=>modal.close());

// Buscador
const teamSearch = document.getElementById('teamSearch');
teamSearch?.addEventListener('input', e=>{
  renderTeams(e.target.value.trim().toLowerCase());
});

renderTeams();
