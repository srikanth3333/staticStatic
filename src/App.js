import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home';
import MainHome from './components/pages/MainHome';
import Services from './components/pages/Services';
import OtherServices from './components/pages/OtherServices';
import Contact from './components/pages/Contact';
import Navbar from './components/includes/Navbar'
import Footer from './components/includes/Footer';
import Price from './components/pages/Price';
import OtherPrice from './components/pages/OtherPrice';
import Blogs from './components/pages/Blogs';
import BlogDetail from './components/pages/BlogDetail';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <Router>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <MainHome />
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
            <Route exact path="/price">
              <Price />
            </Route>
            <Route exact path="/otherprice">
              <OtherPrice />
            </Route>
            <Route exact path="/blog">
              <Blogs />
            </Route>
            <Route exact path="/blogDetail/:id">
              <BlogDetail />
            </Route>
            <Route exact path="/infinix">
              <Home />
            </Route>
              <Route exact  path="*">
              <PageNotFound />
            </Route>
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;
