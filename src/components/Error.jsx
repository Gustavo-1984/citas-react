import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div>
    <p className='bg-red-400 text-white uppercase mb-5 font-bold p-3 rounded'>{mensaje}</p>
  </div>
  )
}

export default Error