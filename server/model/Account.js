const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createAccount = new Schema(
  {
    accountNum: {
      type: Number
    },
    actionType: {
      type: String,
      enum: ['Withdraw', 'Deposit', 'Loan'],
      required : true
    },
    amount: {
      type: Number
    },
    interest: {
      type: Number
    },
    payments: {
      type: Number
    },
    date : {
      type: Date
    },
    loanDate : {
      type: Date
    }
  }, {
  collection: 'AccountOperations',
  versionKey: false,
});

const Account = mongoose.model('createAccount', createAccount);

module.exports = Account;