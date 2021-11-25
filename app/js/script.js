const container = document.querySelector(".container");

const gridRow = document.createElement("div");
gridRow.classList.add("grid-row");

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

function appendChildNode(parentNode, childNode, n) {
  for (let i = 0; i < n; i++) {
    parentNode.appendChild(childNode.cloneNode(true));
  }
}

document.addEventListener("onload", appendChildNode(gridRow, gridItem, 10));
document.addEventListener("onload", appendChildNode(container, gridRow, 10));

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("grid-item")) {
    e.target.classList.add("bg-blue");
  }
});

const resetButton = document.querySelector("#reset-btn");

resetButton.addEventListener("click", () => {
  const items = document.querySelectorAll(".grid-item");

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("bg-blue");
  }
});

const sizeButton = document.querySelector("#size-btn");

sizeButton.addEventListener("click", () => {
  const squares = parseInt(prompt("How many squares?"));

  const rows = document.querySelectorAll(".grid-row");

  if (squares !== null && typeof squares === "number") {
    // for (let i = rows.length; i > 0; i--) {
    //   console.log(rows[i]);
    //   container.removeChild(rows[i]);
    // }
    appendChildNode(gridRow, gridItem, squares);
    appendChildNode(container, gridRow, squares);
  } else {
    alert("Please enter a number between 10-100");
  }
});
