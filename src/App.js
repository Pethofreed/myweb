import {
  Switch,
  Router,
  Route
} from 'react-router'
import About from './components/About'
import Header from "./components/Header"
import { history } from './utils/history'
import Contact from './components/Contact'
import MyRecipe from './components/Myrecipe'
import Education from './components/Education'
import Experience from './components/Experience'
import FitnessMatch from './components/Fitnessmatch'
import MainSection from "./components/Section/index";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Header />
          <MainSection />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/view-myrecipe">
          <MyRecipe />
        </Route>
        <Route exact path="/view-fitnessmatch">
          <FitnessMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
