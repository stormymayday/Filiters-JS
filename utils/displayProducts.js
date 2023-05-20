import { productsContainer, filteredProducts } from "../app.js";

const displayProducts = () => {

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