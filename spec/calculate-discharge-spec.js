const calculateDischarge = require('../src/calculate-discharge')
describe('calculate-discharge', function () {
  it('should calculate discharge 13 ', function() {
    let inputs = [{code:'ITEM0001',name: '黄焖鸡',count:1,price:18.0},{code:'ITEM0013', name: '肉夹馍',count:2,price:6.0},{code:'ITEM0022',name: '凉皮',count:1,price:8.0}];
    let disCharge = calculateDischarge(inputs);
    let expected = 13.0;
    expect(disCharge.discount).toEqual(expected)
  });

  it('should calculate discharge 6 ', function() {
    let inputs = [{code:'ITEM0013', name: '肉夹馍',count:4,price:6.0},{code:'ITEM0022',name: '凉皮',count:1,price:8.0}];
    let disCharge = calculateDischarge(inputs);
    let expected = 6.0;
    expect(disCharge.discount).toEqual(expected)
  });

  it('should calculate discharge 0 ', function() {
    let inputs = [{code:'ITEM0013', name: '肉夹馍',count:4,price:6.0}];
    let disCharge = calculateDischarge(inputs);
    let expected = 0.0;
    expect(disCharge.discount).toEqual(expected)
  });


});
