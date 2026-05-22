// ESTRUCTURA DE UN USUARIO AUTENTICADO
export interface User {
  id: number;
  usuario: string;
  rol: string;
}

// INTERFACE QUE DEFINE LA RESPUESTA DEL LOGIN
export interface LoginResponse {
  success: boolean;
  message: string;
  user?: User;
}
// EL USUARIO PUEDE EXISTIR O NO