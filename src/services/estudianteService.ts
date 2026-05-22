// ==========================================
// TYPE
// ==========================================
export type Estudiante = {
  codigo?: number;
  nombres: string;
  carrera: string;
  correo: string;
  edad: number;
};

// URL donde se encuentra la API PHP de estudiantes.
const URL = "http://localhost/api/estudiantes.php";

// ==========================================
// RECUPERAR TODOS - GET ALL
// ==========================================

// Función asíncrona que retorna un arreglo
// de estudiantes desde la API.
export const getEstudiantes = async (): Promise<Estudiante[]> => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Error al obtener estudiantes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ==========================================
// RETORNAR UN SOLO ESTUDIANTE - GET ONE
// ==========================================

// Función para obtener un solo estudiante
// enviando el codigo por parámetro.
export const getEstudiante = async (codigo: number): Promise<Estudiante> => {
  try {
    const response = await fetch(`${URL}?codigo=${codigo}`);
    if (!response.ok) {
      throw new Error("Error al obtener estudiante");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ==========================================
// CREAR - POST
// ==========================================

// Función para registrar un nuevo estudiante.
export const createEstudiante = async (estudiante: Estudiante) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estudiante),
    });
    if (!response.ok) {
      throw new Error("Error al registrar estudiante");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ==========================================
// ACTUALIZAR - PUT
// ==========================================

// Función para actualizar un estudiante existente.
export const updateEstudiante = async (estudiante: Estudiante) => {
  try {
    const response = await fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estudiante),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar estudiante");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ==========================================
// ELIMINAR - DELETE
// ==========================================

// Función para eliminar un estudiante mediante su codigo.
export const deleteEstudiante = async (codigo: number) => {
  try {
    const response = await fetch(`${URL}?codigo=${codigo}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar estudiante");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
