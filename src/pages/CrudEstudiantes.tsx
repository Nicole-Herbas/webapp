// useEffect permite ejecutar código automáticamente.
// useState permite manejar estados dentro del componente.
import { useEffect, useState } from "react";
// Importa funciones del servicio CRUD.
// También importa el type Estudiante.
import {
  getEstudiantes,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante,
  type Estudiante,
} from "../services/estudianteService";

function CrudEstudiantes() {

  // ==========================================
  // ESTADOS
  // ==========================================

  // Estado que almacena la lista de estudiantes.
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  // Estado para mostrar si está cargando datos.
  const [loading, setLoading] = useState(false);
  // Estado para guardar mensajes de error.
  const [error, setError] = useState("");
  // Estado que indica si se está editando. false:crear | true:editar
  const [editing, setEditing] = useState(false);
  // Estado para guardar el codigo del estudiante.
  const [codigo, setCodigo] = useState<number | null>(null);
  // Estado para los nombres del estudiante.
  const [nombres, setNombres] = useState("");
  // Estado para la carrera.
  const [carrera, setCarrera] = useState("");
  // Estado para el correo.
  const [correo, setCorreo] = useState("");
  // Estado para la edad.
  const [edad, setEdad] = useState(0);

  // ==========================================
  // CARGAR ESTUDIANTES - LOAD
  // ==========================================

  // Función para recuperar todos los estudiantes.
  const loadEstudiantes = async () => {
    try {
      // Activa el loading.
      setLoading(true);
      // Limpia errores anteriores.
      setError("");
      // Obtiene datos desde la API.
      const data = await getEstudiantes();
      // Guarda estudiantes en el estado.
      setEstudiantes(data);
    } catch (error) {
      setError("Error al cargar estudiantes");
    } finally {
      setLoading(false);
    }
  };

  // useEffect se ejecuta una sola vez
  // al cargar el componente.
  useEffect(() => { loadEstudiantes(); }, []);

  // ==========================================
  // GUARDAR ESTUDIANTE - SAVE
  // ==========================================

  // Función que se ejecuta al enviar formulario.
  const handleSubmit = async (e: React.FormEvent) => {
    // Evita que el formulario recargue la página.
    e.preventDefault();
    try {
      const estudiante: Estudiante = {
        // Si codigo es null se envía undefined.
        codigo: codigo || undefined,
        // Datos del formulario.
        nombres,
        carrera,
        correo,
        edad,
      };

      // EDITAR
      // Actualiza estudiante.
      // El formulario es reutilizado para:
      // registrar estudiantes
      // editar estudiantes
      if (editing) {
        await updateEstudiante(estudiante);
      } else {
        // CREAR
        await createEstudiante(estudiante);
      }
      // recargar
      loadEstudiantes();
      // limpiar
      resetForm();
    } catch (error) {
      setError("Error al guardar");
    }
  };

  // ==========================================
  // ELIMINAR - DELETE
  // ==========================================

  // Función para eliminar estudiante.
  const handleDelete = async (codigo: number) => {
    if (!confirm("¿Eliminar estudiante?")) {
      // Si cancela sale de la función.
      return;
    }

    try {
      // Elimina estudiante desde API.
      await deleteEstudiante(codigo);
      // Recarga lista.
      loadEstudiantes();
    } catch (error) {
      setError("Error al eliminar");
    }
  };

  // ==========================================
  // EDITAR - EDIT
  // ==========================================

  // Carga datos del estudiante al formulario.
  const handleEdit = (estudiante: Estudiante) => {
    // Activa modo edición.
    setEditing(true);
    // Guarda codigo.
    setCodigo(estudiante.codigo || null);
    // Carga datos en inputs.
    setNombres(estudiante.nombres);
    setCarrera(estudiante.carrera);
    setCorreo(estudiante.correo);
    setEdad(estudiante.edad);
  };

  // ==========================================
  // RESET
  // ==========================================

  // Limpia formulario
  const resetForm = () => {
    // Desactiva edición.
    setEditing(false);
    // Resetea los datos
    setCodigo(null);
    setNombres("");
    setCarrera("");
    setCorreo("");
    setEdad(0);
  };

  // ==========================================
  // COMPONENTE PRINCIPAL
  // ==========================================

  return (

    <div>

      <h1>
        CRUD Estudiantes
      </h1>

      <hr />

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} />
        <br /><br />
        <input type="text" placeholder="Carrera" value={carrera} onChange={(e) => setCarrera(e.target.value)} />
        <br /><br />
        <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <br /><br />
        <input type="number" placeholder="Edad" value={edad} onChange={(e) => setEdad(Number(e.target.value))} />
        <br /><br />

        <button type="submit">
          {editing ? "Actualizar" : "Guardar"}
        </button>

        {" "}

        <button type="button" onClick={resetForm}>
          Limpiar
        </button>

      </form>

      <hr />

      {loading && <p>Cargando...</p>}

      {error && <p>{error}</p>}

      <h2>
        Lista Estudiantes
      </h2>

      <ul>
        {estudiantes.map((e) => (
          <li key={e.codigo}>
            <strong>{e.nombres}</strong>
            <br />
            Carrera: {e.carrera}
            <br />
            Correo: {e.correo}
            <br />
            Edad: {e.edad}
            <br /><br />
            <button onClick={() => handleEdit(e)}>
              Editar
            </button>

            {" "}

            <button onClick={() => handleDelete(e.codigo!)}>
              Eliminar
            </button>

            <hr />

          </li>
        ))}

      </ul>

    </div>
  );
}

export default CrudEstudiantes;
