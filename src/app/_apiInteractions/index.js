const { google } = require("googleapis");
const authorize = require("./authorize");

const pullExpenses = require("./pullExpenses");
const createExpenseTracker = require("./createExpenseTracker");

createExpenseTracker();