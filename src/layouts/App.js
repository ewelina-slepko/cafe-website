import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <Header />
          <Navigation />
        </div>
        <h1>Welcome to ART'S CORNER CAFÉ!</h1>
        <main>
          <section className="blog">
            <Page />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>

  );
}

export default App;
