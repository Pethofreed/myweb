import Header from '../Header'
import './style.css'

function FitnessMatch() {
  return (
    <>
      <Header />
      <div class="row-projects">
        <div class="title-projects">
          <p>FitnessMatch</p>
        </div>
        <div class="description-projects">
          <p>FitnessMatch es una app web que ayuda a personas que tienen intereses en mejorar
            su condición física (bajar de peso, aumentar masa muscular, ganar resistencia) a conectar
            con distintos entrenadores (coaches) que pueden ayudarlas a alcanzar esos objetivos a través
            de diferentes disciplinas (trote, pesas, cardio, ciclismo, aerobicos, entre otras) que ellos
            mismos elijen y publican en su perfil profesional. Los coaches cuentan con un perfíl para
            llenar a su gusto, subir su foto, descripción, elegir sus especialidades y disciplinas, elegir
            su disponibilidad en una agenda para que posteriormente los clientes que se interesen en ellos
            puedan elegir una fecha (día y hora) y llevar a cabo una cita de valoración, donde puedan
            establecer el tipo de rutinas y/o de trabajo que se va a realizar con ese cliente y empezar
            a trabajar en ese o esos objetivos.
          </p>
          <p>El precio de esas citas es propio de cada coach, además tiene la posibilidad de consultar
            sus proximas citas confirmadas. El coach tiene la ventaja de poder vizualizar otros perfiles
            de otros coaches e incluso de ver el perfil del cliente que ha separado una cita con él, esto
            con el interés unico de poder evaluar las métricas presentes en el perfíl del cliente.
          </p>
          <p>El cliente también cuenta con un perfíl para llenar, con foto, sus intereses, y con la opción
            de vizualizar las citas que ha separado con cada coach (si las tiene). También puede ir a la
            página principal que es donde se muestra la lista de coaches para que elija el que más se ajuste a sus
            intereses, puede ver una vista previa y rápida de los datos de ese coach, pero para ver el perfil
            completo tiene la opcion de ir al perfíl, allí podrá separar una cita con ese coach, la cita será
            confirmada solo después de terminar el proceso de pago (epayco) y tendrá en su email el correo de
            verificación del proceso realizado.
          </p>
          <div class="paragraph-video">
            <p><span>Presentación del proyecto: </span> Inicio => Min 00:00 | Fin => Min 33:20</p>
          </div>
          <div class="video-demo">
            <iframe class="video-demo-iframe"
              src="https://www.youtube.com/embed/9TBwZXJ6K1s?start=4"
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
          </div>
          <p class="other-info">Datos del desarrollo</p>
          <p>Este proyecto fue realizado con el fín de practicar la mayoría de los temas vistos en el
            programa top Full Stack de Make it Real, fue un proyecto grupal (4 personas) y tuvo una duración
            de 10 semanas. Se usó una arquitectura MVC y se creó como Api REST ya que el front y el back están
            separados. Se usó git y github para el manejo de versiones.
          </p>
          <p> Las tecnologías usadas fueron: </p>
          <div class="list">
            <ul>
              <li>Stack MERN (MongoDB, Express, React js, Node js</li>
            </ul>
          </div>
          <p>Librerías y otros - Front:</p>
          <div class="list">
            <ul>
              <li>Axios</li>
              <li>Redux</li>
              <li>History</li>
              <li>Date-fns</li>
              <li>ReactIcons</li>
              <li>ReactCollapse</li>
              <li>ReactBootstrap</li>
              <li>StyledComponents</li>
              <li>React Router Dom</li>
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
              <li>Mongoose</li>
              <li>Cloudinary</li>
              <li>JsonWebToken</li>
              <li>Nodemon (DevDependecie)</li>
            </ul>
          </div>
          <p>El despligue se realizó en: </p>
          <div class="list">
            <ul>
              <li>Vercel (frontend)</li>
              <li>Heroku (Backend)</li>
              <li>MongoAtlas (DB)</li>
            </ul>
          </div>
          <p>Repositorios Github: </p>
          <div class="list">
            <ul>
              <li>Frontend:
                <a
                  class="repos"
                  href="https://github.com/saradvr/fitnessmatch"
                  target="_blank">
                  Ver Repo
                </a>
              </li>
              <li>Backend:
                <a
                  class="repos"
                  href="https://github.com/saradvr/fitnessmatch-backend"
                  target="_blank">
                  Ver Repo
                </a>
              </li>
              <li>Notion:
                <a
                  class="repos"
                  href="https://www.notion.so/FitnessMatch-ae2398e80c33455c8518d5ac25a0f500"
                  target="_blank">
                  Ver Notion
                </a>
              </li>
              <li>Sitio Web:
                <a
                  class="repos"
                  href="https://fitnessmatch.vercel.app/"
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

export default FitnessMatch