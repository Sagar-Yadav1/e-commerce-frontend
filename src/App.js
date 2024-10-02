import { Fragment } from "react";
import Home from "./pages/home";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Register from "./components/register";
import ProductPage from "./pages/productShop";
import Contact from "./pages/contact";
import About from "./pages/about";
import SingleProduct from "./pages/singleProduct";
import CheckOut from "./pages/checkOut";
import Card from "./pages/card";
import Profile from "./pages/profile";
// import DropDown from "./components/dropdown";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/card" element={<Card />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
