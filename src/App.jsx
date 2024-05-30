
import './App.css';
import Header from "./components/header/Header";
import Payment from "./pages/ payment/ Payment";
import AboutUs from "./pages/aboutUs/AboutUs";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/HomePage";
import InStock from "./pages/inStock/inStock";
import {Route, Routes} from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";


function App() {
  return (
      <div className="App">
          <Header />
          <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route path="/payment" element={<Payment/>}/>
              <Route path="/aboutUs" element={<AboutUs/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/inStock" element={<InStock/>}/>
              <Route path="/product" element={<ProductPage/>}/>
          </Routes>
      </div>
  );
}

export default App;



