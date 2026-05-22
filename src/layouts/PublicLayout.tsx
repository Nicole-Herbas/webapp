// Outlet PERMITE MOSTRAR RUTAS HIJAS
import { Outlet } from "react-router-dom";
// IMPORTA EL NAVBAR PUBLICO
import PublicNavbar from "../components/PublicNavbar";

// COMPONENTE LAYOUT PUBLICO
export default function PublicLayout() {
  return (
    <div>
      {/* MENU PRIVADO */}
      <PublicNavbar />
      {/* CONTENIDO A ACTUALIZAR */}
      <Outlet />
    </div>
  );
}