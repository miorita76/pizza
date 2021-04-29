// Erase Recipe Scaffold board
function eraseScaffoldRecipe() {

    let recipesLocal = localStorage.getItem('recipes');
    recipesLocal = JSON.parse(recipesLocal);

    selectedRecipeIndex = selectedRecipeIndex - DEFAULT_RECIPE_LENGTH;
    recipesLocal.splice(selectedRecipeIndex, 1);

    localStorage.setItem('recipes', JSON.stringify(recipesLocal));
    recipesList = recipesDefault.concat(recipesLocal);
    clearBoard('#recipe-board_list');
    let fullRecipesErase = new RecipesBoard(recipesList, DEFAULT_RECIPE_LENGTH);
    fullRecipesErase.boardDraw();

    document.getElementById("recipe-scaffolding").style.display = "none";
    document.getElementById("recipe-display").classList.add("visually-hidden");
    document.getElementById("main-board").classList.remove("visually-hidden");
};
document.querySelector('#btn-erase_recipe').onclick = eraseScaffoldRecipe;
