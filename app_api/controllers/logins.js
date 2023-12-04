const mongoose = require('mongoose');
const Summary = mongoose.model('Summary');
const loginsCreate = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
    };
const loginsReadOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});    
 };
const loginsUpdateOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
    };
const loginsDeleteOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
    };

module.exports = {
  loginsCreate,
  loginsReadOne,
  loginsUpdateOne,
  loginsDeleteOne
};
