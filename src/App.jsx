import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import Header from './routes/Header';
import Footer from './routes/Footer';


import './App.css'

const App = () => {

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>  
      <Footer />
    </>
  )
};

export default App
