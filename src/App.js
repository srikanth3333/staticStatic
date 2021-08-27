import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import OtherServices from './components/pages/OtherServices';
import Contact from './components/pages/Contact';
import Navbar from './components/includes/Navbar'
import Footer from './components/includes/Footer';

function App() {
  return (
    <Router>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact-us">
              <Contact />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/otherServices">
              <OtherServices />
            </Route>
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;
