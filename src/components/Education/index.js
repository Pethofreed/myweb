import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './style.css'
import Sena from './sena.png'
import Header from '../Header'

function Education() {
  return (
    <>
      <Header />
      <Container>
        <Row className="row-education">
          <Col className="first-column-education">
            <img src={Sena} alt="sena-picture" className="sena-picture"/>
          </Col>
          <Col className="second-column-education">
            <p class="title-about">SENA</p>
            <p>
              En septiembre del año 2017 inicié mi carrera de aprenizaje de la mano del
              Servicio Nacional De Aprendizaje SENA, allí me postulé para el programa "Tecnico
              En Pogramación De Software" al cual pude acceder luego de presentar la prueba que suelen
              presentar todos los aspirantes a ese tipo de programas. Durante los trés primeros meses
              aprendimos sobre HTML, CSS, JAVASCRIPT, PHP y MySQL siendo ese el centro de la enseñanza,
              también temas de habilidades blandas como ética y clases de inglés una vez por semana.
            </p>

            <p>Durante el segundo trimestre (enero - abril de 2018) continuamos viendo los mismos temas
              pero un poco más avanzados, como patrones de diseño, POO, CRUD, por la parte de diseño vimos
              frameworks como Bootstrap 4 y entramos a ver metodologías ágiles como SCRUM, por la parte de BDD
              vimos SQL Server y algunas interfaces de BDD como lo es PhpMyAdmin y Workbench.
            </p>
          </Col>
        </Row>

        <Row className="row-education">
          <Col className="first-column-education">
            <img
              src="https://foro.makeitreal.camp/uploads/default/original/1X/f2a40ad52b937b52c2427e1a942e38304df8c4c0.png"
              alt="sena-picture"
              className="mir-picture"/>
          </Col>
          <Col className="second-column-education">
            <p class="title-about">MAKE IT REAL | PROGRAMA TOP</p>
            <p>
              En septiembre del año 2017 inicié mi carrera de aprenizaje de la mano del
              Servicio Nacional De Aprendizaje SENA, allí me postulé para el programa "Tecnico
              En Pogramación De Software" al cual pude acceder luego de presentar la prueba que suelen
              presentar todos los aspirantes a ese tipo de programas. Durante los trés primeros meses
              aprendimos sobre HTML, CSS, JAVASCRIPT, PHP y MySQL siendo ese el centro de la enseñanza,
              también temas de habilidades blandas como ética y clases de inglés una vez por semana.
            </p>

            <p>Durante el segundo trimestre (enero - abril de 2018) continuamos viendo los mismos temas
              pero un poco más avanzados, como patrones de diseño, POO, CRUD, por la parte de diseño vimos
              frameworks como Bootstrap 4 y entramos a ver metodologías ágiles como SCRUM, por la parte de BDD
              vimos SQL Server y algunas interfaces de BDD como lo es PhpMyAdmin y Workbench.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Education
