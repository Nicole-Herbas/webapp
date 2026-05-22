import { Navigate } from "react-router-dom";
//FUNCION QUE VERIFICA AUTENTICACION
import { isAuthenticated } from "../utils/auth";
import type { JSX } from "react";

interface Props {
  children: JSX.Element;
}

// SI EL USUARIO NO ESTA AUTENTICADO: MUESTRA EL COMPONENTE
// SI EL USUARIO YA ESTA AUTENTICADO: REDIRECCIONA AL DASHBOARD
export default function PublicRoute({ children }: Props) {
  return !isAuthenticated() ? children : <Navigate to="/dashboard" />;
}