import './style.css'
import Cards from '../Card'
import Header from '../Header'

function Experience(){
  return (
    <>
      <Header />
      <div class="title-projects">
        <p>Proyectos</p>
      </div>
      <div class="cards-projects">
        <Cards />
      </div>
    </>
  )
}

export default Experience