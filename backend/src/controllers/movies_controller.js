const Movies = require("../modules/movies");

const getMovies = async (req, res) => {
  const getALl = await Movies.find();
  res.status(200).send(getALl);
};
const getMoviesById = async (req, res) => {
    const {id}=req.params
  const getMoviesById = await Movies.findById(id);
  res.status(200).send(getMoviesById);
};

const addMovies = async (req, res) => {
  const { title, description, image, category, type } = req.body;
  const addMovie = await Movies.create({
    title,
    description,
    image,
    category,
    type,
  });
  res.status(201).send(addMovie);
};

const UpdateMovie = async (req, res) => {
  const { id } = req.params;
  const getMovie = await Movies.findOne({ _id: id });
  const { title, description, image, category, type } = req.body;

  const UpdateMovie = await getMovie.update({
    title,
    description,
    image,
    category,
    type,
  });
  res.status(202).send('Update successfully');
};

const DeleteMovie = async (req, res) => {
  const { id } = req.params;

 await Movies.deleteOne({_id:id});
  res.status(201).send("Deleted successfully");
};

module.exports = {
  getMovies,
  getMoviesById,
  addMovies,
  UpdateMovie,
  DeleteMovie,
};
