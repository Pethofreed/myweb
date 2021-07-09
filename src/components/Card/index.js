import './style.css'

function Cards() {
  return (
    <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>01</h2>
            <h3>My Recipe</h3>
            <p>Es una app web que permite crear recetas y compartirlas para que otros puedan prepararlas
              y disfrutar.
            </p>
            <a href="/view-myrecipe">Leer más</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>02</h2>
            <h3>FitnessMatch</h3>
            <p>Es una app web que permite conectar con un entrenador personal
              para así mejorar tu condición física y tu salud.</p>
            <a href="/view-fitnessmatch">Leer más</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>03</h2>
            <h3>Tres Pi Medios</h3>
            <p>Es una agencia de marketing digital y desarrollo web</p>
            <a href="#">Leer más</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>04</h2>
            <h3>El Quijote</h3>
            <p>Es un programa de escritrio creado para facilitar la
              administración de un hotel en diferentes ámbitos.</p>
            <a href="#">Leer más</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cards