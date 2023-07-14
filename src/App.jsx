import { Route, Routes } from 'react-router-dom';
import About from './routes/about';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import Services from './routes/Services';
import Header from './routes/Header';


import './App.css'

const App = () => {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </>
  )
};

export default App
