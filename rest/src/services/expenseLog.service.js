const { ExpenseLog } = require('../models');

/**
 * Add an expense log
 * @param {Object} logBody
 * @returns {Promise<ExpenseLog>}
 */
const addExpenseLog = async (logBody) => {
  return ExpenseLog.create(logBody);
};

module.exports = {
  addExpenseLog,
};
