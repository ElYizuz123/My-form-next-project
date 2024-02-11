"use client"
import React, { useState } from 'react'

const LogIn = () => {
    const [formData, setformData] = useState(null)

    const handleOnChange = ({target:{name, value}}) => {
        setformData ({ ...formData, [name]:value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div className='w-35 h-60 bg-slate-600 rounded-3xl bg-grayFG'>
        <form onSubmit={onSubmit} className='h-full w-full'>
            <div className='w-full h-5 mt-8 flex justify-center items-center'>
                <p className='font-bold text-2xl text-white'>LOGIN</p>
            </div>
            <div className='w-full h-10 mt-10 flex justify-center items-center'>
                <input onChange={handleOnChange} type='email' placeholder='E-mail' className='w-91 h-100  px-4 text-black rounded-xl'
                name='email'></input>
            </div>
            <div className='w-full h-10 mt-20 flex justify-center items-center'>
                <input onChange={handleOnChange} type='password' placeholder='Password' className='w-91 h-100  px-4 text-black rounded-xl' 
                name='password'></input>
            </div>
            <div className='w-full h-10 mt-10 flex justify-end items-end'>
                <button className='w-20 h-100 bg-buttonC mr-6 rounded-xl text-white' type='submit'>
                    <p className='text-xl'>Login</p>
                </button>
            </div>
        </form>
    </div>
  )
}

export default LogIn