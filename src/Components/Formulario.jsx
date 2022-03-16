import { useState, useEffect } from 'react';
import Error from './Error';


const Formulario = ( { pacientes, setPacientes, infoPaciente, setInfoPaciente } ) => {
  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ alta, setAlta ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [ error, setError ] = useState(false);

  useEffect( () =>{
    if( Object.keys(infoPaciente).length > 0 ) {
      setNombre(infoPaciente.nombre);
      setPropietario(infoPaciente.propietario);
      setEmail(infoPaciente.email);
      setAlta(infoPaciente.alta);
      setSintomas(infoPaciente.sintomas);
    }
  }, [infoPaciente] );


  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36);
    return random + date;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion del formulario

    if( [nombre, propietario, email, alta, sintomas].includes('') ) {
      setError(true);
    } else {
      setError(false);

      // Se crea objeto con los datos del paciente

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
      }

      if(infoPaciente.id) {
        // Editando registro
        objetoPaciente.id = infoPaciente.id;
        const actualizarPaciente = pacientes.map( pacienteState => pacienteState.id === infoPaciente.id ? objetoPaciente : pacienteState )
        setPacientes(actualizarPaciente);
        setInfoPaciente({});
      } else {
        // Agregando registro
        // Se crea copia del arreglo original y se envian datos al padre App
        objetoPaciente.id = generarId()
        setPacientes( [ ...pacientes, objetoPaciente ] );

      }

      // Se reincia el formulario

      setNombre('');
      setPropietario('');
      setEmail('');
      setAlta('');
      setSintomas('');
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 m-5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
      <p className="text-xl text-center text-slate-700 mt-5">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
      onSubmit={handleSubmit}
      className="mt-6 bg-white shadow-md rounded-lg py-10 px-5">
        {error && (
          <Error
            mensaje={'⚠ Todos los campos son obligatorios ⚠'} 
          />
        )}
        <div>
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-black">
            Nombre Mascota: {nombre}
          </label>

          <input
            id="nombre"
            type="text"
            placeholder="Ej: Coco"
            className="border-2 w-full mt-2 p-2 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
          />
        </div>
        <div className="mt-6">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-black">
            Nombre Propietario: {propietario}
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Ej: Maria Valencia"
            className="border-2 w-full mt-2 p-2 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="block text-gray-700 uppercase font-black">
            Email: {email}
          </label>

          <input
            id="email"
            type="email"
            placeholder="Ej: mariavalencia@gmail.com"
            className="border-2 w-full mt-2 p-2 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mt-6">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-black">
            Alta: {alta}
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full mt-2 p-2 rounded-md"
            value={alta}
            onChange={ (e) => setAlta(e.target.value) }
          />
        </div>
        <div className="mt-6">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-black">
            Sintomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full mt-2 p-2 rounded-md"
            placeholder="Ej: El perro vomita despues de comer"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>

        <input
          type="submit" 
          className={
            infoPaciente.id ?
            "bg-lime-600 text-white font-semibold uppercase rounded-md w-full p-2 mt-4 hover:bg-lime-700 cursor-pointer" :
            "bg-indigo-600 text-white font-semibold uppercase rounded-md w-full p-2 mt-4 hover:bg-indigo-800 cursor-pointer"
          }
          value={
            infoPaciente.id ?
              'EDITAR PACIENTE' :
              'AGREGAR PACIENTE'
          }
        />

      </form>

    </div>
  )
}

export default Formulario