import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Discount from './components/Discount';
import Cooks from './components/Cooks'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
              <Discount />
              <Cooks />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/history">
              <div>Cooks I ordered:</div>
            </Route>
            <Route path="/contact">
              <div>Our githubs are:</div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
