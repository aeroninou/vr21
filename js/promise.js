
const client_id = "3Gx7kcFNDwt3kSF7uEzmuynDLhU8lLrsSzE29_dfL-8"; // Create an account unsplash tp hey client ID;
let searchValue;
const searchButton = document.getElementById("search-button");


searchButton.addEventListener("click", (e) => {
searchValue = document.getElementById("searchInput").value;
e.preventDefault();
fetch(
  `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=20&client_id=${client_id}`
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.results.length - 1; i++) {

      let imageUrl = data.results[i].urls.thumb;
      let description = data.results[i].description;
      let altDesc = data.results[i].alt_description;
      let name = data.results[i].user.name;

      let cardData = (imageUrl, description,altDesc, name);
      const contentCard = `<div class="card" style="width: 18rem;">
      <img src=${imageUrl} class="card-img-top" alt=${altDesc}>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
      </div>
    </div>`;
        document
          .querySelector(".row")
          .insertAdjacentHTML("beforeend", contentCard);
    //   addCardtoDataBase(cardData);
    }
  })});

  
//   function addCardtoDataBase(cardData) {
//     let data = loadDataFromDB();
//     data.push(cardData);

//     //save to database
//     saveData(data);
//   }

//   function addAllCards(e) {
//     let data = loadDataFromDB();
//     data.forEach((cardData) => addCardUI(cardData));
//   }

//   function loadDataFromDB() {
//     let data = JSON.parse(localStorage.getItem(searchValue));
//     if (!data) {
//       data = [];
//     }
//     return data;
//   }

//   function saveData(data) {
//     localStorage.setItem(searchValue, JSON.stringify(data));
//   }