// Sin API por ahora. Estructura pensada para cambiar a fetch() después.
const matches = [
  { id:1, league:"LaLiga", when:"Hoy 18:30", status:"PRÓX", minute:0, home:"Real Madrid", away:"Barcelona", score:[0,0] },
  { id:2, league:"LaLiga", when:"Hoy 21:00", status:"PRÓX", minute:0, home:"Sevilla", away:"Betis", score:[0,0] },
  { id:3, league:"LaLiga", when:"Ayer", status:"FT",   minute:95, home:"Atlético", away:"Villarreal", score:[2,1] }
];

const list = document.getElementById("matchesList");
function renderMatches(){
  if(!list) return;
  list.innerHTML = "";
  matches.forEach(m=>{
    const row = document.createElement("div");
    row.className = "match";
    row.innerHTML = `
      <div>
        <span class="badge ${m.status==='LIVE'?'live':''}">${m.status}</span>
        <strong style="margin-left:8px">${m.league}</strong> · ${m.when}${m.status==='LIVE'?` · ${m.minute}'`:''}
      </div>
      <div class="score">${m.home} <strong>${m.score[0]}</strong> - <strong>${m.score[1]}</strong> ${m.away}</div>
    `;
    list.appendChild(row);
  });
}
renderMatches();

// 🔌 Cuando integremos API, reemplazamos lo de arriba por:
// fetch('/api/live?league=laliga').then(r=>r.json()).then(data => { matches = data; renderMatches(); })
