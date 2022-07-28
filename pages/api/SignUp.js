import mongoose from 'mongoose'
import NewUser from "../../models/SignUpModel"


export default async function handler(req, res) {
  if(req.method === 'POST') {
    try {
      const conn = await mongoose.connect(process.env.mongooseURI)
      const userData = req.body
      const newUser = await NewUser.create(userData)
      res.status(201).json(newUser)
      conn.disconnect()

    } catch (error) {
      res.status(400).json({error: 'User Already Exists'})
    } 
  }

}
