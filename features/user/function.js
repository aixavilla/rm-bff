import user from '../../db/models/user';
import jwt, { sign } from 'jsonwebtoken';
import passwordHash from 'password-hash';


const userCreate = async (req, res) => {
  try {
    const body = {
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
    }
    body.password = passwordHash.generate(req.body.password);

    let userNew = await user.create(body);
    if(userNew){
      return res.status(200).json(userNew);
    }else{
      return res.status(400).json({ message: 'Ocurrio un error' });
    }
  } catch (e) {
    return res.status(500).json({ message: 'Ocurrio un error', error: e });
  }
};

const login = async (req, res) => {
  try{
    const body = req.body;
    const userDB = await user.findOne({email: body.email});

    if(userDB){
      if(passwordHash.verify(body.password,userDB.password)){
        let token = jwt.sign({
          data: userDB
        },'secret', { expiresIn: '1h'});

        return res.status(200).json({userDB, token: token});

      }else{
        return res.status(400).json({ message: 'Usuario o contraseña inválidos' });
      }
    }else{
      return res.status(400).json({ message: 'Usuario o contraseña inválidos' });
    }
  }catch(e){
    return res.status(500).json({ message: 'Ocurrio un error', error: e });
  }
}

module.exports = {userCreate, login};