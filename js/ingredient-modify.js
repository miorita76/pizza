// Get the button that opens the modal
let btnModify = document.getElementById("btn-ingredientsModify");
let modalWindowModify = document.getElementById("ingredientModify");



// button to open the modalWindowModify
btnModify.addEventListener("click", function () {

    clearBoard("#ingredientModifyBody");
    modalWindowModify.style.display = "block";

    // SELECT tag generation
    let parentIngredientModify = document.querySelector("#ingredientModifyBody");

    let selectListModify = document.createElement("SELECT");
    selectListModify.setAttribute("id", "modify_body-select");
    selectListModify.setAttribute("class", "modal-window_body-select");
    selectListModify.setAttribute("onchange", "placeholderDisplay(this.options[this.selectedIndex].value);");

    let selectItemModify = document.createElement("OPTION");
    selectItemModify.setAttribute("class", "modal-window_body-option");
    selectItemModify.setAttribute("value", -1);
    selectItemModify.textContent = "Select Ingredient Name";
    selectListModify.appendChild(selectItemModify);

    for (let key in ingredientsClient) {
        selectItemModify = document.createElement("OPTION");
        selectItemModify.setAttribute("class", "modal-window_body-option");
        selectItemModify.setAttribute("value", key);
        selectItemModify.textContent = ingredientsClient[key];
        selectListModify.appendChild(selectItemModify);
    };

    parentIngredientModify.appendChild(selectListModify);

    // variable to be placed in INPUT placeholder
    let ingredientKey = document.querySelector(".modal-window_body-select").value;

    let ingredientNameInput = document.createElement("INPUT");
    ingredientNameInput.setAttribute("type", "text");
    ingredientNameInput.setAttribute("class", "modal-window_body-input");
    ingredientNameInput.setAttribute("id", "modal-body_input");
    if (ingredientKey == -1) ingredientNameInput.setAttribute("placeholder", 'no option selected');
    parentIngredientModify.appendChild(ingredientNameInput);

    let errMsg = document.createElement("P");
    errMsg.setAttribute("class", "ingredientErrorModify");
    errMsg.setAttribute("id", "ingredientErrorModify");
    errMsg.textContent = "";
    parentIngredientModify.appendChild(errMsg);
});


// Display in placeholder the current value to be modified
function placeholderDisplay(chosen) {
    document.getElementById("modal-body_input").setAttribute("placeholder", ingredientsClient[chosen]);
};

// Get the button to close the modal
let btnCancelModify = document.getElementById("btn-cancelModify");
// button to cancel the modalWindowModify
btnCancelModify.onclick = function () {
    modalWindowModify.style.display = "none";
}

let closeWindowModify = document.getElementById("modal-window_closeModify");
// When the user clicks on (x), close the modal
closeWindowModify.onclick = function () {
    modalWindowModify.style.display = "none";
}

// The outside user clicks of the modal window, close it
window.addEventListener("click", function (event) {
    if (event.target == modalWindowModify) {
        modalWindowModify.style.display = "none";
    }
});



function itemModify() {
    // read ingredientKey
    let ingredientKey = document.querySelector("#modify_body-select").value;

    // read INPUT value
    let ingredientModified = document.querySelector('#modal-body_input').value;

    if (ingredientModified == '') {
        ingredientModified = ingredientsClient[ingredientKey];
    };

    let flag = false;

    // dublicate ingredient existance
    for (key in ingredientsList) {
        if (ingredientModified == ingredientsList[key]) {
            flag = true;
        };
    };

    if (flag == false) {
        ingredientsClient[ingredientKey] = ingredientModified;
        ingredientsClient.sort();

        localStorage.setItem('ingredients', JSON.stringify(ingredientsClient));

        ingredientsList = ingredientsDefault.concat(ingredientsClient);
        // Clear ingredient board
        clearBoard('#ingredient-board_list-default');

        // display ingredients list 
        let ingredients = new IngredientsBoard(ingredientsList, DEFAULT_INGREDIENT_LENGTH);
        ingredients.boardDraw();

        modalWindowModify.style.display = "none";
    }
    else {
        document.querySelector("#ingredientErrorModify").textContent = "ingredient name exists";
    };
};

document.querySelector('#btn-modify').onclick = itemModify;
