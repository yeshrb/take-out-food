
const buildOrderDetail = require('../src/build-order-detail');

describe('deal-order-detail', function () {

  it('should generate order detail', function() {
    let inputs = [{code:'ITEM0001',count:1},{code:'ITEM0013',count:2},{code:'ITEM0022',count:1}];
    let orderDetails = buildOrderDetail(inputs);
    let expected = [{code:'ITEM0001',name: '黄焖鸡',count:1,price:18.0},{code:'ITEM0013', name: '肉夹馍',count:2,price:6.0},{code:'ITEM0022',name: '凉皮',count:1,price:8.0}]
    expect(orderDetails).toEqual(expected)
  });


});
