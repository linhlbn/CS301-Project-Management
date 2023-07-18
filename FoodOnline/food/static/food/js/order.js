var pcart = document.querySelector('#pcart');
var ptotal = document.querySelector('#ptotal');

// add pizza

function addPizza(pid) {
    // get name
    pizzaId = '#piz' + pid;
    var name = document.querySelector(pizzaId).innerHTML;

    // get price
    var radio = 'pizza' + pid;
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

    // localStorage.clear();


    // update number of items in shopping cart
    var cart = document.querySelector('#cart');
    cart.innerHTML = orders.length;

    btn = '<button class="del" onclick="removePizza(' + cartSize + ')">x</button>';

    ptotal.innerHTML = 'Total: ' + total + ' VND';
    pcart.innerHTML += '<li>' + btn + '&nbsp;' + name + ' ' + size + ': ' + price + '  VND' + ' </li>';
    

}

function pshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var total = localStorage.getItem('total') || 0;
    
    var cartSize = orders.length;

    pcart.innerHTML = '';
    for (let i = 0; i < cartSize; i++) {
        btn = '<button class="del" onclick="removePizza(' + i + ')">x</button>';
        pcart.innerHTML += '<li>' + btn + '&nbsp;'  + orders[i][0] + ' ' + orders[i][1] +  ': ' + orders[i][2] + ' VND' + '</li>';
    }
    ptotal.innerHTML = 'Total: ' + total + ' VND';

}

pshoppingCart();

function removePizza(n) {
    var orders  = JSON.parse(localStorage.getItem('orders')) || [];
    var total = localStorage.getItem('total') || 0;

    total = Number(total) - Number(orders[n][2]);
    orders.splice(n, 1);

    // update number of items in shopping cart
    var cart = document.querySelector('#cart');
    cart.innerHTML = orders.length;

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    pshoppingCart();
}