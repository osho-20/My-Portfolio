import React, { useEffect } from 'react';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Content from './component/content'
function App() {
  useEffect(() => {
    document.title = 'Home';
  }, [])
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Content />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
