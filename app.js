import { products } from "./utils/products.js";
import getElement from "./utils/getElement.js";
import displayProducts from "./utils/displayProducts.js";
import displayFilterButtons from "./utils/displayFilterButtons.js";

export let filteredProducts = [...products];

export const productsContainer = getElement('.products-container');
export const companiesDOM = getElement('.companies');

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

displayFilterButtons();

companiesDOM.addEventListener('click', (event) => {

    const element = event.target;

    // Checking if traget of the click event is a button
    if (element.classList.contains('company-btn')) {

        // Checking if the button is 'all' using data-id
        if (element.dataset.id === 'all') {

            // Making copy of the products array
            filteredProducts = [...products];

        } else {

            // If it is one of the companies
            // Filter out the products for that company
            filteredProducts = products.filter((product) => {
                return product.company === element.dataset.id;
            });

        }

        // Clearing out the search input
        searchInput.value = '';

        displayProducts();
    }

});
