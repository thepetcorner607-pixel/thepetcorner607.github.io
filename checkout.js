// ===============================
// THE PET CORNER - CHECKOUT
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutItems =
document.getElementById("checkoutItems");

const subtotal =
document.getElementById("checkoutSubtotal");

const total =
document.getElementById("checkoutTotal");

function loadCheckout(){

checkoutItems.innerHTML="";

let grandTotal=0;

cart.forEach(product=>{

grandTotal += product.price;

checkoutItems.innerHTML += `

<div class="checkout-product">

<div>

<h4>${product.name}</h4>

<small>${product.brand}</small>

</div>

<strong>₹${product.price}</strong>

</div>

`;

});

subtotal.innerHTML="₹"+grandTotal;

total.innerHTML="₹"+grandTotal;

}

loadCheckout();

// ===============================
// PLACE ORDER
// ===============================

document
.getElementById("placeOrder")
.addEventListener("click",()=>{

const form =
document.getElementById("checkoutForm");

if(!form.checkValidity()){

form.reportValidity();

return;

}

// Demo Order ID

const orderId =
"TPC"+
Math.floor(Math.random()*1000000);

alert(
"🎉 Order Placed Successfully!\n\nOrder ID : "+orderId
);

// Empty Cart

localStorage.removeItem("cart");

// Redirect

window.location.href="order-success.html";

});
