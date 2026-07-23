// ===============================
// THE PET CORNER - CART
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.querySelector(".cart-items");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

function renderCart(){

cartItems.innerHTML = "";

if(cart.length === 0){

cartItems.innerHTML = `
<div class="empty-cart">
<h2>Your Cart is Empty 🛒</h2>
<p>Add some products to continue shopping.</p>
<a href="shop.html" class="shop-btn">
Go To Shop
</a>
</div>
`;

subtotal.innerHTML = "₹0";
total.innerHTML = "₹0";

return;

}

let grandTotal = 0;
