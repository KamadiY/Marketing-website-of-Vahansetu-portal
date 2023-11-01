import './App.css';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Services from './Container/services';
import Footer from './Component/Footer';
import About from './Component/About';
import Contact from './Component/Contact';
import Feature from './Component/Feature';
import Home from './Component/Home';
import News from './Component/News';
import Testimonial from './Component/Testimonial';



function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/features" element={<Feature/>}/>
        <Route path="/cotactus" element={<Contact />}/>   
      </Routes>
    <Footer/>
    </BrowserRouter> */}
    <Navbar/>
    <Home/>
    <About/>
    <Services />
    <Feature/>
    <News/>
    <Testimonial/>
    <Contact />
    <Footer/>
    </>
  );
}

export default App;
