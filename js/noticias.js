// ===============
// Noticias y Fichajes
// ===============

const feeds = {
  noticias: "https://e00-marca.uecdn.es/rss/futbol/primera-division.xml",
  traspasos: "https://www.fichajes.com/rss"
};

// Función para cargar y renderizar noticias
async function cargarNoticias(tipo, containerId) {
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(feeds[tipo])}`);
    const data = await response.json();

    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "application/xml");

    const items = xml.querySelectorAll("item");
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    items.forEach((item, index) => {
      if (index > 9) return; // solo 10 noticias
      const title = item.querySelector("title")?.textContent || "Sin título";
      const link = item.querySelector("link")?.textContent || "#";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      const desc = item.querySelector("description")?.textContent || "";

      const card = document.createElement("div");
      card.className = "noticia-card";

      card.innerHTML = `
        <h3><a href="${link}" target="_blank">${title}</a></h3>
        <small>${new Date(pubDate).toLocaleDateString()}</small>
        <p>${desc.slice(0, 120)}...</p>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error cargando noticias", tipo, err);
  }
}

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", () => {
  cargarNoticias("noticias", "noticias-container");
  cargarNoticias("traspasos", "traspasos-container");
});
