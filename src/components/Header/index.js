import './style.css'

function Header() {

  return(
    <>
      <header class="nav center">
        <p class="logo"><a href="/">PethoFreed</a></p>
        <input type="checkbox" name="" class="checkBtn"/>
        <ol class="center">
          <a href="/about"><li>Sobre mi</li></a>
          <a href="/education"><li>Educación</li></a>
          <a href="/experience"><li>Experiencia</li></a>
          <a href="/projects"><li>Proyectos</li></a>
          <a href="/contact"><li>Contacto</li></a>
        </ol>
      </header>
    </>
  )
}

export default Header