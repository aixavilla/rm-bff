import express from 'express';
import favorite from './function';
import validateToken from '../../middlewares/authentication';
const router = express.Router();

router.use(validateToken.verifyAuth);
router.get('/', favorite.list);
router.post('/create', favorite.create);
router.get('/:userId', favorite.listFavorite);


module.exports = router;
