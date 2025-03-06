export const showProduct = (product) => {
  const container = document.getElementById("product-container");

  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.thumbnail}" alt="${product.title}" width="200">
    <p>${product.description}</p>
    <p><strong>Price:</strong> $${product.price}</p>
  `;
  container.append(productElement);
};
