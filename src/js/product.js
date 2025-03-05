import { fetchData } from "./fetchData.js";
import { showProduct } from "./updateUI.js";
import "./dark-mode.js";

const queryString = window.location.search;

const id = new URLSearchParams(queryString).get("id");
console.log(id);

fetchdata("https://dummyjson.com/product/" + id)
  .then((product) => {
    console.log(product);
  })
  .catch((error) => {
    console.log(error);
  });
