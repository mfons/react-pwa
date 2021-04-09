import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import MediaRecorderTest from './Views/MediaRecorderTest'
import Product from './Views/Product'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
            <Route path="/mediaRecorderTest">
              <MediaRecorderTest />
            </Route>
          </Switch>
        </div>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
