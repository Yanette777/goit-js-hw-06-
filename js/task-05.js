const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  event.preventDefault();
  const inputName = event.target.value;
  outputEl.textContent = inputName.length === 0 ? "Anonymous" : inputName;
});
