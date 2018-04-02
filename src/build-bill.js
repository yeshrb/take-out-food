function buildBill(orderSummary,discount,totalAccount) {
  let header = "============= 订餐明细 =============";
  let dividor = "-----------------------------------";
  let bottom = "===================================";
  if(discount.promotion.items) {
    console.log('enter item judge')
    discount.promotion.type += '(黄焖鸡，凉皮)';
  }

  let discountInfo =
`使用优惠:
${discount.promotion.type}，省${discount.discount}元
`.trim();
  let totalInfo = `总计：${totalAccount}元`
  if(!discount.discount)
    return `${header}\n${orderSummary}\n${dividor}\n${totalInfo}\n${bottom}`.trim();
  return `${header}\n${orderSummary}\n${dividor}\n${discountInfo}\n${dividor}\n${totalInfo}\n${bottom}`.trim();
}

module.exports = buildBill;
