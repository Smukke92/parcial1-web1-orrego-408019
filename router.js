// Secciones de la SPA
const routes = {
  muro: `
    <h2>Muro</h2>
    <p>Aquí se muestran las publicaciones de tus amigos.</p>
    <article>
      <h3>Publicación de Juan</h3>
      <p>Hola a todos 👋</p>
    </article>
    <article>
      <h3>Publicación de María</h3>
      <p>¡Qué lindo día hoy!</p>
    </article>
  `,
  info: `
    <h2>Info</h2>
    <p>Aquí va la información del perfil.</p>
    <ul>
      <li>Ciudad: Madrid</li>
      <li>Edad: 28</li>
      <li>Trabajo: Desarrollador Web</li>
    </ul>
  `,
  photos: `
    <h2>Photos</h2>
    <p>Galería de fotos.</p>
    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <img src="https://via.placeholder.com/100" alt="foto1">
      <img src="https://via.placeholder.com/100" alt="foto2">
      <img src="https://via.placeholder.com/100" alt="foto3">
    </div>
  `,
  boxes: `
    <h2>Boxes</h2>
    <p>Sección de cajas personalizadas.</p>
    <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px;">
      <div style="background:#444; padding:10px;">Box 1</div>
      <div style="background:#555; padding:10px;">Box 2</div>
      <div style="background:#666; padding:10px;">Box 3</div>
      <div style="background:#777; padding:10px;">Box 4</div>
    </div>
  `
};

// Router SPA
function router() {
  const hash = window.location.hash.substring(1) || "muro";
  const content = document.getElementById("app_content");
  const links = document.querySelectorAll(".nav__link");

  // Mostrar contenido
  content.innerHTML = routes[hash] || "<h2>404</h2><p>Sección no encontrada.</p>";

  // Actualizar navegación activa
  links.forEach(link => {
    if (link.getAttribute("href") === "#" + hash) {
      link.classList.add("nav__link--active");
    } else {
      link.classList.remove("nav__link--active");
    }
  });
}

// Eventos
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
