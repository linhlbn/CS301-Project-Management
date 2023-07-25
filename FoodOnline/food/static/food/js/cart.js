var nameItem = document.querySelector("#name");
var size = document.querySelector("#size");
var price = document.querySelector("#price");
var total = document.querySelector("#total");
var rm = document.querySelector("#rm");

function shoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var total = localStorage.getItem('total') || 0;
    
    var cartSize = orders.length;

    nameItem.innerHTML = '<h3>Name</h3>';
    size.innerHTML = '<h3>Size</h3>';
    price.innerHTML = '<h3>Price</h3>';
    rm.innerHTML = '<h3><br></h3>';

    for (let i = 0; i < cartSize; i++) {
        rm.innerHTML += '<h4><button class="del" onclick="removeItem(' + i + ')">x</button></h4>'; 
        nameItem.innerHTML += '<h4>' + orders[i][0] + '</h4>';
        size.innerHTML += '<h4>' + orders[i][1] + '</h4>';
        price.innerHTML += '<h4>' + orders[i][2] + '</h4>';
    }
    bill.innerHTML = 'Total: ' + total + ' VND';

}

shoppingCart();

function removeItem(n) {
    var orders  = JSON.parse(localStorage.getItem('orders')) || [];
    var total = localStorage.getItem('total') || 0;

    total = Number(total) - Number(orders[n][2]);
    total = total.toFixed(3);
    orders.splice(n, 1);

    // update number of items in shopping cart
    var cart = document.querySelector('#cart');
    cart.innerHTML = orders.length;

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    shoppingCart();
}

var note = document.querySelector('#message');


function order() {
    if (note) {

        var msg = note.value;
        var orders = localStorage.getItem('orders');
    
        var url = '/food/order';
        var orderData = {};
        orderData['note'] = msg;
        orderData['order'] = orders;  
        
        $.ajax({
            url: url,
            type: "POST",
            data: orderData,  // Fixed typo in 'data' property
            success: function(data) {
                window.location.replace('/food/success');

                localStorage.setItem('orders', JSON.stringify([]));
                localStorage.setItem('total',0);
            }
        });

    }
}
