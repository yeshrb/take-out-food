
const calculateAccountBeforeDiscount = require('../src/calculate-account-before-discount');
describe('calculate-account-account-before-discount', function () {
  it('should calculate  account  38 ', function() {
    let inputs = [{code:'ITEM0001',name: '黄焖鸡',count:1,price:18.0},{code:'ITEM0013', name: '肉夹馍',count:2,price:6.0},{code:'ITEM0022',name: '凉皮',count:1,price:8.0}];
    let account = calculateAccountBeforeDiscount(inputs);
    let expected = 38.0;
    expect(account).toEqual(expected)
  });

  it('should calculate  account  32 ', function() {
    let inputs = [{code:'ITEM0013', name: '肉夹馍',count:4,price:6.0},{code:'ITEM0022',name: '凉皮',count:1,price:8.0}];
    let account = calculateAccountBeforeDiscount(inputs);
    let expected = 32.0;
    expect(account).toEqual(expected)
  });

  it('should calculate  account  24 ', function() {
    let inputs = [{code:'ITEM0013', name: '肉夹馍',count:4,price:6.0}];
    let account = calculateAccountBeforeDiscount(inputs);
    let expected = 24.0;
    expect(account).toEqual(expected)
  });

  it('should calculate  account  8 ', function() {
    let inputs = [{code:'ITEM0030', name: '冰锋',count:4,price:2.0}];
    let account = calculateAccountBeforeDiscount(inputs);
    let expected = 8.0;
    expect(account).toEqual(expected)
  });


});
