'use strict';

function dealSelectedItem(selectItems) {
  return selectItems.map(function (item) {
    var entrys = item.split('x');
    item = { code: entrys[0].trim(), count: parseInt(item.split('x')[1]) };
    return item;
  });
}
module.exports = dealSelectedItem;
//# sourceMappingURL=deal-selected-item.js.map