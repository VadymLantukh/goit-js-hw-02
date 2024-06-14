function getShippingCost(country) {
  let priceChina = 100;
  let priceChile = 250;
  let priceAustralia = 170;
  let priceJamaica = 120;
  let countryMessage = '';

  switch (country) {
    case 'China':
      countryMessage = `Shipping to ${country} will cost ${priceChina} credits`;
      break;
    case 'Chile':
      countryMessage = `Shipping to ${country} will cost ${priceChile} credits`;
      break;
    case 'Australia':
      countryMessage = `Shipping to ${country} will cost ${priceAustralia} credits`;
      break;
    case 'Jamaica':
      countryMessage = `Shipping to ${country} will cost ${priceJamaica} credits`;
      break;
    
    default:
      countryMessage = 'Sorry, there is no delivery to your country';
  }

  return countryMessage;
}

console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
