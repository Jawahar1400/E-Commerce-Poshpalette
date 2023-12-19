
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assests/banner_mens.png"
import women_banner from "./Components/Assests/banner_women.png"
import kid_banner from "./Components/Assests/banner_kids.png"
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          {/* //Homepage aka poshpalette */}
          <Route path='/' element={<Shop/>} ></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} ></Route>
          <Route path='/womens' element={<ShopCategory banner={women_banner }  category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}></Route>

          {/* //productpage */}
          <Route path='/product' element={<ProductPage/>}>
            <Route path=':productId' element={<ProductPage/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
        </Routes>
        
        
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
