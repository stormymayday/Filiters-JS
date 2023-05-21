import { products } from "./utils/products.js";
import getElement from "./utils/getElement.js";
import displayProducts from "./utils/displayProducts.js";

// Creating a copy of products array
export let filteredProducts = [...products];

// Selecting 'products-container'
export const productsContainer = getElement('.products-container');

displayProducts();

// Text Filter - start
const form = getElement('.input-form');
const searchInput = getElement('.search-input');

form.addEventListener('keyup', () => {

    console.log(searchInput.value);

});

// Text Filter - end