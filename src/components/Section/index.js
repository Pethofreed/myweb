import './style.css'
import Carlos from './carlosvalencia.jpg'

function MainSection() {
  return (
    <section class="main">
      <div class="box">
        <h1>Carlos Valencia</h1>
        <p>Full Stack Developer</p>
        <button class="btn">Sobre mi</button>
      </div>
      <img src={Carlos} alt="foto-perfil"/>
    </section>
  )
}

export default MainSection