import "./App.css";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { Element } from "react-scroll";
import Scope from "./component/Scope/Scope";
import LimitationEnhancement from "./component/LimitationFutureEnhancement/LimitationEnhancement";

function App() {
  return (
    <>
    <div className="appdiv"> 
      <Navbar />
      <ToastContainer
      toastStyle={{ backgroundColor: "var(--color-cornflowerblue)" , color:"var(--color-black)"}}
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
      />
      <div className="container-fluid hero-bg">
        <Hero />
      </div>
      <Element name="about" className="element">
        <About />
      </Element>
      <hr></hr>
      <Element name="scope" className="element">
        <Scope />
      </Element>
      <hr></hr>
      <Element name="limitation" className="element">
        <LimitationEnhancement/>
      </Element>
      <hr></hr>
      <Footer />
      </div>
    </>
  );
}

export default App;
