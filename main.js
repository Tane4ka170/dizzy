// Функція для застосування результату
const applyResult = () => {
  const inputText = document.getElementById("inputText").value;
  document.getElementById("displayText").innerText = inputText;
};

// Додати обробник події для кнопки "Apply Result"
document.getElementById("applyButton").addEventListener("click", applyResult);

// Додати обробник події для виділення тексту
document.getElementById("displayText").addEventListener("mouseup", (event) => {
  const selection = window.getSelection().toString();
  if (selection) {
    // Виділити текст і змінити колір
    event.target.innerHTML = event.target.innerHTML.replace(
      selection,
      `<span class="highlighted">${selection}</span>`
    );
  }
});

let isDragging = false;
let selectedLetters = "";

// Додати обробник події для переміщення літер
document.addEventListener("mousedown", (event) => {
  if (event.ctrlKey) {
    isDragging = true;
    selectedLetters = window.getSelection().toString();
  }
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    // Код для переміщення літер
  }
});

document.addEventListener("mouseup", (event) => {
  if (isDragging) {
    isDragging = false;
    selectedLetters = "";
  }
});
