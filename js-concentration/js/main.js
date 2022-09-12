class BoardSquare {
  constructor(element, color) {
    this.element = element;
    this.element.addEventListener("click", this, false);
    this.isFaceUp = false;
    this.isMatched = false;
    this.setColor(color);
  }
  handleEvent(event) {
    switch (event.type) {
      case "click":
        if (this.isFaceUp || this.isMatched) {
          return;
        }

        this.isFaceUp = true;
        this.element.classList.add("flipped");

        squareFlipped(this);
    }
  }

  setColor(color) {
    const faceUpElement = this.element.getElementsByClassName("faceup")[0];

    // remove the previous color if it exists
    faceUpElement.classList.remove(this.color);

    this.color = color;
    faceUpElement.classList.add(color);
  }

  reset() {
    this.isFaceUp = false;
    this.isMatched = false;
    this.element.classList.remove("flipped");
  }

  matchFound() {
    this.isMatched = true;
    this.isFaceUp = true;
  }
}

// GLOBAL VARIABLES

const colorPairs = [];
const boardSquares = [];
let firstFaceupSquare = null;

function generateHTMLForBoardSquares() {
  const numberOfSquares = 16;
  let squaresHTML = "";

  // generate HTML for board squares
  for (let i = 0; i < numberOfSquares; i++) {
    squaresHTML +=
      '<div class="col-3 board-square">\n' +
      '<div class="face-container">\n' +
      '<div class="facedown"></div>\n' +
      '<div class="faceup"></div>\n' +
      "</div>\n" +
      "</div>\n";
  }

  // insert squares HTML in DOM
  const boardElement = document.getElementById("gameboard");
  boardElement.innerHTML = squaresHTML;
}

function generateColorPairs() {
  if (colorPairs.length > 0) {
    return colorPairs;
  } else {
    // generates matching pair for each color
    for (let i = 0; i < 8; i++) {
      colorPairs.push("color-" + i);
      colorPairs.push("color-" + i);
    }

    return colorPairs;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleColors() {
  const colorPairs = generateColorPairs();
  return shuffleArray(colorPairs);
}

function resetGame() {
  // 1
  firstFaceupSquare = null;

  // 2
  boardSquares.forEach((square) => {
    square.reset();
  });

  // 3
  setTimeout(() => {
    // 4
    const randomColorPairs = shuffleColors();

    // 5
    for (let i = 0; i < boardSquares.length; i++) {
      const newColor = randomColorPairs[i];
      const square = boardSquares[i];

      square.setColor(newColor);
    }
  }, 500);
}

function squareFlipped(square) {
  // 2
  if (firstFaceupSquare === null) {
    firstFaceupSquare = square;
    return;
  }

  // 3
  if (firstFaceupSquare.color === square.color) {
    // 4
    firstFaceupSquare.matchFound();
    square.matchFound();

    firstFaceupSquare = null;
  } else {
    // 5
    const a = firstFaceupSquare;
    const b = square;

    firstFaceupSquare = null;

    setTimeout(function () {
      a.reset();
      b.reset();
    }, 400);
  }
}

function setupGame() {
  generateHTMLForBoardSquares();
  const randomColorPairs = shuffleColors();

  const squares = document.querySelectorAll(".board-square");
  squares.forEach((square, index) => {
    const color = randomColorPairs[index];
    const boardSquare = new BoardSquare(square, color);
    boardSquares.push(boardSquare);
  });

  const resetButton = document.getElementById("reset-button");

  // 2
  resetButton.addEventListener("click", () => {
    // 3
    console.log("reset button clicked");
  });
  resetButton.addEventListener("click", () => {
    resetGame();
  });
}

setupGame();
