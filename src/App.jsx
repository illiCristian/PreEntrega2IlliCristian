import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import ItemDetail from "./components/Items/ItemDetail";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar";
import Productos from "./components/Productos";

function App() {
  return (
    <BrowserRouter>
      <NavBar2 cantidad={2} />
      <Routes>
        {/* Para esta ruta le vamos a definir "productos por ejemplo" */}
        <Route exact path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route exact path={"*"} element={<Error404 />} />
        <Route exact path={"/productos"} element={<Productos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
