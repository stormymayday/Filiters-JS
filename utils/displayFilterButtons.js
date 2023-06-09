import { products } from "./products.js";
import { companiesDOM } from "../app.js";

const displayFilterButtons = () => {

    // Getting unique company values and 'all'
    const companyButtons = ['all', ...new Set(products.map((product) => {
        return product.company;
    }))];

    // Adding company buttons to the DOM
    companiesDOM.innerHTML = companyButtons.map((company) => {
        return `<button class="company-btn" data-id="${company}">${company}</button>`;
    }).join('');

};

export default displayFilterButtons;