const grid = document.querySelector(".grid");
const defaultSize = 16;
let color = "#8e94f2";
const eraser = "#fff";
let mode = color;
const bgDefault = "#a0c4ff";
const colorPicker = document.querySelector("#color-picker");
const colorPickerLabel = document.querySelector("#color-picker-label");
colorPickerLabel.style.backgroundColor = color;
const randomColorButton = document.querySelector(".randomColor-btn");
const rainbowButton = document.querySelector(".rainbow-btn");
const eraserButton = document.querySelector(".eraser-btn");
const resetButton = document.querySelector(".reset-btn");
const sizeButton = document.querySelector(".size-btn");
const slider = document.querySelector("#slider");
const sliderLabel = document.querySelector("#slider-label");
sliderLabel.textContent = `${slider.value}x${slider.value}`;
const button = document.querySelector("button");

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("cell");
    gridCell.addEventListener("mouseover", changeColor);
    grid.appendChild(gridCell);
  }
}

function changeColor(e) {
  if (mode === color) {
    e.target.style.backgroundColor = `${color}`;
  } else if (mode === "randomColor") {
    e.target.style.backgroundColor = `${color}`;
  } else if (mode === "rainbow") {
    e.target.style.backgroundColor = `${getRandomColor()}`;
  } else if (mode === "eraser") {
    e.target.style.backgroundColor = `${eraser}`;
  }
}

function modeActive(target) {
  target.style.backgroundColor = "white";
  target.style.color = bgDefault;
}

function modeInactive(target) {
  target.style.backgroundColor = bgDefault;
  target.style.color = "white";
}

function getRandomColor() {
  let letters = "0123456789ABCDEF".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function clearGrid() {
  grid.innerHTML = "";
}

function resetGrid() {
  const cell = document.querySelectorAll(".cell");

  for (let i = 0; i < cell.length; i++) {
    cell[i].style.backgroundColor = null;
  }

  mode = mode;
}

function resizeGrid(size) {
  clearGrid();
  createGrid(size);
  mode = mode;
}

colorPicker.addEventListener("input", () => {
  color = colorPicker.value;
  colorPickerLabel.style.backgroundColor = color;
  mode = color;
  modeInactive(randomColorButton);
  modeInactive(rainbowButton);
  modeInactive(eraserButton);
});

randomColorButton.addEventListener("click", () => {
  color = getRandomColor();
  mode = "randomColor";
  colorPicker.value = color;
  colorPickerLabel.style.backgroundColor = color;
  modeActive(randomColorButton);
  modeInactive(rainbowButton);
  modeInactive(eraserButton);
});

rainbowButton.addEventListener("click", () => {
  mode = "rainbow";
  modeActive(rainbowButton);
  modeInactive(randomColorButton);
  modeInactive(eraserButton);
});

eraserButton.addEventListener("click", () => {
  mode = "eraser";
  modeActive(eraserButton);
  modeInactive(randomColorButton);
  modeInactive(rainbowButton);
});

resetButton.addEventListener("click", resetGrid);

slider.addEventListener("input", () => {
  resizeGrid(slider.value);
  slider.style.color = color;
  sliderLabel.textContent = `${slider.value}x${slider.value}`;
});

window.onload = () => {
  createGrid(defaultSize);
};
