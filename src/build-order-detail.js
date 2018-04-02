const items = require('./items');
function buildOrderDetail(orderItems) {
  let itms = items();
  let rec;
  return orderItems.map(item => {
      rec = itms.getItemById(item.code);
      if(rec) {
        item.name = rec.name;
        item.price = rec.price;
      }
     return item;
    });

}

module.exports = buildOrderDetail;
