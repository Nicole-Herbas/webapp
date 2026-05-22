import { Navigate } from "react-router-dom";
//FUNCION QUE VERIFICA AUTENTICACION
import { isAuthenticated } from "../utils/auth";
import type { JSX } from "react";
interface Props {
  children: JSX.Element;
}

// SI EL USUARIO ESTA AUTENTICADO: MUESTRA EL COMPONENTE HIJO
// SI NO ESTA AUTENTICADO: REDIRECCIONA AL LOGIN
export default function PrivateRoute({ children }: Props) 
{
  return isAuthenticated() ? children : <Navigate to="/login" />;
}