
// const items = require('../src/items');
import items from '../src/items';
describe('items', function () {
  it('should return a item name is 肉夹馍 by id = ITEM0022', function() {
    let rec = items().getItemById('ITEM0030');
    let expected = {
      id: 'ITEM0030',
      name: '冰锋',
      price: 2.00
    };
    expect(rec).toEqual(expected)
  });

  it('should return a item name is 黄焖鸡 by id = ITEM0001', function() {
    let rec = items().getItemById('ITEM0001');
    let expected = {
      id: 'ITEM0001',
      name: '黄焖鸡',
      price: 18.00
    };
    expect(rec).toEqual(expected)
  });



});
