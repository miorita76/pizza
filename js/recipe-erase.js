// Modal window Erase display
let modalWindowErase = document.getElementById("modal_erase");

function openEraseModal() {
    modalWindowErase.classList.remove("visually-hidden");
    document.querySelector(".modal-window_header-title").textContent = 'Pizza "' + recipesList[selectedRecipeIndex].name + '" Recipe Erase';
};
document.querySelector('#btn-erase_recipe').onclick = openEraseModal;


// Erase Recipe Scaffold board
function eraseScaffoldRecipe() {
    recipesList.splice(selectedRecipeIndex, 1);

    localStorage.setItem('recipes', JSON.stringify(recipesList));

    clearBoard('#recipe-board_list');
    let fullRecipesErase = new RecipesBoard(recipesList);
    fullRecipesErase.boardDraw();

    document.getElementById("recipe-scaffolding").style.display = "none";
    document.getElementById("recipe-display").classList.add("visually-hidden");
    document.getElementById("main-board").classList.remove("visually-hidden");
    modalWindowErase.classList.add("visually-hidden");
};
document.querySelector('#btn-erase').onclick = eraseScaffoldRecipe;


// Get the button to close the modal
let btnCancelErase = document.getElementById("btn-cancel_erase");
// button to cancel the modalWindowErase
btnCancelErase.onclick = function () {
    modalWindowErase.classList.add("visually-hidden");
};

let closeWindowErase = document.getElementById("modal-window_close");
// When the user clicks on (x), close the modal
closeWindowErase.onclick = function () {
    modalWindowErase.classList.add("visually-hidden");
};

// The outside user clicks of the modal window, close it
window.addEventListener("click", function (event) {
    if (event.target == modalWindowErase) {
        modalWindowErase.classList.add("visually-hidden");
    }
});
