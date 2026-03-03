import './App.css';
import "./style/index.css";
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Services from './pages/Services';
import Machinery from './pages/Machinery';
import Products from './pages/Products';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/machinery" element={<Machinery />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
