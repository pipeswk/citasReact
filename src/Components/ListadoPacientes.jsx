import Paciente from "./Paciente"
import cachorro from "../img/cachorro.png"

const ListadoPacientes = ( { pacientes, setInfoPaciente, eliminarPaciente } ) => {
    const contador = pacientes.length;
    let resultado = true;

    if(contador === 0) {
      resultado = true;
    } else {
      resultado = false
    }
;
    

  return (
    <div className="md:w-1/2 lg:w-3/5 m-5 h-screen overflow-y-scroll">
      
      {resultado === true ?
        <div>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-xl text-center text-slate-700 mt-5">
            Aqui apareceran tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div className="mt-6 px-5 py-10 ">
            <img src={cachorro} className="object-center w-96 md:ml-60" />
          </div>
        </div> :
        <div>
        <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>

        <p className="text-xl text-center text-slate-700 mt-5">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>

        { pacientes.map( paciente => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            setInfoPaciente={setInfoPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ) ) }

      </div>
      }

    </div>
  )
}

export default ListadoPacientes