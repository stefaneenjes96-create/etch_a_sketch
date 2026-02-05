function createGridTemplate() {
    const gridField = document.querySelector("#gridField");

    const gridTemplate = document.createElement("div");
    gridTemplate.id = "gridTemplate";
    gridField.append(gridTemplate);

    gridSize = document.querySelector("#gridSize").value

    for (let i = 0; i < gridSize; i++) {
        const gridRow = createGridRow(gridSize);
        gridRow.classList.add("gridRow")
        gridTemplate.append(gridRow);
    }

    function createGridRow(gridSize) {
        const gridRow = document.createElement("div");
        for (let i = 0; i < gridSize; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridSquare.textContent = "";
            gridSquare.style.height = `${500 / gridSize}px`;
            gridSquare.style.width = `${500 / gridSize}px`;
            gridRow.append(gridSquare);
            gridSquare.setAttribute("draggable", false);
        }
        return gridRow;
    }

    let isDrawing = false;

    gridTemplate.addEventListener("mousedown", (event) => {
        event.preventDefault();
        isDrawing = true;
        changeColor(event.target);
    });

    gridTemplate.addEventListener("mouseover", (event) => {
        if (isDrawing && event.target.classList.contains("gridSquare")) {
            changeColor(event.target);
        }
    })

    gridTemplate.addEventListener("mouseup", () => isDrawing = false);
}

function changeColor(target) {
    let color = document.querySelector("#colorSelect").value
    if (color === "rainbow") {
        const colorList = ["red", "orange", "yellow", "green", "blue", "purple"];
        color = colorList[Math.floor(Math.random() * 6)]
    }

    target.style.backgroundColor = color;
}

function clearGridTemplate() {
    const allGridSquares = document.querySelectorAll(".gridSquare");
    allGridSquares.forEach(function(currentValue) {
        currentValue.style.backgroundColor = "white";
    });
}

const clearButton = document.querySelector("#clearGridTemplate");
clearButton.addEventListener("click", () => clearGridTemplate())

const darkenButton = document.querySelector("#darkenButton");
let darkMode = false;
darkenButton.addEventListener("click", () => {
    const gridTemplate = document.querySelector("#gridTemplate");
    darkMode = !darkMode;
    let isDrawing = false
    if (darkMode) {
        gridTemplate.addEventListener("mousedown", (event) => {
            event.target.style.filter = `brightness(50%)`;
            isDrawing = true;
        });

        gridTemplate.addEventListener("mouseover", (event) => {
            if (event.target.classList.contains("gridSquare") && isDrawing) {
                event.target.style.filter = `brightness(50%)`;
            }
        })
        gridTemplate.addEventListener("mouseup", () => isDrawing = false);
    } else {
        gridTemplate.addEventListener("mousedown", (event) => {
            event.target.style.filter = `brightness(100%)`;
            isDrawing = true;
        });

        gridTemplate.addEventListener("mouseover", (event) => {
            if (event.target.classList.contains("gridSquare") && isDrawing) {
                event.target.style.filter = `brightness(100%)`;
            }
        })
        gridTemplate.addEventListener("mouseup", () => isDrawing = false);
    }
});

const gridSizeInput = document.querySelector("#gridSize");
let gridSize = gridSizeInput.value;
gridSizeInput.addEventListener("change", () => {
    gridSize = gridSizeInput.value;
    const gridTemplate = document.querySelector("#gridTemplate");
    const gridSizeText = document.querySelector("#gridSizeText");
    gridSizeText.textContent = `${gridSize} X ${gridSize}`
    gridTemplate.remove()
    createGridTemplate()
});

createGridTemplate();