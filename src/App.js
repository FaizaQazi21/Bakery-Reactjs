import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu'
import ContactUs from './components/ContactUs/ContactUs'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/our-menu" exact component={Menu}></Route>
          <Route path="/contact-us" exact component={ContactUs}></Route>
          <Route path="/sign-up" exact component={SignUp}></Route>


        </Switch>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
