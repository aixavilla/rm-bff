import express from 'express';
import user from './function';
const router = express.Router();

router.post('/userCreate',user.userCreate);
router.post('/login',user.login);

module.exports = router;
