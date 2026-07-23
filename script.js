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
