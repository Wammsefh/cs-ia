// Initial references to various elements in the HTML document
const moves = document.getElementById("moves");
const container = document.querySelector(".container");
const startButton = document.getElementById("start-button");
const coverScreen = document.querySelector(".cover-screen");
const result = document.getElementById("result");

// Variables to keep track of the game state
let currentElement = "";
let movesCount, imagesArr = [];

// Function to check if the device is a touch-enabled device
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

// Function to generate a random number for the image
const randomNumber = () => Math.floor(Math.random() * 8) + 1;

// Function to get the row and column values from the data-position attribute of an element
const getCoords = (element) => {
  const [row, col] = element.getAttribute("data-position").split("_");
  return [parseInt(row), parseInt(col)];
};

// Function to check if two elements are adjacent to each other on the grid
const checkAdjacent = (row1, row2, col1, col2) => {
  if (row1 == row2) {
    // If elements are on the same row, check if they are next to each other horizontally
    if (col2 == col1 - 1 || col2 == col1 + 1) {
      return true;
    }
  } else if (col1 == col2) {
    // If elements are on the same column, check if they are next to each other vertically
    if (row2 == row1 - 1 || row2 == row1 + 1) {
      return true;
    }
  }
  return false;
};

// Function to fill the imagesArr array with random values for the images
const randomImages = () => {
  while (imagesArr.length < 8) {
    let randomVal = randomNumber();
    if (!imagesArr.includes(randomVal)) {
      imagesArr.push(randomVal);
    }
  }
  imagesArr.push(9); // Adding the blank image as the last element (represented by 9).
};

// Function to generate the grid of the sliding puzzle
const gridGenerator = () => {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let div = document.createElement("div");
      div.setAttribute("data-position", `${i}_${j}`);
      div.addEventListener("click", selectImage);
      div.classList.add("image-container");
      div.innerHTML = `<img src="image/image_part_00${imagesArr[count]}.png" class="image ${
        imagesArr[count] == 9 ? "target" : ""
      }" data-index="${imagesArr[count]}"/>`;
      count += 1;
      container.appendChild(div);
    }
  }
};

// Function to handle the click event on an image in the sliding puzzle
const selectImage = (e) => {
  e.preventDefault();
  // Set currentElement to the clicked image
  currentElement = e.target;
  // Get the target element (blank image)
  let targetElement = document.querySelector(".target");
  let currentParent = currentElement.parentElement;
  let targetParent = targetElement.parentElement;

  // Get row and column values for both elements
  const [row1, col1] = getCoords(currentParent);
  const [row2, col2] = getCoords(targetParent);

  if (checkAdjacent(row1, row2, col1, col2)) {
    // If the clicked image is adjacent to the blank image, swap them
    currentElement.remove();
    targetElement.remove();
    // Get image index (to be used later for manipulating the array)
    let currentIndex = parseInt(currentElement.getAttribute("data-index"));
    let targetIndex = parseInt(targetElement.getAttribute("data-index"));
    // Swap the index values
    currentElement.setAttribute("data-index", targetIndex);
    targetElement.setAttribute("data-index", currentIndex);
    // Swap the images in the DOM
    currentParent.appendChild(targetElement);
    targetParent.appendChild(currentElement);
    // Swap the elements in the imagesArr array to keep track of the game state
    let currentArrIndex = imagesArr.indexOf(currentIndex);
    let targetArrIndex = imagesArr.indexOf(targetIndex);
    [imagesArr[currentArrIndex], imagesArr[targetArrIndex]] = [
      imagesArr[targetArrIndex],
      imagesArr[currentArrIndex],
    ];

    // Check if the game is won when the imagesArr is in the correct order
    if (imagesArr.join("") == "123456789") {
      setTimeout(() => {
        // When the game ends, display the cover screen again
        coverScreen.classList.remove("hide");
        container.classList.add("hide");
        result.innerText = `Total Moves: ${movesCount}`;
        startButton.innerText = "Restart Game";
      }, 1000);
    }
    // Increment the moves count and update the display
    movesCount += 1;
    moves.innerText = `Moves: ${movesCount}`;
  }
};

// Function to handle the click event on the start button
startButton.addEventListener("click", () => {
  container.classList.remove("hide");
  coverScreen.classList.add("hide");
  container.innerHTML = "";
  imagesArr = [];
  randomImages();
  gridGenerator();
  movesCount = 0;
  moves.innerText = `Moves: ${movesCount}`;
});

// Display the start screen first when the window loads
window.onload = () => {
  coverScreen.classList.remove("hide");
  container.classList.add("hide");
};