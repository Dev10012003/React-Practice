import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";
import AllProducts from "./components/AllProducts";
import CartProducts from "./components/CartProducts";
import Appbar from "./components/Appbar";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<AllProducts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create/" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
