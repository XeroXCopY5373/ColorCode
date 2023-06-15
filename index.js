const containerEl = document.querySelector(".container");

for (let i = 0; i < 12; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    containerEl.appendChild(colorContainer);
}

const colorContainerElAll = document.querySelectorAll(".color-container");

function generateColor() {
    colorContainerElAll.forEach((colorContainer)=> {
        const newColorCode = randomColor();
    })
}

function randomColor() {
    const char = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * char.length);
        colorCode += char.substring(randomNum, randomNum + 1);
        return colorCode;
    }
}