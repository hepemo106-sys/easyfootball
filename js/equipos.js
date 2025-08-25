// ====================
// DATOS DE LALIGA 25/26
// ====================

const equipos = [
  {
    nombre: "Real Madrid",
    logo: "assets/logos/realmadrid.png",
    jugadores: [
      "Thibaut Courtois", "Andriy Lunin", "Éder Militão", "Antonio Rüdiger", "David Alaba",
      "Ferland Mendy", "Dani Carvajal", "Nacho Fernández", "Fran García", "Aurélien Tchouaméni",
      "Eduardo Camavinga", "Fede Valverde", "Luka Modrić", "Toni Kroos", "Jude Bellingham",
      "Rodrygo Goes", "Vinícius Júnior", "Brahim Díaz", "Joselu", "Kylian Mbappé"
    ]
  },
  {
    nombre: "FC Barcelona",
    logo: "assets/logos/barcelona.png",
    jugadores: [
      "Marc-André ter Stegen", "Iñaki Peña", "Ronald Araújo", "Jules Koundé", "Andreas Christensen",
      "Alejandro Balde", "João Cancelo", "Pau Cubarsí", "Gavi", "Pedri",
      "Frenkie de Jong", "Ilkay Gündogan", "Sergi Roberto", "Lamine Yamal", "Raphinha",
      "Ferran Torres", "Robert Lewandowski", "Vitor Roque", "João Félix", "Marc Casadó"
    ]
  },
  {
    nombre: "Atlético de Madrid",
    logo: "assets/logos/atletico.png",
    jugadores: [
      "Jan Oblak", "Ivo Grbić", "José María Giménez", "Stefan Savić", "Mario Hermoso",
      "Reinildo Mandava", "Nahuel Molina", "César Azpilicueta", "Rodrigo de Paul", "Saúl Ñíguez",
      "Koke", "Marcos Llorente", "Thomas Lemar", "Antoine Griezmann", "Álvaro Morata",
      "Ángel Correa", "Memphis Depay", "Samuel Lino", "Rodrigo Riquelme", "Pablo Barrios"
    ]
  },
  {
    nombre: "Athletic Club",
    logo: "assets/logos/athletic.png",
    jugadores: [
      "Unai Simón", "Julen Agirrezabala", "Iñigo Lekue", "Yuri Berchiche", "Dani Vivian",
      "Yeray Álvarez", "Aitor Paredes", "Óscar de Marcos", "Mikel Vesga", "Oihan Sancet",
      "Iker Muniain", "Ander Herrera", "Beñat Prados", "Unai Gómez", "Álex Berenguer",
      "Iñaki Williams", "Nico Williams", "Raúl García", "Gorka Guruzeta", "Asier Villalibre"
    ]
  },
  {
    nombre: "Real Sociedad",
    logo: "assets/logos/realsociedad.png",
    jugadores: [
      "Álex Remiro", "Unai Marrero", "Robin Le Normand", "Igor Zubeldia", "Jon Pacheco",
      "Áritz Elustondo", "Hamari Traoré", "Diego Rico", "Martín Zubimendi", "Brais Méndez",
      "Mikel Merino", "Ander Barrenetxea", "Takefusa Kubo", "David Silva", "Mikel Oyarzabal",
      "Carlos Fernández", "André Silva", "Mohamed-Ali Cho", "Beñat Turrientes", "Jon Ander Olasagasti"
    ]
  },
  {
    nombre: "Villarreal CF",
    logo: "assets/logos/villarreal.png",
    jugadores: [
      "Pepe Reina", "Filip Jörgensen", "Raúl Albiol", "Pau Torres", "Juan Foyth",
      "Jorge Cuenca", "Alfonso Pedraza", "Kiko Femenía", "Etienne Capoue", "Francis Coquelin",
      "Dani Parejo", "Álex Baena", "Yeremy Pino", "Samuel Chukwueze", "Gerard Moreno",
      "José Luis Morales", "Arnaut Danjuma", "Alexander Sørloth", "Ilias Akhomach", "Manu Trigueros"
    ]
  },
  {
    nombre: "Real Betis",
    logo: "assets/logos/betis.png",
    jugadores: [
      "Claudio Bravo", "Rui Silva", "Luiz Felipe", "Germán Pezzella", "Marc Bartra",
      "Juan Miranda", "Héctor Bellerín", "Guido Rodríguez", "William Carvalho", "Nabil Fekir",
      "Sergio Canales", "Rodri", "Ayoze Pérez", "Borja Iglesias", "Willian José",
      "Juanmi", "Abde Ezzalzouli", "Luiz Henrique", "Paul Akouokou", "Assane Diao"
    ]
  },
  {
    nombre: "Sevilla FC",
    logo: "assets/logos/sevilla.png",
    jugadores: [
      "Marko Dmitrović", "Orjan Nyland", "Jesús Navas", "Marcos Acuña", "Nemanja Gudelj",
      "Loïc Badé", "Sergio Ramos", "Adrià Pedrosa", "Fernando", "Ivan Rakitić",
      "Óliver Torres", "Joan Jordán", "Lucas Ocampos", "Suso", "Erik Lamela",
      "Youssef En-Nesyri", "Rafa Mir", "Bryan Gil", "Dodi Lukebakio", "Alejo Véliz"
    ]
  },
  {
    nombre: "Valencia CF",
    logo: "assets/logos/valencia.png",
    jugadores: [
      "Giorgi Mamardashvili", "Cristian Rivero", "Gabriel Paulista", "Mouctar Diakhaby", "Cenk Özkacar",
      "José Gayà", "Thierry Correia", "Hugo Guillamón", "Javi Guerra", "Pepelu",
      "Fran Pérez", "Sergi Canós", "Diego López", "André Almeida", "Hugo Duro",
      "Justin Kluivert", "Samu Castillejo", "Marcos André", "Yunus Musah", "Alberto Marí"
    ]
  },
  {
    nombre: "Getafe CF",
    logo: "assets/logos/getafe.png",
    jugadores: [
      "David Soria", "Kiko Casilla", "Djené Dakonam", "Domingos Duarte", "Stefan Mitrović",
      "Juan Iglesias", "Gastón Álvarez", "Mauro Arambarri", "Nemanja Maksimović", "Carles Aleñá",
      "Portu", "Borja Mayoral", "Jaime Mata", "Enes Ünal", "Óscar Rodríguez",
      "Ángel Algobia", "Jordi Martín", "Amorim", "Patrick Kluivert Jr.", "Luis Milla"
    ]
  },
  {
    nombre: "Osasuna",
    logo: "assets/logos/osasuna.png",
    jugadores: [
      "Sergio Herrera", "Aitor Fernández", "David García", "Unai García", "Juan Cruz",
      "Rubén Peña", "Nacho Vidal", "Moi Gómez", "Jon Moncayola", "Lucas Torró",
      "Ante Budimir", "Chimy Ávila", "Kike García", "Abdessamad Ezzalzouli", "Barbero",
      "Darko Brasanac", "Pablo Ibáñez", "José Arnaiz", "Aimar Oroz", "Diego Moreno"
    ]
  },
  {
    nombre: "Celta de Vigo",
    logo: "assets/logos/celta.png",
    jugadores: [
      "Iván Villar", "Agustín Marchesín", "Joseph Aidoo", "Unai Núñez", "Javi Galán",
      "Óscar Mingueza", "Kevin Vázquez", "Renato Tapia", "Gabri Veiga", "Luca de la Torre",
      "Carles Pérez", "Iago Aspas", "Jørgen Strand Larsen", "Gonçalo Paciência", "Miguel Rodríguez",
      "Haris Seferovic", "Williot Swedberg", "Fran Beltrán", "Santi Mina", "Denis Suárez"
    ]
  },
  {
    nombre: "Rayo Vallecano",
    logo: "assets/logos/rayo.png",
    jugadores: [
      "Stole Dimitrievski", "Diego López", "Alejandro Catena", "Abdul Mumin", "Florian Lejeune",
      "Iván Balliu", "Fran García", "Óscar Valentín", "Santi Comesaña", "Isi Palazón",
      "Álvaro García", "Radamel Falcao", "Raúl de Tomás", "Sergio Camello", "Bebé",
      "Óscar Trejo", "Pathé Ciss", "Unai López", "Salvi Sánchez", "Randy Nteka"
    ]
  },
  {
    nombre: "Mallorca",
    logo: "assets/logos/mallorca.png",
    jugadores: [
      "Predrag Rajković", "Dominik Greif", "Antonio Raíllo", "Martin Valjent", "José Copete",
      "Pablo Maffeo", "Jaume Costa", "Dani Rodríguez", "Iñigo Ruiz de Galarreta", "Antonio Sánchez",
      "Vedat Muriqi", "Kang-in Lee", "Amath Ndiaye", "Tino Kadewere", "Ángel Rodríguez",
      "Abdón Prats", "Cyle Larin", "Manu Morlanes", "Samú Costa", "Sergi Darder"
    ]
  },
  {
    nombre: "Girona FC",
    logo: "assets/logos/girona.png",
    jugadores: [
      "Paulo Gazzaniga", "Juan Carlos Martín", "David López", "Juanpe", "Santi Bueno",
      "Arnau Martínez", "Miguel Gutiérrez", "Aleix García", "Iván Martín", "Yangel Herrera",
      "Toni Villa", "Cristhian Stuani", "Valery Fernández", "Viktor Tsyhankov", "Artem Dovbyk",
      "Portu", "Sávio", "Eric García", "Jhon Solís", "Pablo Torre"
    ]
  },
  {
    nombre: "Deportivo Alavés",
    logo: "assets/logos/alaves.png",
    jugadores: [
      "Antonio Sivera", "Fernando Pacheco", "Rubén Duarte", "Abdelkabir Abqar", "Víctor Laguardia",
      "Aleksandar Sedlar", "Javi López", "Andoni Gorosabel", "Jon Guridi", "Antonio Blanco",
      "Luis Rioja", "Carlos Vicente", "Xeber Alkain", "Samu Omorodion", "Kike García",
      "Miguel de la Fuente", "Ander Guevara", "Benavídez", "Sylla", "Villalibre"
    ]
  },
  {
    nombre: "Granada CF",
    logo: "assets/logos/granada.png",
    jugadores: [
      "André Ferreira", "Raúl Fernández", "Jesús Vallejo", "Domingos Duarte", "Ignasi Miquel",
      "Ricard Sánchez", "Carlos Neva", "Sergio Ruiz", "Njegos Petrovic", "Óscar Melendo",
      "Antonio Puertas", "Myrto Uzuni", "Bryan Zaragoza", "José Callejón", "Lucas Boyé",
      "Facundo Pellistri", "Alberto Soro", "Víctor Díaz", "Jonathan Silva", "Pepe"
    ]
  },
  {
    nombre: "Las Palmas",
    logo: "assets/logos/laspalmas.png",
    jugadores: [
      "Álvaro Valles", "Aarón Escandell", "Álex Suárez", "Saúl Coco", "Eric Curbelo",
      "Sergi Cardona", "Daley Sinkgraven", "Jonathan Viera", "Kirian Rodríguez", "Alberto Moleiro",
      "Enzo Loiodice", "Munir El Haddadi", "Marc Cardona", "Sandro Ramírez", "Pejiño",
      "Benito Ramírez", "Fabio González", "Javi Muñoz", "Cristian Herrera", "Vitolo"
    ]
  },
  {
    nombre: "Cádiz CF",
    logo: "assets/logos/cadiz.png",
    jugadores: [
      "Conan Ledesma", "David Gil", "Luis Hernández", "Fali", "Víctor Chust",
      "Alfonso Espino", "Isaac Carcelén", "José Mari", "Rubén Alcaraz", "Álex Fernández",
      "Brian Ocampo", "Iván Alejo", "Theo Bongonda", "Chris Ramos", "Roger Martí",
      "Darwin Machís", "Ruben Sobrino", "Anthony Lozano", "Álvaro Negredo", "Jon Ander Garrido"
    ]
  }
];

// Renderizado dinámico
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("equipos-container");
  if (!container) return;

  equipos.forEach(eq => {
    const card = document.createElement("div");
    card.className = "equipo-card";

    card.innerHTML = `
      <img src="${eq.logo}" alt="${eq.nombre}" class="logo-equipo">
      <h3>${eq.nombre}</h3>
      <details>
        <summary>Ver Plantilla</summary>
        <ul>
          ${eq.jugadores.map(j => `<li>${j}</li>`).join("")}
        </ul>
      </details>
    `;

    container.appendChild(card);
  });
});
