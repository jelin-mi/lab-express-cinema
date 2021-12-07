const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: "string",
    director: "string",
    stars: "string",
    image: "string",
    description: "string",
    showtimes: "string",
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;






/* const Movie = require('../models/Movie.model');

Movie.create({
title:,
director:,
stars:,
image:,
description:,
showtimes:

}) */
