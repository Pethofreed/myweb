import {
  Row,
  Col
} from 'react-bootstrap'
import './style.css'
import Header from '../Header'
import Picture from './carlosvalenciaAbout.jpg'

function About() {
  return (
    <>
      <Header />
      <section class="main-section-about">
        <div class="first-column">
          <img src={Picture} alt="personal-picture" />
        </div>
        <div class="second-column">
          ¿Quién soy?
        </div>
      </section>
    </>
  )
}

export default About