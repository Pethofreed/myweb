import './style.css'
import Header from '../Header'
import Picture from './carlosvalenciaAbout.jpg'

function About() {
  return (
    <>
      <Header />
      <section>
        <div className="row-about">
          <div className="first-column-about">
            <img src={Picture} alt="personal-picture" class="carlos-picture" />
          </div>
          <div className="second-column">
            <p class="title-about">¿Quién soy?</p>
            <p>
              ¡Hola! me llamo <span>Carlos Valencia Henao</span> y tengo 26 años,
              (el lampiño de la foto jaja) soy Colombiano... paisa, y soy un enamorado
              más del mundo del desarrollo.
            </p>

            <p>Soy músico empírico y tengo un poco de experiencia tocando varios
              instrumentos. He tenido una estrecha relación con el arte, puesto que
              además de la música he tenido experiencia en teatro, llegando a participar
              incluso con el grupo de teatro Sol de oriente en el famoso festival "Antioquia
              Vive el Teatro".
            </p>

            <p>También he participado en algunas bandas de Rock y una orquesta
              de musica bailable. Me encanta escuchar Reggae Music y escribir canciones.
              Actualmente me encuentro ubicado en el eje cafetero colombiano donde puedo
              disfrutar de un delicioso clima y el aroma a café.
            </p>

            <p>Me encanta el desarrollo web y la programación en sus múltiples maneras
              de existir. Desde muy joven puse mi mirada en esta profesión y desde entonces
              no me he separado de el. Todo empezó cuando conseguí amigos programadores
              (para entonces no sabía que lo eran) y me mostraban lo que hacian y cómo eso
              se mostraba en la pantalla de un computador o un celular, yo alucinaba, fue amor
              a primera vista y desde entonces entregué mucho de mi para poder convertirme en
              desarrollador.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
