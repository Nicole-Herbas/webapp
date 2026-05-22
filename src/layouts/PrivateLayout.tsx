// Outlet PERMITE MOSTRAR RUTAS HIJAS
import { Outlet } from "react-router-dom";
// IMPORTA EL NAVBAR PRIVADO
import PrivateNavbar from "../components/PrivateNavbar";

// COMPONENTE LAYOUT PRIVADO
export default function PrivateLayout() {
  return (
    <div>
      {/* MENU PRIVADO */}
      <PrivateNavbar />
      {/* CONTENIDO A ACTUALIZAR */}
      <Outlet />
    </div>
  );
}