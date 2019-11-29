import mongoose from 'mongoose';
import config from 'config';

const dbConfig = config.get('dbConnection');

const mongoConnection = () => {
  mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
};

module.exports = mongoConnection;