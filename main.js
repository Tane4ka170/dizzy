const inputText = document.getElementById("inputText");
const applyButton = document.getElementById("applyButton");
const displayText = document.getElementById("displayText");

document.addEventListener("DOMContentLoaded", function () {
  if (applyButton) {
    applyButton.addEventListener("click", applyResult);
  }

  displayText.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });

  displayText.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  displayText.addEventListener("mousedown", (event) => {
    const target = event.target;
    if (target.tagName === "SPAN") {
      target.style.position = "absolute";
      target.style.zIndex = 1000;

      let offsetX = event.clientX - target.getBoundingClientRect().left;
      let offsetY = event.clientY - target.getBoundingClientRect().top;

      function moveLetter(event) {
        target.style.left = event.clientX - offsetX + "px";
        target.style.top = event.clientY - offsetY + "px";
      }

      document.addEventListener("mousemove", moveLetter);

      document.addEventListener("mouseup", (event) => {
        document.removeEventListener("mousemove", moveLetter);
      });
    }
  });
});

function applyResult() {
  displayText.innerHTML = inputText.value
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");
}
