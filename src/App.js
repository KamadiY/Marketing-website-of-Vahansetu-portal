import './App.css';
 import Navbar from './Component/Navbar';
 import Services from './Container/services';
 import Footer from './Component/Footer';
 import Testimonial from './Component/Testimonial';
 import About from './Component/About';
 import Contact from './Component/Contact';
 import Feature from './Component/Feature';
 import Home from './Component/Home';
 import News from './Component/News';


function App() {
  return (
    <>

      <Navbar />
      <Home/>
      <About/>
      <Services />
      <Feature/>
      <News/>
      <Testimonial />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
