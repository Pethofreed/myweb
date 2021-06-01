import {
  Switch,
  Router,
  Route
} from 'react-router'
import { history } from './utils/history'
import About from './components/About'
import Header from "./components/Header";
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
      </Switch>
    </Router>
  )
}

export default App;
