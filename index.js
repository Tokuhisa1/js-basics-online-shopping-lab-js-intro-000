var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  var cartItem = {};
  cartItem.itemName = item;
  cartItem.itemPrice = Math.ceil(Math.random() * 100);
  cart.push(cartItem);

  return `${cartItem.itemName} has been added to your cart.`;
}

// The viewCart() function does not accept any arguments. It
// should loop over every item in your cart, returning the
// contents as one long, coherent statement in this format: In
// your cart, you have bananas at $17, pancake batter at $5,
// and eggs at $49.
function viewCart() {
  // write your code here
  if (cart.length < 1) { return 'Your shopping cart is empty.'; }
  var view = 'In your cart, you have ';
  for (var i = 0; i < cart.length; i = i + 1) {
    view = view + `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i < cart.length - 1) { view = view + ', '; }
    if (i == cart.length - 2) { view = view + 'and '; }
  }
  return view + '.';
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
