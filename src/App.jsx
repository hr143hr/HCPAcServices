import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import WebLayout from './Layout/Website/WebLayout';
import Home from './Pages/Website/Home';
import About from './Pages/Website/About'
import Contact from './Pages/Website/Contact'
import Product from './Pages/Website/Product'
import NewAc from './Pages/Website/NewAc';
import AcParts from './Pages/Website/AcParts';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="product" element={<Product/>} />
            <Route path="newac" element={<NewAc/>} />
            <Route path="acparts" element={<AcParts/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
