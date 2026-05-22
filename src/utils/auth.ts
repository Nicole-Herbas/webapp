//Funcion que verifica si el usuarioe sta autenticado
export function isAuthenticated(): boolean {
  return localStorage.getItem("auth") === "true";
}

// FUNCION PARA CERRAR SESION
export function logout(): void {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
}

// FUNCION QUE OBTIENE EL USUARIO GUARDADO
export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}