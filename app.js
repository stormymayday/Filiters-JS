import { products } from "./utils/products.js";
import getElement from "./utils/getElement.js";
import displayProducts from "./utils/displayProducts.js";

export let filteredProducts = [...products];

export const productsContainer = getElement('.products-container');

displayProducts();

// Text Filter - start
const form = getElement('.input-form');
const searchInput = getElement('.search-input');

form.addEventListener('keyup', () => {

    const inputValue = searchInput.value;

    // Modifying the filteredProducts array on each 'keyup' event
    filteredProducts = products.filter((product) => {

        // 1. Dealing with case sensitivity using toLowerCase()
        // 2. Using includes() to filter the products
        // 3. If the inputVale is empty, includes() will include all the products 
        return product.title.toLowerCase().includes(inputValue);

    });

    displayProducts();

});
// Text Filter - end

// Filter Buttons - start
const companiesDOM = getElement('.companies');
console.log(companiesDOM);
// Filter Buttons - end