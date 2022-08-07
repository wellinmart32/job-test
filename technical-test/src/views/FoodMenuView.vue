<template>
  <div id="app">
    <header class="header">
      <router-link to="/">
        <div class="boton-principal-cerrar">x</div>
      </router-link>
      <img class="imagen-titulo" src="../assets/subcategory.jpeg" />
      <h1 class="header-titulo">COMIDA</h1>
      <button class="boton-alergenos">MOSTRAR ALÉRGENOS</button>
      <div class="contenedor-lista-alergenos">
        <div class="separacion-titulo-alergenos">
          <span></span>
          <h2 class="titulo-alergenos">ALÉRGENOS</h2>
          <span class="boton-cierre-alergenos">x</span>
        </div>
        <div>
          <ul class="lista-alergenos">
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/gluten.png"
                alt="icono alergeno"
              />
              <p>Altramuces</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/lacteos.png"
                alt="icono alergeno"
              />
              <p>Apio</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/gluten.png"
                alt="icono alergeno"
              />
              <p>Cacahuete</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/lacteos.png"
                alt="icono alergeno"
              />
              <p>Crustaceos</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/gluten.png"
                alt="icono alergeno"
              />
              <p>Gluten</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/lacteos.png"
                alt="icono alergeno"
              />
              <p>Huevo</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/gluten.png"
                alt="icono alergeno"
              />
              <p>Lacteos</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/lacteos.png"
                alt="icono alergeno"
              />
              <p>Mostaza</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/gluten.png"
                alt="icono alergeno"
              />
              <p>Pescado</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/lacteos.png"
                alt="icono alergeno"
              />
              <p>Sésamo</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/gluten.png"
                alt="icono alergeno"
              />
              <p>Soja</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/lacteos.png"
                alt="icono alergeno"
              />
              <p>Sulfitos</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/gluten.png"
                alt="icono alergeno"
              />
              <p>Fruto secos</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/lacteos.png"
                alt="icono alergeno"
              />
              <p>Moluscos</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/gluten.png"
                alt="icono alergeno"
              />
              <p>Vegano</p>
            </li>
            <li class="li-elemento-alergenos">
              <img
                class="icono-alergenos"
                src="../assets/icons/lacteos.png"
                alt="icono alergeno"
              />
              <p>Vegetariano</p>
            </li>
          </ul>
        </div>
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

    <section class="section">
      <div class="contenedor-lista-cuadros">
        <ul class="lista-cuadros">
          <li class="li-lista-cuadros">
            <div id="id-cuadro-0" class="contenedor-imagen-cuadro">
              <div id="id-cuadro-0" class="contenedor-img">
                <!-- <img class="imagen-titulo-cuadro" src="../assets/category.jpeg" alt="Imagen titulo cuadro"> -->
                <h2 id="id-cuadro-0" class="titulo-cuadro">QUICKLES</h2>
              </div>
            </div>
            <div class="contenedor-lista-productos">
              <ul id="lista-0" class="lista-productos">
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">HUMMUS CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">4,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">GUACAMOLE CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">6,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">JAMON IBERICO DE HUELVA</h3>
                    <h4 class="texto-precio">12,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">MIXTA DE QUESOS Y FIAMBRES</h3>
                    <img
                      class="icono-producto"
                      src="../assets/icons/gluten.png"
                      alt="icono 2"
                    />
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">SURTIDO DE IBERICOS</h3>
                    <p>Caña de lomo, chorizo y salchichón</p>
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">PAPAS</h3>
                    <h4 class="texto-precio">1,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="li-lista-cuadros">
            <div id="id-cuadro-1" class="contenedor-imagen-cuadro">
              <div id="id-cuadro-1" class="contenedor-img">
                <!-- <img class="imagen-titulo-cuadro" src="../assets/category.jpeg" alt="Imagen titulo cuadro"> -->
                <h2 id="id-cuadro-1" class="titulo-cuadro">
                  EXTRAORDINARY TINS - ENLATADO
                </h2>
              </div>
            </div>
            <div class="contenedor-lista-productos">
              <ul id="lista-1" class="lista-productos">
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">HUMMUS CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">4,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">GUACAMOLE CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">6,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">JAMON IBERICO DE HUELVA</h3>
                    <h4 class="texto-precio">12,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">MIXTA DE QUESOS Y FIAMBRES</h3>
                    <img
                      class="icono-producto"
                      src="../assets/icons/gluten.png"
                      alt="icono 2"
                    />
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">SURTIDO DE IBERICOS</h3>
                    <p>Caña de lomo, chorizo y salchichón</p>
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">PAPAS</h3>
                    <h4 class="texto-precio">1,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="li-lista-cuadros">
            <div id="id-cuadro-2" class="contenedor-imagen-cuadro">
              <div id="id-cuadro-2" class="contenedor-img">
                <!-- <img class="imagen-titulo-cuadro" src="../assets/category.jpeg" alt="Imagen titulo cuadro"> -->
                <h2 id="id-cuadro-2" class="titulo-cuadro">BOCATAS</h2>
              </div>
            </div>
            <div class="contenedor-lista-productos">
              <ul id="lista-2" class="lista-productos">
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">HUMMUS CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">4,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">GUACAMOLE CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">6,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">JAMON IBERICO DE HUELVA</h3>
                    <h4 class="texto-precio">12,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">MIXTA DE QUESOS Y FIAMBRES</h3>
                    <img
                      class="icono-producto"
                      src="../assets/icons/gluten.png"
                      alt="icono 2"
                    />
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">SURTIDO DE IBERICOS</h3>
                    <p>Caña de lomo, chorizo y salchichón</p>
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">PAPAS</h3>
                    <h4 class="texto-precio">1,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="li-lista-cuadros">
            <div id="id-cuadro-3" class="contenedor-imagen-cuadro">
              <div id="id-cuadro-3" class="contenedor-img">
                <!-- <img class="imagen-titulo-cuadro" src="../assets/category.jpeg" alt="Imagen titulo cuadro"> -->
                <h2 id="id-cuadro-3" class="titulo-cuadro">ENSALADAS</h2>
              </div>
            </div>
            <div class="contenedor-lista-productos">
              <ul id="lista-3" class="lista-productos">
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">HUMMUS CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">4,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">GUACAMOLE CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">6,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">JAMON IBERICO DE HUELVA</h3>
                    <h4 class="texto-precio">12,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">MIXTA DE QUESOS Y FIAMBRES</h3>
                    <img
                      class="icono-producto"
                      src="../assets/icons/gluten.png"
                      alt="icono 2"
                    />
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">SURTIDO DE IBERICOS</h3>
                    <p>Caña de lomo, chorizo y salchichón</p>
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">PAPAS</h3>
                    <h4 class="texto-precio">1,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="li-lista-cuadros">
            <div id="id-cuadro-4" class="contenedor-imagen-cuadro">
              <div id="id-cuadro-4" class="contenedor-img">
                <!-- <img class="imagen-titulo-cuadro" src="../assets/category.jpeg" alt="Imagen titulo cuadro"> -->
                <h2 id="id-cuadro-4" class="titulo-cuadro">WRAPS POCKE</h2>
              </div>
            </div>
            <div class="contenedor-lista-productos">
              <ul id="lista-4" class="lista-productos">
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">HUMMUS CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">4,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">GUACAMOLE CON NACHOS</h3>
                    <div class="contenedor-iconos">
                      <img
                        class="icono-producto"
                        src="../assets/icons/gluten.png"
                        alt="icono 1"
                      />
                      <img
                        class="icono-producto"
                        src="../assets/icons/lacteos.png"
                        alt="icono 2"
                      />
                    </div>
                    <h4 class="texto-precio">6,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">JAMON IBERICO DE HUELVA</h3>
                    <h4 class="texto-precio">12,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">MIXTA DE QUESOS Y FIAMBRES</h3>
                    <img
                      class="icono-producto"
                      src="../assets/icons/gluten.png"
                      alt="icono 2"
                    />
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">SURTIDO DE IBERICOS</h3>
                    <p>Caña de lomo, chorizo y salchichón</p>
                    <h4 class="texto-precio">10,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
                <li class="li-lista-producto">
                  <div class="producto-iterado">
                    <h3 class="titulo-producto">PAPAS</h3>
                    <h4 class="texto-precio">1,00 €</h4>
                  </div>
                  <div class="contenedor-imagen-producto">
                    <img
                      class="imagen-producto"
                      src="../assets/subcategory.jpeg"
                      alt="imagen producto"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  clickIdioma();
  menuAlergenos();
  colapsarCuadros();
}

function colapsarCuadros() {
  let botonesCuadro = document.querySelectorAll(".contenedor-img");
  let botonCuadro = document.querySelector(".contenedor-img");
  console.log(botonesCuadro);
  console.log(botonesCuadro[0]);
  console.log(botonCuadro);
  var i;
  for (i = 0; i < botonesCuadro.length; i++) {
    botonesCuadro[i].addEventListener("click", (e) => {
      console.log(e.target.attributes.id.value);
      console.log(e.target.attributes.id.value[10]);
      console.log(i);
      // botonCuadro.toggle('active');
      // if(i){

      // }
      var contenido = document.querySelector(
        `#lista-${e.target.attributes.id.value[10]}`
      ); // #lista-0
      console.log(contenido);
      if (contenido.style.maxHeight) {
        contenido.style.maxHeight = null;
      } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      }
    });
  }
}

function menuAlergenos() {
  let botonMostrarAlergenos = document.querySelector(".boton-alergenos");
  botonMostrarAlergenos.addEventListener("click", () => {
    let listaAlergenos = document.querySelector(".contenedor-lista-alergenos");
    botonMostrarAlergenos.style.display = "none";
    listaAlergenos.style.display = "block";
  });
  const botonCerrarAlergenos = document.querySelector(".boton-cierre-alergenos");
  botonCerrarAlergenos.addEventListener("click", () => {
    let listaAlergenos = document.querySelector(".contenedor-lista-alergenos");
    listaAlergenos.style.display = "none";
    botonMostrarAlergenos.style.display = "block";
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
  name: "FoodMenuView",
  props: {
    msg: String,
  },
  mounted() {
    iniciarApp();
  },
};
</script>

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
