
function dealSelectedItem(selectItems) {
  return selectItems.map((item) => {
    let entrys= item.split('x');
    item = {code:entrys[0].trim(),count:parseInt(item.split('x')[1])};
    return item;
  })
}
module.exports = dealSelectedItem;
