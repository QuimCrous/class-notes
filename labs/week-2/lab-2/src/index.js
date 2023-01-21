// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  
  let subtotal = price.innerText*quantity.value;
  
  let updateSubtotal = product.querySelector(".subtotal span");
  updateSubtotal.innerText = subtotal;
  
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProduct = document.querySelectorAll("table#cart tr.product");
  let sumSubtotals = []
  for (let index = 0; index < allProduct.length; index++) {
    sumSubtotals.push(updateSubtotal(allProduct[index]));    
  }
  sumSubtotals = sumSubtotals.reduce((acc, crv) => acc + crv, 0);
  
  const total = document.querySelector("#total-value span");
  total.innerText = sumSubtotals;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productToRemove = target.parentNode.parentNode;
  const parent = productToRemove.parentNode;
  console.log(productToRemove);
  console.log(parent);
  parent.removeChild(productToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
  const text = document.querySelector(".create-product").querySelectorAll("input")[0].value;
  const quantity = document.querySelector(".create-product").querySelectorAll("input")[1].value;
  const table = document.querySelector("tbody");
  
  let productRow = table.insertRow();
  productRow.classList.add("product");
  
  let cellOne = productRow.insertCell();
  cellOne.classList.add("name");
  cellOne.innerHTML = `<span>${text}</span>`;

  let cellTwo = productRow.insertCell();
  cellTwo.classList.add("price");
  cellTwo.innerHTML = `$<span>${quantity}</span>`

  let cellThree = productRow.insertCell();
  cellThree.classList.add("quantity");
  cellThree.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`

  let cellFour = productRow.insertCell();
  cellFour.classList.add("subtotal");
  cellFour.innerHTML = `$<span>0</span>`

  let cellFive = productRow.insertCell();
  cellFive.classList.add("subtotal");
  let button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("btn-remove");
  button.innerText = "Remove";
  cellFive.appendChild(button);
  button.addEventListener("click", (e)=> {
    removeProduct(e);
  })

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

window.addEventListener("load", () => {
  const removeProductButtonArray = document.querySelectorAll(".btn-remove");
  removeProductButtonArray.forEach((button) => {
    button.addEventListener("click", function (e) {
      removeProduct(e);
    });
  })
})

window.addEventListener("load", () => {
  const createButton = document.querySelector("#create");
  createButton.addEventListener("click", createProduct);
})