const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { expenseCategories } = require('../config/expense');

const expenseLogSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    category: {
      type: String,
      enum: expenseCategories
    },
    subCategory: {
      type: String,
      trim: true,
      default: null
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
expenseLogSchema.plugin(toJSON);
expenseLogSchema.plugin(paginate);

/**
 * @typedef ExpenseLog
 */
const ExpenseLog = mongoose.model('ExpenseLog', expenseLogSchema);

module.exports = ExpenseLog;
