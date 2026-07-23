// =============================
// THE PET CORNER
// Premium Script
// =============================

// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.18)";
    } else {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.10)";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
});

// Category Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// Hero Buttons Animation
const heroButtons = document.querySelectorAll(".shop-btn, .book-btn");

heroButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// Search Box
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click", () => {

    if(searchInput.value.trim() === ""){
        alert("Please enter a product name.");
        return;
    }

    alert("Searching for: " + searchInput.value);

});

// Press Enter to Search
searchInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        searchButton.click();

    }

});

// Scroll Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card").forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s";

    observer.observe(card);

});

// Console Message
console.log("The Pet Corner Loaded Successfully");

/* ==========================
   FEATURED PRODUCTS
========================== */

// Add to Cart
const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

    button.addEventListener("click", function () {

        this.innerHTML = "✅ Added";

        this.style.background = "#25D366";

        setTimeout(() => {
            this.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add to Cart';
            this.style.background = "";
        }, 2000);

    });

});

// Wishlist
const wishButtons = document.querySelectorAll(".wishlist");

wishButtons.forEach(item => {

    item.addEventListener("click", function () {

        const icon = this.querySelector("i");

        if(icon.classList.contains("fa-regular")){

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            icon.style.color = "red";

        }else{

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            icon.style.color = "#999";

        }

    });

});

// Product Hover Animation
const products = document.querySelectorAll(".product-card");

products.forEach(product => {

    product.addEventListener("mouseenter", () => {

        product.style.transform = "translateY(-10px)";

    });

    product.addEventListener("mouseleave", () => {

        product.style.transform = "translateY(0px)";

    });

});

console.log("Featured Products Loaded Successfully");
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
