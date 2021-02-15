const { Mongoose } = require('mongoose');
const Account = require('./model/Account');
const apiRouter = require('express').Router();
var ObjectId = require('mongoose').Types.ObjectId

apiRouter.get('/', async (req, res) => {
  Account.find((err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in retrieving Accounts:' + JSON.stringify(err, undefined, 2)) };
  });
});

apiRouter.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given account number : ${req.params.id}`);

  Account.findById(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving Account:' + JSON.stringify(err, undefined, 2)) }
  })
})

apiRouter.post('/', async (req, res) => {
  const { accountNum, actionType, amount, interest, payments, date, loanDate } = req.body;
  let account = {};
  account.accountNum = accountNum;
  account.actionType = actionType;
  account.amount = amount;
  account.interest = interest;
  account.payments = payments;
  account.date = date;
  account.loanDate = loanDate;
  console.log(account)
  let accountModel = new Account(account);
  await accountModel.save();
  res.status(200).json(accountModel);
});

module.exports = apiRouter;
