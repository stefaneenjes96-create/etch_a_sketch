function createGridTemplate(size = 16) {
    const gridField = document.querySelector("#gridField");

    const gridTemplate = document.createElement("div");
    gridTemplate.classList.add("gridTemplate")
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
            gridSquare.textContent = ""
            gridRow.append(gridSquare);
            gridSquare.setAttribute("draggable", false)
        }
        return gridRow;
    }

    function changeColor(target, color) {
        target.style.backgroundColor = color;
    }

    let isDrawing = false;

    gridTemplate.addEventListener("mousedown", (event) => {
        event.preventDefault();
        isDrawing = true;
    });

    gridTemplate.addEventListener("mouseover", (event) => {
        if (isDrawing && event.target.classList.contains("gridSquare")) {
            changeColor(event.target, "red");
        }
    })

    gridTemplate.addEventListener("mouseup", () => isDrawing = false);
}

createGridTemplate();