// Get the button that opens the modal
let btnAdd = document.getElementById("btn-ingredientsAdd");
let modalWindowAdd = document.getElementById("ingredientAdd");

// button to open the modalWindowAdd
btnAdd.addEventListener("click", function () {
    modalWindowAdd.style.display = "block";
});

// Get the button to close the modal
let btnCancel = document.getElementById("btn-cancelAdd");
// button to cancel the modalWindowAdd
btnCancel.onclick = function () {
    modalWindowAdd.style.display = "none";
}

// When the user clicks on (x), close the modal
let closeWindowAdd = document.getElementById("modal-window_closeAdd");
closeWindowAdd.onclick = function () {
    modalWindowAdd.style.display = "none";
}

// The outside user clicks of the modal window, close it
window.addEventListener("click", function (event) {
    if (event.target == modalWindowAdd) {
        modalWindowAdd.style.display = "none";
    }
});

// INPUT tag generation
let parentIngredientAdd = document.querySelector("#ingredientAddBody");

let modalBodyAdd = document.createElement("DIV");
modalBodyAdd.setAttribute("class", "modal-window_body");

let modalInputAdd = document.createElement("INPUT");
modalInputAdd.setAttribute("type", "text");
modalInputAdd.setAttribute("class", "modal-window_body-input");
modalInputAdd.setAttribute("placeholder", "Insert New Ingredient");

modalBodyAdd.appendChild(modalInputAdd);

let errMsg = document.createElement("P");
errMsg.setAttribute("class", "ingredientErrorAdd");
errMsg.textContent = "";
modalBodyAdd.appendChild(errMsg);

parentIngredientAdd.appendChild(modalBodyAdd);



function itemAdd() {
    let newIngredient = document.querySelector('.modal-window_body-input').value;
    let flag = false;

    // dublicate ingredient existance
    for (key in ingredientsList) {
        if (newIngredient == ingredientsList[key]) {
            flag = true;
        };
    };


    // console.log('first: ' + ingredientsClient);

    if ((flag == false) && (newIngredient !== '')) {
        ingredientsClient.push(newIngredient);
        ingredientsClient.sort();
        errMsg.textContent = "";

        localStorage.setItem('ingredients', JSON.stringify(ingredientsClient));

        ingredientsList = ingredientsDefault.concat(ingredientsClient);

        // Clear ingredient board
        clearBoard('#ingredient-board_list-default');
        // display ingredients list 
        let fullIngredients = new IngredientsBoard(ingredientsList, DEFAULT_INGREDIENT_LENGTH);
        fullIngredients.boardDraw();

        modalWindowAdd.style.display = "none";


        // Clear and draw recipe board
        clearBoard('#recipe-board_list');
        let recipesClearIngredientAdd = new RecipesBoard(recipesList, DEFAULT_RECIPE_LENGTH, null);
        recipesClearIngredientAdd.boardDraw();


    }
    else if (newIngredient == '') {
        errMsg.textContent = "no data inserted";
    }
    else {
        errMsg.textContent = "ingredient name exists";
    };
};

document.querySelector('#btn-add').onclick = itemAdd;
