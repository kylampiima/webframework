const mongoose = require('mongoose');
const Summary = mongoose.model('Summary');

const summariesCreate = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
    };
const summariesReadOne = function (req, res) {
     res
    .status(200)
    .json({"status" : "success"});
    };
const summariesUpdateOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
     };
const summariesDeleteOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
    };

module.exports = {
  summariesCreate,
  summariesReadOne,
  summariesUpdateOne,
  summariesDeleteOne
};
