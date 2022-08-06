<template>
  <div class="app">
    <header class="header">
      <div class="contenedor-imagenes">
        <img
          class="img-banner"
          loading="lazy"
          width="200"
          height="300"
          src="../assets/banner.jpeg"
          alt="Imagen Banner"
        />
        <img
          class="img-logo"
          loading="lazy"
          width="200"
          height="300"
          src="../assets/icon.svg"
          alt="Imagen Logo"
        />
      </div>

      <div class="contenedor-menu">
        <h1>SCAN DEFI</h1>
        <nav class="navegacion-principal">
          <a id="boton-comida" href="#">COMIDA</a>
          <a id="boton-bebida" href="#">BEBIDA</a>
        </nav>
      </div>
    </header>

    <section class="contenedor-boton-idioma">
      <button id="id-boton-idioma" class="boton-idioma">
        <img
          id="id-img-idioma"
          class="img-idioma"
          loading="lazy"
          width="200"
          height="200"
          src="../assets/icono-spain.png"
          alt="Icono Idioma"
        />
      </button>
    </section>

    <section class="contenedor-opcion">
      <div class="contenedor-comida" id="cuadro-comida">
        <div class="overlay">
          <router-link to="/foodMenu">
            <div class="opcion-comida">COMIDA</div>
          </router-link>
        </div>
        <img
          class="img-opcion"
          loading="lazy"
          width="200"
          height="300"
          src="../assets/subcategory.jpeg"
          alt="Imagen opcion comida"
        />
      </div>
      <div class="contenedor-bebida" id="cuadro-bebida">
        <div class="overlay">
          <router-link to="/drinkMenu">
            <div class="opcion-bebida">BEBIDA</div>
          </router-link>
        </div>
        <img
          class="img-opcion"
          loading="lazy"
          width="200"
          height="300"
          src="../assets/subcategory.jpeg"
          alt="Imagen opcion bebida"
        />
      </div>
    </section>

    <footer class="footer">
      <h3>Horario</h3>
      <ul class="horario">
        <li>Lunes: <span>10:00 - 23:00</span></li>
        <li>Martes: <span>10:00 - 23:00</span></li>
        <li>Miércoles: <span>10:00 - 23:00</span></li>
        <li>Jueves: <span>10:00 - 23:00</span></li>
        <li>Viernes: <span>9:00 - 23:00</span></li>
        <li>Sábado: <span>10:00 - 23:00</span></li>
        <li>Domingo: <span>10:00 - 23:00</span></li>
      </ul>
      <div class="terminos">
        <h2>Scan DeFi</h2>
        <div class="redes">
          <img
            class="img-footer icono-ig"
            loading="lazy"
            width="200"
            height="300"
            src="../assets/igicon.png"
            alt="Icono IG"
          />
          <img
            class="img-footer icono-fb"
            loading="lazy"
            width="200"
            height="300"
            src="../assets/fbicon.png"
            alt="Icono FB"
          />
        </div>
        <p>Terms and conditions</p>
        <p>Privacy policy</p>
        <p>Legal warning</p>
      </div>
    </footer>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
  clickMenu();
  clickIdioma();
}

function navegacionFija() {
  const barra = document.querySelector(".contenedor-menu");
  const sobreOpciones = document.querySelector(".contenedor-opcion");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function () {
    if (sobreOpciones.getBoundingClientRect().top < 160) {
      barra.classList.add("fijo");
      body.classList.add("body-scroll");
    } else {
      barra.classList.remove("fijo");
      body.classList.remove("body-scroll");
    }
  });
}

function clickMenu() {
  const btnComida = document.getElementById("boton-comida");
  const btnBebida = document.getElementById("boton-bebida");
  const cuadroBebida = document.getElementById("cuadro-bebida");
  const cuadroComida = document.getElementById("cuadro-comida");
  let actComida = false;
  let actBebida = false;
  btnComida.addEventListener("click", (e) => {
    e.preventDefault();
    if (actBebida === true) {
      actBebida = false;
      cuadroBebida.style.display = "none";
      cuadroComida.style.display = "block";
      btnBebida.classList.remove("boton-activado");
      btnComida.classList.add("boton-activado");
    }
    if (actComida === true) {
      cuadroBebida.style.display = "block";
      btnComida.classList.remove("boton-activado");
      actComida = false;
    } else {
      cuadroBebida.style.display = "none";
      btnComida.classList.add("boton-activado");
      actComida = true;
    }
  });
  btnBebida.addEventListener("click", (e) => {
    e.preventDefault();
    if (actComida === true) {
      actComida = false;
      cuadroComida.style.display = "none";
      cuadroBebida.style.display = "block";
      btnBebida.classList.add("boton-activado");
      btnComida.classList.remove("boton-activado");
    }
    if (actBebida === true) {
      cuadroComida.style.display = "block";
      btnBebida.classList.remove("boton-activado");
      actBebida = false;
    } else {
      cuadroComida.style.display = "none";
      btnBebida.classList.add("boton-activado");
      actBebida = true;
    }
  });
}

function clickIdioma() {
  const botonIdioma = document.getElementById("id-boton-idioma");
  botonIdioma.addEventListener("click", (e) => {
    if (e.target.attributes.class.value === "img-idioma activado") {
      cerrarMenuIdioma();
    } else {
      menuIdioma();
    }
  });
}

function cerrarMenuIdioma() {
  const body = document.querySelector("body");
  body.classList.remove("fijar-body");
  const overlay = document.querySelector(".overlayMenu");
  overlay.remove();
  document.querySelector(".img-idioma").classList.remove("activado");
}

function menuIdioma() {
  // Boton para cerrar el Modal
  const cerrarModal = document.createElement("p");
  cerrarModal.textContent = "x";
  cerrarModal.classList.add("btn-cerrar");
  cerrarModal.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
    botonIdiomaActivado.classList.remove("activado");
  };

  const botonIdiomaActivado = document.querySelector(".img-idioma");
  botonIdiomaActivado.classList.add("activado");

  // const iconoImagenEnMenu = document.querySelector(".boton-idioma");
  let icono = document.createElement("img");
  icono = document.querySelector(".boton-idioma");
  icono.classList.add("icono-imagen");

  const menuDeIdioma = document.createElement("div");
  menuDeIdioma.classList.add("div-idioma");
  menuDeIdioma.innerHTML = `
    <div class="imagen-icono-idioma">${icono.outerHTML}</div>
    <p class="texto-menu-idioma">Español</p>
  `;
  console.log(document.querySelector(".img-idioma"));

  // Crea el Overlay con la imagen
  const overlay = document.createElement("div");

  overlay.appendChild(cerrarModal);
  overlay.appendChild(menuDeIdioma);

  overlay.classList.add("overlayMenu");
  overlay.onclick = function (e) {
    if (e.target.attributes.class.value === "overlayMenu") {
      console.log("boton presionaado");
      const body = document.querySelector("body");
      body.classList.remove("fijar-body");
      overlay.remove();
      botonIdiomaActivado.classList.remove("activado");
    }
  };

  // Añadirlo al HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
