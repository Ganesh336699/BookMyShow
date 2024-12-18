import jwt from 'jsonwebtoken';
import Movie from '../models/Movie.js';
import Admin from '../models/Admin.js';
import mongoose from 'mongoose';

export const addMovie = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(' ')[1];

  if (!extractedToken && extractedToken.trim() === '') {
    return res.status(404).json({ message: 'Token Not Found' });
  }

  let adminId;

  // verify token
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` });
    } else {
      adminId = decrypted.id;
      return;
    }
  });

  //create new movie
  const { title, description, releaseDate, posterUrl, featured, actors } =
    req.body;
  if (
    !title &&
    title.trim() === '' &&
    !description &&
    description.trim() == '' &&
    !posterUrl &&
    posterUrl.trim() === ''
  ) {
    return res.status(422).json({ message: 'Invalid Inputs' });
  }

  let movie;
  try {
    movie = new Movie({
      title,
      description,
      releaseDate: new Date(`${releaseDate}`),
      featured,
      actors,
      admin: adminId,
      posterUrl
    });

    const session = await mongoose.startSession();
    const adminUser = await Admin.findById(adminId);
    session.startTransaction();
    await movie.save({ session });
    adminUser.addedMovies.push(movie);
    await adminUser.save({ session });
    await session.commitTransaction();

    movie = await movie.save();
  } catch (e) {
    return console.log(e);
  }
  if (!movie) {
    return res.status(500).json({ message: 'Request failed' });
  }
  return res.status(201).json({ movie });
};

export const getMovies = async (req, res, next) => {
  const id = req.params.id;
  let movies;
  try {
    if (id) {
      movies = await Movie.findById(id);
    } else {
      movies = await Movie.find();
    }
  } catch (e) {
    return console.log(e);
  }
  if (!movies) {
    return res.status(500).json({ message: 'request failed' });
  }
  return res.status(200).json({ movies });
};
