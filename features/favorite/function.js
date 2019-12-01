import favorite from '../../db/models/favorite';
import user from '../../db/models/user';

const list = async (req, res) => {
  try{
    let listFavorite = await favorite.find({});
    return res.status(200).json(listFavorite);
  }catch(e){
    return res.status(500).json({ message: 'Error D:', error: e });
  }
};

const create = async (req, res) => {
  const body = req.body;
  try {
    let favoriteNew = await favorite.create(body.favorite);
    let updatedUser = await user.findOne({_id: body.user._id });
    updatedUser.favorite.push({favoriteId: favoriteNew._id});
    updatedUser.save();
    return res.status(200).json(favoriteNew);
  } catch (error) {
    return res.status(500).json({ message: 'Error D:', error: e });
  }
};

const listFavorite = async (req, res) => {
  try{
    let user = await user.findOne({_id:req.params.userId});
    let arr = [];
    console.log(user);
    for (const iterator of user.favorite) {
      arr.push(`ObjectId('${iterator.favoriteId})`);
    }
    let listFavorite = await favorite.find({_id:{$in:arr}});
    return res.status(200).json(listFavorite);
  }catch(e){
    return res.status(500).json({ message: 'Error D:', error: e });
  }
};

module.exports = {list, create, listFavorite};