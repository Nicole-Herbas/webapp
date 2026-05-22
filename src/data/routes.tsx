import Home from "../pages/Home";
import Usuarios from "../pages/Usuarios";
import Reportes from "../pages/Reportes";
import Roles from "../pages/Roles";
import ApiExample from "../pages/ApiExample";
import Products from "../pages/Products";
import Movies from "../pages/Movies";
import CrudProductos from "../pages/CrudProductos";

export const routes = [
  {
    name: "Inicio",
    path: "/",
    element: <Home />
  },
  {
  path: "/crud-productos",
  element: <CrudProductos />,
  name: "CRUD Productos",
  },
  {
    name: "Usuarios",
    path: "/usuarios",
    element: <Usuarios />
  },
  {
  path: "/api",
  element: <ApiExample />,
  name: "API Ejemplo",
  },
  {
  path: "/products",
  element: <Products />,
  name: "Productos",
  },
  {
  path: "/movies",
  element: <Movies />,
  name: "Películas",
  },
  {
  name: "Roles",
  path: "/roles",
  element: <Roles />
  },
  {
    name: "Reportes",
    path: "/reportes",
    element: <Reportes />
  }
];