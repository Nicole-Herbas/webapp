//Manejo de rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importacion de las paginas
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Info from "../pages/Info";
import NotFound from "../pages/NotFound";

//importacion de los layouts
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";

//importa las rutas protegidas y no protegidas
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLICAS */}
        <Route element={<PublicLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Route>

        {/* PRIVADAS */}
        {/* PrivateRoute Protege todas las rutas internas */}
        {/* PrivateLayout carga el layout privado */}
        {/* Ruta padre y rutas hijas */}
        <Route
          element={
            <PrivateRoute>
              <PrivateLayout />
            </PrivateRoute>
          }
        >
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/info"
            element={<Info />}
          />
        </Route>
        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}