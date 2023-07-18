var hours = 24;
var now = new Date().getTime();
var stepTime = localStorage.getItem('stepTime');

if (stepTime == null) {
    localStorage.setItem('stepTime', now);
}
else {
    if (now - stepTime > hours * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem('stepTime', now);
    }
}

var orders = JSON.parse(localStorage.getItem('orders'));
var total = localStorage.getItem('total');

if (orders === null || orders === undefined) {
    localStorage.setItem('orders', JSON.stringify([]));
    orders = JSON.parse(localStorage.getItem('orders'));
}

if (total === null || total === undefined) {
    localStorage.setItem('total', 0);
    total = localStorage.getItem('total');
}



document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    // Access the "cart" element and set its innerHTML
    var cartElement = document.getElementById("cart");
    cartElement.innerHTML = "Your cart has been created";
  });


// // use variable cart with id cart:
// var cart = document.querySelector('#cart');
// cart.innerHTML = orders.length;
