const express = require('express');
const router = express.Router();
const Summary = require('../models/summary');
const ctrlInformation = require('../controllers/information');
const ctrlLogins = require('../controllers/logins');

// summaries
router
  .route('/book/summary')
  .post(ctrlInformation.summariesCreate);

router
  .route('/book/summary/:bookid')
  .get(ctrlInformation.summariesReadOne)
  .put(ctrlInformation.summariesUpdateOne)
  .delete(ctrlInformation.summariesDeleteOne);
  
// logins
router
  .route('/')
  .post(ctrlLogins.loginsCreate);

router
  .route('/login/:userid')
  .get(ctrlLogins.loginsReadOne)
  .put(ctrlLogins.loginsUpdateOne)
  .delete(ctrlLogins.loginsDeleteOne);

module.exports = router;
