import { fetchData } from "./fetchData.js";
import { showProduct } from "./showProduct.js";
import "./dark-mode.js";

const loader = document.getElementById("loader");

loader.style.display = "flex";

export { loader };

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");

fetchData(`https://dummyjson.com/product/${id}`)
  .then((data) => {
    showProduct(data);
    loader.style.display = "none";
  })
  .catch((error) => {
    console.log("Xatolik yuz berdi:", error);
    loader.style.display = "none";
  });
