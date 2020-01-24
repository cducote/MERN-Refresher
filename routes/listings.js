const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Listing = require('../models/Listing')

router.get('/', (req, res, next) => {
  Listing.find({}, null, {limit: 20})
  .exec()
    .then(docs => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
})

module.exports = router