

const Error = ( {mensaje} ) => {
  return (
    <div className='bg-red-300 p-3 mb-5 rounded-xl shadow-md'>
        <p className='text-red-600 text-center'>
           {mensaje} 
        </p>
    </div>
  )
}

export default Error