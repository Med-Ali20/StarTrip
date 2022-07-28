import NewUser from '../../models/SignUpModel'
import mongoose from 'mongoose'
import React from 'react'
import Navbar from '../../components/navbar'

export default function Dashboard( { users } ) {

  const usersArray = users.map( user => {
    return (
      <div className='w-10/12 bg-spaceBlack text-white pt-6 pb-6 rounded mt-3 text-lg' key={user._id} >
        <p className='mb-3 pb-1 rounded after:content-"" after:block after:w-full after:h-1 after:bg-yellow relative after:mt-4 after:absolute after:left-0 pl-6' > Name: {user.name} </p>
        <p className='pt-6 pl-6 rounded' > Email: {user.email} </p>
      </div>
    )
  })


  return (
    <>
        <Navbar />
        <div className='bg-spaceBlack w-full h-screen flex justify-center items-center' >
            <div className='bg-yellow rounded w-4/12 max-h-[600px] pt-3 overflow-y-scroll flex justify-start items-center pb-3 flex-col ' >
                {usersArray}
            </div>
        </div>
    </>
  )
}

export async function getServerSideProps() {
  const conn = await mongoose.connect(process.env.mongooseURI)
  const users = await NewUser.find()
  conn.disconnect()

  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    }
  }
}