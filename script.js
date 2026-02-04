function createGridTemplate(size = 16) {
    const gridTemplate = document.querySelector("#gridField");
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
        }
        return gridRow;
    }
}

createGridTemplate();