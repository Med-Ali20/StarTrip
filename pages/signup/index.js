import React, { useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import Navbar from '../../components/navbar'
import { FaUserPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'


export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [buttonState, setButtonState] = useState(false)
  const router = useRouter()

  const submitForm = () => {
    if(name.length < 3) {
      return setError('Name must be at least 3 characters')
    }
    if(/\d/.test(name)){
      return setError("Name can't include a number")
    }
    if(!validator.isEmail(email)){
      return setError('Please make sure your email is correct')
    }
    setButtonState(true)
    const userData = {name, email:email.toLowerCase()}
    axios.post('/api/SignUp',userData)
    .then(res => {
      if(res.status === 201) {
        return router.push('/')
      }

    }).catch(e => {
      if(e.response.status === 400) {
        setButtonState(false)
        return setError('Email already exists')
      }
    })
  }

  return (
    <>
      <Navbar />
      <div className='bg-spaceBlack h-screen w-full flex justify-center items-center' >
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              type="text" 
              placeholder="Name"
              value={name}
              onChange={e => {setName(e.target.value)}} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="enail" 
              type="text" 
              placeholder="Email"
              value={email}
              onChange={e => {setEmail(e.target.value)}}  />
            </div>
            <div className="flex items-center justify-between">
              <button 
              className="bg-pink text-white flex items-center justify-center font-bold py-2 px-4 ml-auto mr-auto mt-3 rounded focus:outline-none focus:shadow-outline" 
              type="button"
              disabled={buttonState}
              onClick={submitForm}>
                <FaUserPlus className='mr-1 ' /> 
                Sign Up
              </button>
            </div>
            <p className='text-base text-[red] mt-2 ' > {error} </p>
          </form>
        </div>
      </div>
    </>
  )
}
