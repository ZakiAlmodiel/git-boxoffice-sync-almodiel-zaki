function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, seating) {
  let price = basePrice;

  // 1. VIP Surcharge (if seating parameter is present in your repo)
  if (seating === 'VIP' || seating === 'premium') {
    price *= 1.5;
  }

  let total = quantity * price;

  // 2. Group Discount (10% off for 5+ tickets)
  if (quantity >= 5) {
    total *= 0.9;
  }

  // 3. Flat $10 Discount
  total -= 10;

  // Prevent negative total prices if order total is less than $10
  if (total < 0) {
    total = 0;
  }

  return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };
