import './style.css'

function Header() {

  return(
    <>
      <header class="nav center">
        <p class="logo">PethoFreed</p>
        <input type="checkbox" name="" class="checkBtn"/>
        <ol class="center">
          <a href="#"><li>Sobre mi</li></a>
          <a href="#"><li>Educación</li></a>
          <a href="#"><li>Experiencia</li></a>
          <a href="#"><li>Proyectos</li></a>
          <a href="#"><li>Contacto</li></a>
        </ol>
      </header>
    </>
  )
}

export default Header