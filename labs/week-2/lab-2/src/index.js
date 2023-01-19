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
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
