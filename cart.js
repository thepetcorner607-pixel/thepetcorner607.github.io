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

cart.forEach((product,index)=>{

grandTotal += product.price;

cartItems.innerHTML += `

<div class="cart-item">

<img src="${product.image}" alt="${product.name}">

<div class="item-details">

<h3>${product.name}</h3>

<p class="item-price">
₹${product.price}
</p>

<div class="quantity">

<button onclick="decreaseQty(${index})">-</button>

<span>1</span>

<button onclick="increaseQty(${index})">+</button>

</div>

<button
class="remove-btn"
onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

`;

});

subtotal.innerHTML = "₹"+grandTotal;
total.innerHTML = "₹"+grandTotal;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

function increaseQty(index){

alert("Quantity feature next update me add hoga.");

}

function decreaseQty(index){

alert("Quantity feature next update me add hoga.");

}

renderCart();

document.querySelector(".checkout-btn")
.addEventListener("click",()=>{

window.location.href="checkout.html";

});
