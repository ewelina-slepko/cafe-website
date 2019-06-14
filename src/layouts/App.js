import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faLaptop } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {


  render() {
    library.add(fab, faCheckSquare, faCoffee, faLaptop)
    return (
      <Router>
        <div className="app">
          <div className="header">
            <Header />
            <Navigation />
          </div>
          <div data-aos="flip-up"
            data-aos-duration="500">
            <h1>Welcome to ART'S CORNER CAFÉ!</h1>
          </div>
          <main>
            <section className="blog">
              <Page />
            </section>
          </main>
          <footer>
            <Footer />
            <div>
            </div>
          </footer>
        </div>
      </Router >
    );
  }
}

export default App;
