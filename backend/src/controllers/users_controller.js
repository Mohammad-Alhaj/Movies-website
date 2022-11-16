const Users = require("../modules/users");


const getUsers = async (req, res) => {
  const addUser = await Users.find();
  res.status(201).send(addUser);
};



const addUser = async (req, res) => {
  const { username, password, email } = req.body;
//   await Users.syncIndexes();
  const addUser = await Users.create({ username, password, email });
  res.status(201).send({token:addUser.token,user:{addUser}});
};

module.exports = {
  getUsers,
  addUser,
};
