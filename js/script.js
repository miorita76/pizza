// console.log("verificare conexiune SCRIPT");

// Clear board to be populated 
function clearBoard(boardName) {
    let parent = document.querySelector(boardName);
    while (parent.firstChild) {
        parent.firstChild.remove()
    };
};


function clearSelected() {
    console.log('clearSelected');
}


let highlightRecipeList = [];

function displayIngredientValue() {
    let ingredientsSelected = document.getElementsByName('ingredient_item');
    let elementSelected = [];





    // identify selected Ingredients array
    for (i = 0; i < ingredientsSelected.length; i++) {
        if (ingredientsSelected[i].checked) {
            elementSelected.push(ingredientsSelected[i].value);
        }
    };
    // verification array elementSelected is empty or does not exist
    // else is selected Ingredients array
    if (elementSelected.length === 0 || elementSelected === undefined) {
        console.log('No ingerdient elements selected !');
    } else {
        // formation of higlight recipes
        console.log(elementSelected);

        let flag = [];
        let highlightRecipeList = [];

        // verification of multiple elements
        function logicResult(myArray) {
            let sum = true;
            for (let ii = 0; ii < myArray.length; ii++) {
                sum = sum && myArray[ii];
            }
            return sum;
        }

        if (elementSelected.length != 0) {
            for (let i = 0; i < recipesList.length; i++) {
                // verification by forming of the boolean array
                for (let k = 0; k < elementSelected.length; k++) {
                    flag[k] = recipesList[i].ingredients.includes(elementSelected[k]);
                };

                // formation of the highlightRecipeList array
                if (logicResult(flag) == true) {
                    console.log(recipesList[i].name);
                    highlightRecipeList.push(recipesList[i].name);
                };
            };
            // draw highlight elements
            console.log(highlightRecipeList);
        }
        else {
            // nothing selected
        };




    };

}
