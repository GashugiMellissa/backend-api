import mongoose from "mongoose";

const UserSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role: {type: String, default:"user"},
    isLoggedIn:Boolean,
})

const User= mongoose.model('User', UserSchema);

export default User