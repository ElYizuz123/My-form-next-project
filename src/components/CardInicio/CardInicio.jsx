import React from 'react'

const CardInicio = ({tittle, link, children}) => {
  return (
    <div className='w-25 h-50 flex flex-col bg-white'>
        <div>
            {tittle}
        </div>
        <div className='w-full flex-1'>
            {children}
        </div>
        <link href={link} className='text-buttonC '>
            See more about...
        </link>
    </div>
  )
}

export default CardInicio