
const calculateDischarge = require('./calculate-discharge');
const calculateAccountBeforeDiscount = require('./calculate-account-before-discount')


function calculateTotalAccount(order) {
  let accountBeforeDiscount = calculateAccountBeforeDiscount(order);
  let disCount = calculateDischarge(order).discount;

  return accountBeforeDiscount - disCount;

}

module.exports = calculateTotalAccount;
