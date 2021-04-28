// Get the button that opens the modal
let btnErase = document.getElementById("btn-ingredientsErase");
let modalWindowErase = document.getElementById("ingredientErase");

// button to open the modalWindowErase
btnErase.addEventListener("click", function () {

    clearBoard("#ingredientEraseBody");
    modalWindowErase.style.display = "block";

    // SELECT tag generation
    let parentIngredientErase = document.querySelector("#ingredientEraseBody");

    let selectListErase = document.createElement("SELECT");
    selectListErase.setAttribute("id", "erase_body-select");
    selectListErase.setAttribute("class", "modal-window_body-select");
    selectListErase.setAttribute("onchange", "eraseElement(this.options[this.selectedIndex].value);");

    let selectItemErase = document.createElement("OPTION");
    selectItemErase.setAttribute("class", "modal-window_body-option");
    selectItemErase.setAttribute("value", -1);
    selectItemErase.textContent = "Select Ingredient Name";
    selectListErase.appendChild(selectItemErase);

    for (let key in ingredientsClient) {
        selectItemErase = document.createElement("OPTION");
        selectItemErase.setAttribute("class", "modal-window_body-option");
        selectItemErase.setAttribute("value", key);
        selectItemErase.textContent = ingredientsClient[key];
        selectListErase.appendChild(selectItemErase);
    };

    parentIngredientErase.appendChild(selectListErase);

}, false);


// Display in placeholder the current value to be modified
function eraseElement(chosen) {

    function itemDeleted() {
        ingredientsClient.splice(chosen, 1);

        if (ingredientsClient.length == 0) {
            document.getElementById("btn-ingredientsModify").classList.add("visually-hidden");
            document.getElementById("btn-ingredientsErase").classList.add("visually-hidden");
        };

        localStorage.setItem('ingredients', JSON.stringify(ingredientsClient));

        ingredientsList = ingredientsDefault.concat(ingredientsClient);
        // Clear ingredient board
        clearBoard('#ingredient-board_list-default');

        // display ingredients list 
        let ingredients = new IngredientsBoard(ingredientsList, ingredientsDefault.length);
        ingredients.boardDraw();

        modalWindowErase.style.display = "none";
    };

    document.querySelector('#btn-erase').onclick = itemDeleted;
};


// Get the button to close the modal
let btnCancelErase = document.getElementById("btn-cancelErase");
// button to cancel the modalWindowErase
btnCancelErase.onclick = function () {
    modalWindowErase.style.display = "none";
}

let closeWindowErase = document.getElementById("modal-window_closeErase");
// When the user clicks on (x), close the modal
closeWindowErase.onclick = function () {
    modalWindowErase.style.display = "none";
}

// The outside user clicks of the modal window, close it
window.addEventListener("click", function (event) {
    if (event.target == modalWindowErase) {
        modalWindowErase.style.display = "none";
    }
});
