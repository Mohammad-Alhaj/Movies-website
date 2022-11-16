const Users = require("../modules/users");

const base64 = require("base-64");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  try {
    let hash = req.headers.authorization.split(" ")[1];

    const [username, password] = base64.decode(hash).split(":");
    const user = await Users.findOne({ username: username });
    const check = await bcrypt.compare(password, user.password);
    if (check) {
    res.status(200).send({token:user.token,user});
     
      next();
    } else {
    res.status(403).send("Invalid Login");
    }
  } catch (err) {
    console.error(err);
    res.status(403).send("Invalid Login");
  }
};
