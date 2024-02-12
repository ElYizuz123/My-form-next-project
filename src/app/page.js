import CardInicio from '@/components/CardInicio/CardInicio'
import LogIn from '@/components/LogIn'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-full max-w-screen-2xl'>
        {/*Componente carrusel*/}
        <div className='w-full flex flex-wrap gap-4 h-dvh'>
          <CardInicio link={"/"} tittle={"Gaming accesories"}>

          </CardInicio>
        </div>
      </div>
    </div>
  )
}

export default page