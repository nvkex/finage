const Joi = require('joi');
const { expenseCategories } = require('../config/expense');

const add = {
  body: Joi.object().keys({
    amount: Joi.number().required(),
    date: Joi.date().required(),
    category: Joi.string().required().valid(expenseCategories),
    subCategory: Joi.string(),
  }),
};

module.exports = {
  add
};
