
import './App.css';
import Header from "./components/header/Header";
import Payment from "./pages/ payment/ Payment";
import AboutUs from "./pages/aboutUs/AboutUs";
import Banal from "./pages/banal/Banal";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/HomePage";
import InStock from "./pages/inStock/inStock";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Header />
          <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route path="header" element={<Header/>} />
              <Route path="payment" element={<Payment/>}/>
              <Route path="aboutUs" element={<AboutUs/>}/>
              <Route path="banal" element={<Banal/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="inStock" element={<InStock/>}/>
          </Routes>
      </div>
  );
}

export default App;



