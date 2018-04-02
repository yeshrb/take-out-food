function items() {
  return {
    records: [
      {
        id: 'ITEM0001',
        name: '黄焖鸡',
        price: 18.00
      },
      {
        id: 'ITEM0013',
        name: '肉夹馍',
        price: 6.00
      },
      {
        id: 'ITEM0022',
        name: '凉皮',
        price: 8.00
      },
      {
        id: 'ITEM0030',
        name: '冰锋',
        price: 2.00
      }
    ],
    loadAllItems:function () {
      return this.records;
    },
    getItemById:function (id) {
      let rec;
      for(let info of this.records) {
        if(id === info.id) {
          rec = info;
          break;
        }
      }
      return rec;
    }

  }

}

module.exports = items;
