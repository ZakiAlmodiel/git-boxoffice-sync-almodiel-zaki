function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {

  let total = quantity * basePrice;

  if (quantity >= 5) {
    total *= 0.9;
  }

<<<<<<< HEAD
  
  return Math.floor(total);
}
=======
  return Math.round(total);
>>>>>>> origin/feature/group-pricing

}
module.exports = { isValidQuantity, calculateTicketPrice };
