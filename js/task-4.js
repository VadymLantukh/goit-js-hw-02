function getShippingCost(country) {
  let priceChina = 100;
  let priceChile = 250;
  let priceAustralia = 170;
  let Jamaica = 120;

  switch (country) {
    case 'China':
      console.log(`Shipping to ${country} will cost ${priceChina} credits`);
      break;
    case 'Chile':
      console.log(`Shipping to ${country} will cost ${priceChile} credits`);
      break;
    case 'Australia':
      console.log(`Shipping to ${country} will cost ${priceAustralia} credits`);
      break;
    case 'Jamaica':
      console.log(`Shipping to ${country} will cost ${Jamaica} credits`);
      break;

    default:
      console.log('Sorry, there is no delivery to your country');
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
