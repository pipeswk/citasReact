

const Paciente = ( { paciente, setInfoPaciente, eliminarPaciente } ) => {

  const { nombre, propietario, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm(`¿Deseas eliminar a ${nombre}?`);

    if(respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="mt-6 bg-white shadow-md rounded-md px-5 py-10">
        <p className="font-bold uppercase text-gray-700 mb-3">
          Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">
          Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">
          Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">
          Fecha de alta: {''}
          <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">
          Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        
        <div className="flex justify-between mt-4">
          <button
          type="button"
          className="py-2 px-5 mx-5 bg-indigo-600 rounded-lg hover:bg-indigo-700 text-white mt-4 font-medium uppercase"
          onClick={ () => setInfoPaciente(paciente) }
          >
            Editar
          </button>
          <button
          type="button"
          className="py-2 px-5 mx-5 bg-red-600 rounded-lg hover:bg-red-700 text-white mt-4 font-medium uppercase"
          onClick={ handleEliminar }
          >
            Eliminar
          </button>
        </div>

    </div>
  )
}

export default Paciente