import mongoose from 'mongoose';
import mongoConnection from '../mongo';
mongoConnection();
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  password: String
});

const user = mongoose.model('user', userSchema);
export default user;