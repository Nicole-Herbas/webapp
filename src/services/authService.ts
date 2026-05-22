//lógica para conectarse al backend y realizar el login.
//LIBRERIA PARA GESTIONAR PETICIONES
import axios from "axios";
// IMPORTA EL TIPO LoginResponse
import type { LoginResponse } from "../types/auth";

// URL BASE DE LA API
const API_URL = "http://localhost/api";

// FUNCION ASINCRONA login
export async function login(
  usuario: string,
  password: string
): Promise<LoginResponse> {
//PROMESA DE TIPO LoginResponse

  try {
     // REALIZA PETICION POST AL BACKEND PHP
    const response = await axios.post<LoginResponse>(
      `${API_URL}/login.php`,
      {
        usuario,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: "Error de conexión"
    };
  }
}