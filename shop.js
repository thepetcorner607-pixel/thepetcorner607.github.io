// ================================
// THE PET CORNER - SHOP PRODUCTS
// ================================

const products = [

{
id:1,
name:"Royal Canin Puppy",
category:"Dog",
brand:"Royal Canin",
price:2499,
oldPrice:2799,
rating:5,
image:"images/products/royal-canin-puppy.jpg"
},

{
id:2,
name:"Drools Adult Dog",
category:"Dog",
brand:"Drools",
price:1599,
oldPrice:1899,
rating:4,
image:"images/products/drools-adult.jpg"
},

{
id:3,
name:"Pedigree Chicken",
category:"Dog",
brand:"Pedigree",
price:1299,
oldPrice:1499,
rating:5,
image:"images/products/pedigree.jpg"
},

{
id:4,
name:"Whiskas Ocean Fish",
category:"Cat",
brand:"Whiskas",
price:799,
oldPrice:999,
rating:5,
image:"images/products/whiskas.jpg"
},

{
id:5,
name:"Me-O Cat Food",
category:"Cat",
brand:"Me-O",
price:699,
oldPrice:850,
rating:4,
image:"images/products/meo.jpg"
},

{
id:6,
name:"Bird Seeds Premium",
category:"Bird",
brand:"PetsLife",
price:299,
oldPrice:399,
rating:4,
image:"images/products/bird-food.jpg"
},

{
id:7,
name:"Aquarium Fish Food",
category:"Fish",
brand:"Taiyo",
price:249,
oldPrice:299,
rating:5,
image:"images/products/fish-food.jpg"
},

{
id:8,
name:"Dog Leash Premium",
category:"Accessories",
brand:"Trixie",
price:599,
oldPrice:799,
rating:5,
image:"images/products/leash.jpg"
}

];

// Product Render Function
function displayProducts(){

const productContainer =
document.querySelector(".products");

productContainer.innerHTML="";

products.forEach(product=>{

productContainer.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<div class="rating">
⭐ ${product.rating}.0
</div>

<p class="price">
₹${product.price}
<span class="old-price">
₹${product.oldPrice}
</span>
</p>

<button class="add-cart">
Add To Cart
</button>

</div>

</div>

`;

});

}

displayProducts();
// ================================
// CART
// ================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){

const product = products.find(item => item.id === id);

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(product.name + " added to cart");

}

function updateCartCount(){

const cartIcon =
document.querySelector(".cart-count");

if(cartIcon){

cartIcon.innerText = cart.length;

}

}

updateCartCount();
