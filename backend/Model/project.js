import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const projectSchema = mongoose.Schema({
    
    name: String,
    email: String,
    designation: String
});
const postUser = mongoose.model('user', projectSchema);

export default postUser;

//