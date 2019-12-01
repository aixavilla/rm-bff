import mongoose from 'mongoose';
import mongoConnection from '../mongo';
mongoConnection();
const Schema = mongoose.Schema;

var favoriteSchema = new Schema({
  apiId: String,
  name: String,
  species: String,
  status: String,
  image: String,
  gender: String
});

const favorite = mongoose.model('favorite', favoriteSchema);
export default favorite;