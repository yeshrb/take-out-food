function calculateAccountBeforeDiscount(order) {
  let account = order.reduce((accu, curr) => {
    return accu += curr.price * curr.count;
  }, 0);
  return account;
}


module.exports = calculateAccountBeforeDiscount;
