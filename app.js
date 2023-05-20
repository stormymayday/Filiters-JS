import { products } from "./utils/products.js";
import getElement from "./utils/getElement.js";
import displayProducts from "./utils/displayProducts.js";

// Creating a copy of products array
let filteredProducts = [...products];

// Selecting 'products-container'
export const productsContainer = getElement('.products-container');

displayProducts();