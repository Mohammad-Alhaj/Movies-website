const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  email: String,
  myList: [
    {
      movieID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Movies",
      },
    },
  ],
});

usersSchema.pre("save", async function (next) {
  // this line
  const user = this;
  user.password = await bcrypt.hash(user.password, 10);
  console.log("just before saving...");
  next();
});

usersSchema.virtual("token").get(function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.SECRET
  );
});

// basic
usersSchema.authenticateBasic = async function (username, password) {
  const user = await usersSchema.findOne({
    where: {
      username: username,
    },
  });

  const valid = await bcrypt.compare(password, user.password);
  if (valid) {
    return user;
  }
  throw new Error("Invalid User");
};


// Add to MY List...
usersSchema.methods.addToList = async function (movie_) {
  const movie = this.myList;

  const check = movie.findIndex(
    (ele) => ele._id.valueOf() === movie_.valueOf()
  );

  if (check >= 0) {
    return "Movies already exist!";
  } else {
    movie.push(movie_);
  }
  this.save();
  return "Added successfully";
};

module.exports = mongoose.model("Users", usersSchema);
