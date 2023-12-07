import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Comprar from "./pages/Comprar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PaginaBase from "./pages/PaginaBase";
import Profile from "./pages/Profile";
import Store from "./pages/Store";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="comprar" element={<Comprar />}></Route>
          <Route path="profile/:id" element={<Profile />}></Route>
          <Route path="comercio/:id" element={<Store />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
