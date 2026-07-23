// ===================================
// THE PET CORNER - ADMIN DASHBOARD
// ===================================

let products = JSON.parse(localStorage.getItem("adminProducts")) || [];

const form = document.getElementById("productForm");
const productList = document.getElementById("productList");

function renderProducts(){

productList.innerHTML = "";

document.getElementById("totalProducts").innerText = products.length;

products.forEach((product,index)=>{

productList.innerHTML += `

<div class="product-box">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button class="delete-btn"
onclick="deleteProduct(${index})">

Delete

</button>

</div>

`;

});

}

form.addEventListener("submit",(e)=>{

e.preventDefault();

const product = {

name:document.getElementById("productName").value,

price:document.getElementById("productPrice").value,

image:document.getElementById("productImage").value

};

products.push(product);

localStorage.setItem(
"adminProducts",
JSON.stringify(products)
);

form.reset();

renderProducts();

});

function deleteProduct(index){

products.splice(index,1);

localStorage.setItem(
"adminProducts",
JSON.stringify(products)
);

renderProducts();

}

renderProducts();
