import mongoose from 'mongoose';
import mongoConnection from '../mongo';
mongoConnection();
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: [true, 'El nombre es necesario']},
  lastname: { type: String, required: [true, 'El apellido es necesario']},
  email: { type: String, unique: true, required: [true, 'El email es necesario'] },
  password: { type: String, required: [true, 'El password es necesario']},
  favorite: [
    {
      favoriteId: { type: Schema.Types.ObjectId, ref: 'favoriteSchema' }
    }
  ]
});

const user = mongoose.model('user', userSchema);
export default user;