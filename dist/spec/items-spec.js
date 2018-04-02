'use strict';

var _items = require('../src/items');

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('items', function () {
  it('should return a item name is 肉夹馍 by id = ITEM0022', function () {
    var rec = (0, _items2.default)().getItemById('ITEM0030');
    var expected = {
      id: 'ITEM0030',
      name: '冰锋',
      price: 2.00
    };
    expect(rec).toEqual(expected);
  });

  it('should return a item name is 黄焖鸡 by id = ITEM0001', function () {
    var rec = (0, _items2.default)().getItemById('ITEM0001');
    var expected = {
      id: 'ITEM0001',
      name: '黄焖鸡',
      price: 18.00
    };
    expect(rec).toEqual(expected);
  });
});
// const items = require('../src/items');
//# sourceMappingURL=items-spec.js.map