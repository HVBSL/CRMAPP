import mongoose from "mongoose";
import { v4 as uuid } from 'uuid'

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50
    },
    email: String,
    number: {
        length: 10,
        type: Number,
        required: true
    },
    gender: String,
    dob: String,
    token: { type: String, required: true, default: uuid }
});

authSchema.set("toJSON", {
    virtuals: true,
    transform: (document, returnObject) => {
        if (returnObject._id) {
            returnObject.id = returnObject._id.toString()
        }
        delete returnObject._id

    }
})


const UserDB = mongoose.model("User", authSchema);

export default UserDB;