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
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  )
};

export default App
