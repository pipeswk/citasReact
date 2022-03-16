import { useState, useEffect } from "react";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import ListadoPacientes from "./Components/ListadoPacientes";

function App() {
  const [ pacientes, setPacientes ] = useState([]);
  const [ infoPaciente, setInfoPaciente ] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesEliminados = pacientes.filter( paciente => paciente.id !== id );
    setPacientes( pacientesEliminados );
  }

  useEffect( () => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientesVigentes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, [] )

  useEffect( () => {
    localStorage.setItem('pacientesVigentes', JSON.stringify( pacientes ))
  }, [pacientes] )

  
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          infoPaciente={infoPaciente}
          setInfoPaciente={setInfoPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setInfoPaciente={setInfoPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
