const BASE_URL = "https://fakestoreapi.com/products";
let productArray = [];

const appContainer = document.querySelector("#app-container");
const renderListBtn = document.querySelector("#render-list-btn");
const productIdInput = document.querySelector("#product-id-input");
const productIdBtn = document.querySelector("#product-id-btn");

// 1. Create a function that makes an HTTP request to the Fake Store API.
async function getAllProducts() {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result;
}

// 2. Create a function that renders the results returned by the HTTP request function.
function renderAllProducts(products) {
    appContainer.innerHTML = "";
    const productList = document.createElement("ul");
    productList.classList.add("product-list");
    for (const product of products) {
      productList.innerHTML += `
          <li class="product-item">
              <h3 class="card-title">${product.title}</h3>
              <h4 class="card-subtitle">${product.price}</h4>
              <button id="${product.id}">Read More</button>
          </li>
          `;
    }
    appContainer.appendChild(productList);
}  

// 3. Create a function that calculates the total price of all products and renders it on the screen.
function calculateTotalPrice(productArray){
    let total = 0;
    for(let product of productArray){
        total += product.price;
    }
    // something that I didn't know (toFixed)
    total = total.toFixed(2);
    const priceContainer = document.createElement("p");
    priceContainer.innerHTML = `Total price is: ${total}`;
    appContainer.appendChild(priceContainer);
}

// 4. Create a function that finds the highest rated product.
function getHighestRatedProduct(products){
    let highest = products[0]; // dafault
    for(let product of products){
        if(product.rating.rate > highest.rating.rate){
            highest = product;
        }
    }
    console.log(highest);
}

//  5. Add a click event listener to each LI. When that LI is clicked, it should make a call for a single product
//  using its ID and render the title, price, description and image of the product.
const listItems = document.querySelectorAll(".products-item");
for(let item of listItems){
    const btn = item.lastElementChild;
    btn.addEventListener("click", async function(event){
        const id = event.target.id;
        const product = await getSingleProduct(id);
        renderAllProducts(product);
    });
}

async function getSingleProduct(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    const result = await response.json();
    return result;
}
function getSingleProduct(product){
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.innerHTML = `
    <h3 class="product-title"> ${product.title}</h3>
    <h4 class="product-subtitle"> ${product.price}</h4>
    <img src="${product.image}" alt="" class="product-image">
    <p class="product-description"> ${product.description}</p>
    `;
    appContainer.innerHTML = "";
    appContainer.appendChild(productContainer);
}

// 6. Add a button that cleans up the DOM and re-renders the list of products
renderListBtn.addEventListener("click", function(event){
    initAplication();
});
async function initAplication(){
    productArray = await getAllProducts();
    renderAllProducts(productArray);
    calculateTotalPrice(productArray);
    getHighestRatedProduct(productArray);
}
initAplication();

productIdBtn.addEventListener("click", async function (event) {
    const productId = Number(productIdInput.value);
    if (!Number.isNaN(productId) && productId > 0) {
      const product = await getSingleProduct(productId);
      renderSingleProduct(product);
    }
});

// I solved 1,2,3,4 
// I took a little help from the code and google for the 5th and 6th requirements
// I understood fetch, and how to create elements in js, and objects
// I had a problem with eventListeners but I'll handle with that :D
