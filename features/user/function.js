import user from '../../db/models/user';

const userCreate = async (req, res) => {
  try {
    const body = req.body;
    let userNew = await user.create(body);
    return res.status(200).json(userNew);
  } catch (e) {
    res.status(500).json({ message: 'Error D:', error: e });
  }
};

module.exports = {userCreate};