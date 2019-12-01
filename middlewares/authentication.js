import jwt from 'jsonwebtoken';

const verifyAuth = (req, res, next) => {
  let token = req.headers.authorization.replace('Bearer ','');
  jwt.verify(token, 'secret', (err, decoded) => {
    if(err) {
      return res.status(401).json({
        message: 'Error de token',
        error: err
      })
    }
    next();
  });
}

module.exports = { verifyAuth };
