const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { expenseLogService } = require('../services');

const addExpenseLog = catchAsync(async (req, res) => {
  const expenseLog = await expenseLogService.addExpenseLog(req.body);
  res.status(httpStatus.CREATED).send(expenseLog);
});


module.exports = {
  addExpenseLog,
};
