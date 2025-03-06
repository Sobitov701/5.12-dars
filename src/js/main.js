import "./dark-mode.js";

import { fetchData } from "./fetchData.js";
import { showCards } from "./updateUI.js";
import { loader } from "./loader.js";

fetchData("https://dummyjson.com/product")
  .then((data) => {
    showCards(data);
    loader.style.display = "none";
  })
  .catch((error) => {
    console.log(error);
  });
