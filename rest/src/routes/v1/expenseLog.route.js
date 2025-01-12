const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { expenseLogValidation } = require('../../validations');
const { expenseLogController } = require('../../controllers');

const router = express.Router();

router.post('/add', [auth(), validate(expenseLogValidation.add)], expenseLogController.addExpenseLog);

module.exports = router;

module.exports = router;