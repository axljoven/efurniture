import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Header from './components/Header'
import CategoryNav from './components/CategoryNav'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CategoryNav />

        <Router>
          <div>
            {/* <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/category">Category</Link></li>
              <li><Link to="/product">Topics</Link></li>
            </ul> */}

            <Route exact path="/" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/product" component={Product} />
          </div>
        </Router>
        
        <Footer />
      </div>
    );
  }
}

export default App;
