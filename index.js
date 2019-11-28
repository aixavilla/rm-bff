const express = require('express');
const bodyParser = require('body-parser');
let app = express();

try{
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
  app.listen(3000,'0.0.0.0');
  console.info('APP esta arriba');
}catch(e){
  console.error(e);
  process.exit(1);
}