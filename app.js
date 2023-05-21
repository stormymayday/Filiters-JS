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

        return product.title.toLowerCase().includes(inputValue);

    });

});

// Text Filter - end