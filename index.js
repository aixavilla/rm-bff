
import express from 'express';
import bodyParser from "body-parser";
import path from 'path';
import router from './router';

const app = express();

try{
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, x-access-token');
    if('OPTIONS' == req.method){
      res.sendStatus(200);
    }else{
      next();
    }
  });

  for (const key in router) {
    app.use(key,router[key]);
  }
  
  app.set('puerto', process.env.PORT || 3000);
  app.listen(app.get('puerto'),'0.0.0.0');
  console.info('APP esta arriba');

  
}catch(e){
  console.error(e);
  process.exit(1);
}