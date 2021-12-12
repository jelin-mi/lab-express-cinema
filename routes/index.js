const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model'); 

/* GET home page */
router.get('/', (req, res) => res.render('index'));

// Iteration 3

router.get('/movies', (req, res, next) => {
    Movie.find({})
      .then((movies) => {
        // -> movies is a placeholder, it can be any word
        console.log('Retrieved movies from DB:', movies);
          res.render('movies', { movies });
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
   
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

  // Iteration 4
  router.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
    .then((peli) => {
      res.render('detail', { peli });
    })
  });
  
module.exports = router;
