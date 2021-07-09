import Header from '../Header'
import './style.css'

function MyRecipe() {
  return (
    <>
      <Header />
      <div class="row-projects">
        <div class="title-my-recipe">
          <p>My Recipe</p>
        </div>
        <div class="main-container">
          <section class="description">

            <p>My Recipe es una app web que le permite a cualquier usuario que ingrese, ver las recetas que se
              encuentran en la landing page, leer o vizualizar cualquiera de esas recetas y por último, mediante
              una barra de búsqueda, encontrar las recetas que desee encontrar y vizualizarlas, todo esto
              sin la necesidad de ser un usuario registrado.
            </p>

            <p>Además de esto, cuenta con las opciones de, iniciar sesión y/o registrarse.</p>

            <p>El otro tipo de usuario, es aquél que se ha registrado y que cuenta con las mismas opciones
              que el usuario NO REGISTRADO, además de eso cuenta con algunas opciones adicionales como:
              crear recetas, publicarlas, añadir cualquier receta a sus favoritos (incluso las propias),
              editar sus recetas, eliminar cualquier receta, puntuar otras recetas (dar like),
              quitar de favoritos y editar sus datos de cuenta.
            </p>

          </section>
          <section class="multimedia">
            <div class="video-demo">
              <iframe class="video-demo-iframe"
                src="https://www.youtube.com/embed/H94FG_DdYMs?start=1440"
                title="YouTube video player" frameborder="0"
                allow="accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture"
                allowfullscreen
              >
              </iframe>
              <p class="project-demo">Presentación del proyecto:</p>
              <p>Inicio => Min 24:00 </p>
              <p> Fin => Min 49:20</p>
            </div>
          </section>
        </div>
        <div class="description-projects">
          <p class="other-info">Datos del desarrollo</p>
          <p>Este proyecto fue realizado con el fín de practicar muchos de los temas vistos en el
            programa top Full Stack de Make it Real, fue un proyecto individual y tuvo una duración
            de 2 semanas. Se usó una arquitectura MVC y se creó como Api REST ya que el front y el back están
            separados. Se usó git y github para el manejo de versiones.
          </p>
          <p> Las tecnologías usadas fueron: </p>
          <div class="list">
            <ul>
              <li>Stack PERN (PostgreSQL, Express, React js, Node js</li>
            </ul>
          </div>
          <p>Librerías y otros - Front:</p>
          <div class="list">
            <ul>
              <li>Axios</li>
              <li>Redux</li>
              <li>History</li>
              <li>Draft js</li>
              <li>Draftjs-to-html</li>
              <li>React Router Dom</li>
              <li>React Draft Wysiwyg</li>
              <li>ReactBootstrap y CSS</li>
              <li>Redux-logger (DevDependencie)</li>
            </ul>
          </div>
          <p>Librerías y otros - Back</p>
          <div class="list">
            <ul>
              <li>Cors</li>
              <li>Bcrypt</li>
              <li>Busboy</li>
              <li>Morgan</li>
              <li>Dotenv</li>
              <li>NodeMailer</li>
              <li>Cloudinary</li>
              <li>JsonWebToken</li>
              <li>ORM (Sequelize)</li>
              <li>Nodemon (DevDependecie)</li>
            </ul>
          </div>
          <p>El despligue se realizó en: </p>
          <div class="list">
            <ul>
              <li>Vercel (frontend)</li>
              <li>Heroku (Backend)</li>
              <li>Postgres (DB)</li>
            </ul>
          </div>
          <p>Repositorios Github: </p>
          <div class="list">
            <ul>
              <li>Frontend:
                <a
                  class="repos"
                  rel="noreferrer"
                  href="https://github.com/Pethofreed/myrecipe"
                  target="_blank">
                  Ver Repo
                </a>
              </li>
              <li>Backend:
                <a
                  class="repos"
                  rel="noreferrer"
                  href="https://github.com/Pethofreed/recipe_server"
                  target="_blank">
                  Ver Repo
                </a>
              </li>
              <li>Notion:
                <a
                  class="repos"
                  rel="noreferrer"
                  href="https://www.notion.so/My-Recipe-c4c87d51e3a24d9598e5ddaad780b92e"
                  target="_blank">
                  Ver Notion
                </a>
              </li>
              <li>Sitio Web:
                <a
                  class="repos"
                  rel="noreferrer"
                  href="https://myrecipe-ruby.vercel.app"
                  target="_blank">
                  Visitar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyRecipe