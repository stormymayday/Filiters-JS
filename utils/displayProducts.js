import { productsContainer, filteredProducts } from "../app.js";

const displayProducts = () => {

    if (filteredProducts.length < 1) {
        productsContainer.innerHTML = `<h6>Sorry, no match was found</h6>`;
        return;
    }

    productsContainer.innerHTML = filteredProducts.map(({ id, title, image, price }) => {

        return `          <article class="product" data-id="${id}">
                <img class="product-img img"
                    src="${image}"
                    alt="${title}">
                <footer>
                    <h5 class="product-name">${title}</h5>
                    <span class="product-price">${price}</span>
                </footer>
            </article>`;

    }).join('');

};

export default displayProducts;