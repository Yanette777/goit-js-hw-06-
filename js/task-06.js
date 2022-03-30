const inputEl = document.querySelector("#validation-input");
const validationInput = inputEl.dataset.length;

function borderColor(event) {
  return event.target.value.length == validationInput
    ? inputEl.setAttribute("class", "valid")
    : inputEl.setAttribute("class", "invalid");
}
inputEl.addEventListener("blur", borderColor);
