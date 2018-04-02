
const calculateTotalAccount = require('../src/calculate-total-account');

describe('calculate-total-account-spec', function () {
  it('should calculate total account  25 ', function() {
    let inputs = [{code:'ITEM0001',name: '黄焖鸡',count:1,price:18.0},{code:'ITEM0013', name: '肉夹馍',count:2,price:6.0},{code:'ITEM0022',name: '凉皮',count:1,price:8.0}];
    let disCharge = calculateTotalAccount(inputs);
    let expected = 25.0;
    expect(disCharge).toEqual(expected)
  });




});
