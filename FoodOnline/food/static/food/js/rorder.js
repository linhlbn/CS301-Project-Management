var rcart = document.querySelector('#rcart');
var rtotal = document.querySelector('#rtotal');

// add rice
function addRice(rid) {
    // get name
    var riceId = '#rice' + rid;
    var name = document.querySelector(riceId).innerHTML;

    // get price
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

    // save item and total in local storage
    orders[cartSize] = [name, size, price];
    localStorage.setItem('orders', JSON.stringify(orders));

    total = Number(total) + Number(price); 
    localStorage.setItem('total', total);

    // update number of items in shopping cart
    var cart = document.querySelector('#cart');
    cart.innerHTML = orders.length;

    btn = '<button class="del" onclick="removeRice(' + cartSize + ')">x</button>';

    rtotal.innerHTML = 'Total: ' + total + ' VND';
    rcart.innerHTML += '<li>' + btn + '&nbsp;'  + name + ' ' + size + ': ' + price + ' VND' + '</li>';
}

function rshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var total = localStorage.getItem('total') || 0;
    
    var cartSize = orders.length;

    rcart.innerHTML = '';
    for (let i = 0; i < cartSize; i++) {
        btn = '<button class="del" onclick="removeRice(' + i + ')">x</button>';
        rcart.innerHTML += '<li>' + btn + '&nbsp;'  + orders[i][0] + ' ' + orders[i][1] +  ': ' + orders[i][2] + ' VND' + '</li>';
    }
    rtotal.innerHTML = 'Total: ' + total + ' VND';
}

rshoppingCart();

function removeRice(n) {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var total = localStorage.getItem('total') || 0;

    total = Number(total) - Number(orders[n][2]);
    orders.splice(n, 1);

    // update number of items in shopping cart
    var cart = document.querySelector('#cart');
    cart.innerHTML = orders.length;

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    rshoppingCart();
}
