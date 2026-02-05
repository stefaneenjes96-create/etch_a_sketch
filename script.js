function createGridTemplate(size = 16) {
    const gridField = document.querySelector("#gridField");

    const gridTemplate = document.createElement("div");
    gridTemplate.classList.add("gridTemplate");
    gridField.append(gridTemplate);

    for (let i = 0; i < size; i++) {
        const gridRow = createGridRow(size);
        gridRow.classList.add("gridRow")
        gridTemplate.append(gridRow);
    }

    function createGridRow(size) {
        const gridRow = document.createElement("div");
        for (let i = 0; i < size; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridSquare.textContent = "";
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

createGridTemplate();