export const showProduct = (product) => {
  const container = document.getElementById("product-container");

  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.style.display = "flex";
  productElement.style.alignItems = "center";
  productElement.style.flexDirection = "column";

  productElement.innerHTML = `
  <img src="${product.thumbnail}" alt="${product.title}" width="200">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <del>$${product.price}</del>
    <p>$${(product.price - (product.price / 100) * product.discountPercentage).toFixed(2)}</p>
    <p><i class="fa-solid fa-star text-orange-300">${product.rating}</i></p>
  `;
  container.append(productElement);
};
