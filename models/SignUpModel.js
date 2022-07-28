import { Schema, model, models } from 'mongoose';


const signUpSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})



const NewUser = models.NewUser || model('NewUser', signUpSchema)

export default NewUser