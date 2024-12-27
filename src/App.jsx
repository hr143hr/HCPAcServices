import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import WebLayout from './Layout/Website/WebLayout';
import Home from './Pages/Website/Home';
import About from './Pages/Website/About'
import Services from './Pages/Website/Services';
import Contact from './Pages/Website/Contact'
import Product from './Pages/Website/Product'
import NewAc from './Pages/Website/NewAc';
import AcParts from './Pages/Website/AcParts';
import Cart from './Pages/Website/Cart';
import AcServices from './Pages/Website/AcServices';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="services" element={<Services/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="product" element={<Product/>} />
            <Route path="newac" element={<NewAc/>} />
            <Route path="acaccessories" element={<AcParts/>} />
            <Route path="acservices" element={<AcServices/>} />
            <Route path="cart" element={<Cart/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
