const express = require('express');
const router = express.Router();
const ctrlInformation = require('../controllers/information');
const ctrlLogins = require('../controllers/logins');

// summaries
router
  .route('/book_summary')
  .post(ctrlInformation.summariesCreate);

router
  .route('/book_summary/:bookid')
  .get(ctrlInformation.summariesReadOne)
  .put(ctrlInformation.summariesUpdateOne)
  .delete(ctrlInformation.summariesDeleteOne);
  
// logins
router
  .route('/register')
  .post(ctrlLogins.loginsCreate);

router
  .route('/:userid')
  .get(ctrlLogins.loginsReadOne)
  .put(ctrlLogins.loginsUpdateOne)
  .delete(ctrlLogins.loginsDeleteOne);

module.exports = router;
