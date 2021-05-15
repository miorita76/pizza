
// Clear board to be populated 
function clearBoard(boardName) {
    let parent = document.querySelector(boardName);
    while (parent.firstChild) {
        parent.firstChild.remove()
    };
    console.log('resetApp22');
};


function clearSelected() {
    console.log('clearSelected');
    // Clear and draw recipe board
    clearBoard('#recipe-board_list');
    let recipesClear = new RecipesBoard(recipesList, null);
    recipesClear.boardDraw();

    cancelScaffoldModify();
}


function resetApp() {
    console.log('resetApp');

    localStorage.removeItem("ingredients");
    localStorage.removeItem("recipes");

    location.reload();
}


let highlightRecipeList = [];

function displayIngredientValue() {
    let ingredientsSelected = document.getElementsByName('ingredient_item');
    let elementSelectedIngredient = [];

    // identify selected Ingredients array
    for (i = 0; i < ingredientsSelected.length; i++) {
        if (ingredientsSelected[i].checked) {
            elementSelectedIngredient.push(ingredientsSelected[i].value);
        }
    };

    if (elementSelectedIngredient.length == 0 || elementSelectedIngredient == undefined) {
        console.log('No ingerdient elements selected !');
        // Clear and draw recipe board
        clearBoard('#recipe-board_list');
        let recipesNoIngredients = new RecipesBoard(recipesList);
        recipesNoIngredients.boardDraw();
    } else {
        // formation of higlight recipes
        console.log(elementSelectedIngredient);

        let flag = [];
        let highlightRecipeList = [];

        // verification of multiple elements
        function logicResult(myArray) {
            let sum = true;
            for (let ii = 0; ii < myArray.length; ii++) {
                sum = sum && myArray[ii];
            }
            return sum;
        };


        if (elementSelectedIngredient.length != 0) {
            for (let i = 0; i < recipesList.length; i++) {
                // verification by forming of the boolean array
                for (let k = 0; k < elementSelectedIngredient.length; k++) {
                    flag[k] = recipesList[i].ingredients.includes(elementSelectedIngredient[k]);
                };

                // formation of the highlightRecipeList array
                if (logicResult(flag) == true) {
                    // console.log(recipesList[i].name);
                    highlightRecipeList.push(recipesList[i].name);
                };
            };

            // Clear and draw recipe board
            clearBoard('#recipe-board_list');
            let recipesHighlight = new RecipesBoard(recipesList, highlightRecipeList);
            recipesHighlight.boardDraw();
        }
        else {
            // nothing selected
            console.log('elementSelectedIngredient.length= ' + elementSelectedIngredient.length);

            // Clear and draw recipe board
            clearBoard('#recipe-board_list');
            let recipesClear = new RecipesBoard(recipesList, null);
            recipesClear.boardDraw();
        };


    };

}
