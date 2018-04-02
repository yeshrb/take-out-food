
const dealSelectedItem = require('../src/deal-selected-item');
describe('deal-selected-item', function () {
  it('should generate order object', function() {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    let selectdItems = dealSelectedItem(inputs);
    let expected = [{code:'ITEM0001',count:1},{code:'ITEM0013',count:2},{code:'ITEM0022',count:1}]
    expect(selectdItems).toEqual(expected)
  });
});
