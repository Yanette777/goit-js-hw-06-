const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const foodItemsList = document.querySelector(`#ingredients`);

const addListItems = (array) => {
  const listArray = array.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  });
  foodItemsList.append(...listArray);
};

addListItems(ingredients);
