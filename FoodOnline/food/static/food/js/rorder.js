var rcart = document.querySelector('#rcart');
var rtotal = document.querySelector('#rtotal');

// Function to add a rice dish to the cart
function addRice(rid) {
  // Get name
  var riceId = '#rice' + rid;
  var name = document.querySelector(riceId).innerHTML;

  // Get price
  var radio = 'rice' + rid;
  var pri = document.getElementsByName(radio);
  var size, price;
  if (pri[0].checked) {
    price = pri[0].value;
    size = 'M';
  } else {
    price = pri[1].value;
    size = 'L';
  }

  var orders = JSON.parse(localStorage.getItem('orders')) || [];
  var total = localStorage.getItem('total') || 0;

  var cartSize = orders.length;

  // Save item and total in local storage
  orders[cartSize] = [name, size, price];
  localStorage.setItem('orders', JSON.stringify(orders));

  total = Number(total) + Number(price);
  localStorage.setItem('total', total);

  // Update number of items in shopping cart
  var cart = document.querySelector('#cart');
  cart.innerHTML = orders.length;

  btn = '<button class="del" onclick="removeRice(' + cartSize + ')">x</button>';

  rtotal.innerHTML = 'Total: ' + total + ' VND';
  rcart.innerHTML += '<li>' + btn + '&nbsp;' + name + ' ' + size + ': ' + price + ' VND' + '</li>';

  // Update the order list in the cart.js file
  shoppingCart();
}

// Function to remove a rice dish from the cart
function removeRice(n) {
  var orders = JSON.parse(localStorage.getItem('orders')) || [];
  var total = localStorage.getItem('total') || 0;

  total = Number(total) - Number(orders[n][2]);
  orders.splice(n, 1);

  // Update number of items in shopping cart
  var cart = document.querySelector('#cart');
  cart.innerHTML = orders.length;

  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('total', total);

  // Update the order list in the cart.js file
  shoppingCart();

  // Remove the rice item from the rice cart
  rshoppingCart();
}
