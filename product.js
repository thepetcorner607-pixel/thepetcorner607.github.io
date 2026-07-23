// ==============================
// PRODUCT PAGE
// ==============================

// Thumbnail Image Change

const mainImage = document.getElementById("mainImage");

const thumbs = document.querySelectorAll(".thumbnails img");

thumbs.forEach(img=>{

img.addEventListener("click",function(){

mainImage.src=this.src;

});

});

// ==============================
// IMAGE ZOOM
// ==============================

mainImage.addEventListener("mousemove",()=>{

mainImage.style.transform="scale(1.15)";

});

mainImage.addEventListener("mouseleave",()=>{

mainImage.style.transform="scale(1)";

});

// ==============================
// ADD TO CART
// ==============================

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

document.querySelector(".cart-btn")
.addEventListener("click",()=>{

cart.push({

name:"Royal Canin Puppy",

price:2499,

image:"images/products/royal-canin-puppy.jpg"

});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Product Added To Cart 🛒");

});

// ==============================
// BUY NOW
// ==============================

document.querySelector(".buy-btn")
.addEventListener("click",()=>{

window.location.href="checkout.html";

});

// ==============================
// PRODUCT TABS
// ==============================

function openTab(tabId){

// Sabhi buttons se active hatao
document.querySelectorAll(".tab").forEach(btn=>{
btn.classList.remove("active");
});

// Sabhi content hide karo
document.querySelectorAll(".tab-content").forEach(content=>{
content.classList.remove("active");
});

// Click hua button active karo
event.target.classList.add("active");

// Selected content show karo
document.getElementById(tabId).classList.add("active");

}
