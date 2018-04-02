const loadPromotions = require('./promotions');
const calculateAccountBeforeDiscount = require('./calculate-account-before-discount');

function calculateDischarge(order) {
  let promotions = loadPromotions();
  let speicialItems = promotions[1].items;

  let disCharge1 =  order.reduce((discharge,curr) => {
      if(speicialItems.indexOf(curr.code) >-1)
        discharge += curr.price /2;
      return discharge;
  },0);

  let disCharge2 = 0;
  let account = calculateAccountBeforeDiscount(order);
  disCharge2 = 6.0* Math.floor(account/30);
  if(Math.max(disCharge1,disCharge2) === 0) return { discount:0,promotion:''};
  if(disCharge1>disCharge2) return {discount:disCharge1,promotion:promotions[1]};
  return {discount:disCharge2,promotion:promotions[0]};
}




module.exports = calculateDischarge;
