"use client"
import React, { useState } from 'react'

const LogIn = () => {
    const [formData, setformData] = useState(null)

    const handleOnChange = ({target:{name, value}}) => {
        setformData ({formData, [name]:value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div className='w-96 h-96 bg-slate-600 rounded-3xl bg-grayFG'>
        <form onSubmit={onSubmit}>
            <div className='w-full h-3 mt-10 flex justify-center items-center'>
                <p className='font-bold text-xl text-white'>LOGIN</p>
            </div>
            <div className='w-full h-16 mt-8 flex justify-center items-center'>
                <input onChange={handleOnChange} type='email' placeholder='E-mail' className='w-11/12 h-10  px-4 text-black rounded-xl' 
                name='email' id='email'></input>
            </div>
            <div className='w-full h-16 mt-14 flex justify-center items-center'>
                <input onChange={handleOnChange} type='password' placeholder='Password' className='w-11/12 h-10  px-4 text-black rounded-xl' 
                name='password' id='password'></input>
            </div>
            <div className='w-full h-16 mt-8 flex justify-end items-end'>
                <button className='w-20 h-10 bg-buttonC mr-6 rounded-xl text-white' type='submit'>
                    <p>Login</p>
                </button>
            </div>
        </form>
    </div>
  )
}

export default LogIn