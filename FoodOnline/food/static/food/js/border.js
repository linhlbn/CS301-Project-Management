var bcart = document.querySelector('#bcart');
var btotal = document.querySelector('#btotal');

// add burger
function addBurger(bid) {
    // get name
    var burgerId = '#bur' + bid;
    var name = document.querySelector(burgerId).innerHTML;

    // get price
    var radio = 'burger' + bid;
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

    // save item and total in local storage
    orders[cartSize] = [name, size, price];
    localStorage.setItem('orders', JSON.stringify(orders));

    total = Number(total) + Number(price); 
    localStorage.setItem('total', total);

    // update number of items in shopping cart
    var cart = document.querySelector('#cart');
    cart.innerHTML = orders.length;

    btn = '<button class="del" onclick="removeBurger(' + cartSize + ')">x</button>';

    btotal.innerHTML = 'Total: ' + total + ' VND';
    bcart.innerHTML += '<li>' + btn + '&nbsp;'  + name + ' ' + size + ': ' + price + ' VND' + '</li>';
}

function bshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var total = localStorage.getItem('total') || 0;
    
    var cartSize = orders.length;

    bcart.innerHTML = '';
    for (let i = 0; i < cartSize; i++) {
        btn = '<button class="del" onclick="removeBurger(' + i + ')">x</button>';
        bcart.innerHTML += '<li>' + btn + '&nbsp;'  + orders[i][0] + ' ' + orders[i][1] +  ': ' + orders[i][2] + ' VND' + '</li>';
    }
    btotal.innerHTML = 'Total: ' + total + ' VND';
}

bshoppingCart();

function removeBurger(n) {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var total = localStorage.getItem('total') || 0;

    total = Number(total) - Number(orders[n][2]);
    orders.splice(n, 1);

    // update number of items in shopping cart
    var cart = document.querySelector('#cart');
    cart.innerHTML = orders.length;

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    bshoppingCart();
}