
const dealSelectedItem = require('./deal-selected-item');
const buildOrderDetail = require('./build-order-detail');
const calculateDischarge = require('./calculate-discharge');
const calculateTotalAccount = require('./calculate-total-account');
const buildBill = require('./build-bill');
const calculateAccountBeforeDiscount = require('./calculate-account-before-discount');

function bestCharge(selectedItems) {
  let orderItem = dealSelectedItem(selectedItems);
  let order = buildOrderDetail(orderItem);

  //let account = calculateAccountBeforeDiscount(order);
  let disCountInfo = calculateDischarge(order);
  let totalAccout = calculateTotalAccount(order);

  let orderSummary = function (order) {
    let summary =  order.reduce((accu, curr) => {
      let price = curr.price * curr.count;
      if (Math.floor(price) === Math.ceil(price))
        price = Math.floor(price);
      accu += `${curr.name.trim()} x ${curr.count} = ${price}元\n`;
      return accu;
    }, '');

    return summary.trim();
  }

  return buildBill(orderSummary(order),disCountInfo,totalAccout);
}


module.exports = bestCharge;
