import express from 'express';
import { addMovie, getMovies } from '../controllers/movie-controller.js';

const movieRouter = express.Router();

movieRouter.post('/', addMovie);
movieRouter.get('/', getMovies);
movieRouter.get('/:id', getMovies);

export default movieRouter;
