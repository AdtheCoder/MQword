import React from 'react'
import NewCreateFile from '../NewCreateFile/NewCreateFile'

const ShowNew = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
      <div>
        <NewCreateFile/>
      </div>
      <div className=' col-span-2'>
        <p>dsad</p>
      </div>
    </div>
  )
}

export default ShowNew