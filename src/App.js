import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './Css/App.css';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
