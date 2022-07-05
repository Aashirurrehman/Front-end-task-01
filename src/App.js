import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Team from './components/Team';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />




        </Routes>
      
      </BrowserRouter>
    
    
    
    </>
 
  
   


      
     
    
  );
}

export default App;
