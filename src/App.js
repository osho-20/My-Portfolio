import React, { useState } from 'react';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Content from './component/content'
import Particles from './component/config/Homebg'
import Home from './component/Home'
export default function App() {
  const [page, setPage] = useState({
    value: 'PORTFOLIO',
  })
  return (
    <div className="App">
      <header>
        <Header Page={{ page: page }} />
      </header>
      <div id="content-wrap" style={{ position: 'relative', zIndex: '0', width: '100%', bottom: '30px' }}>
        <Particles />
        <Home />
        {/* <Content /> */}
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

