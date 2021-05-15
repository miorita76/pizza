// Open View Scaffold board
function modifyScaffoldRecipe() {
    console.log("INTERIOR Modify:");
    // clear Name field in case of previous insertion
    document.getElementById("recipe-modify_name-new").value = '';

    document.getElementById("recipe-modify_name-old").textContent = recipesList[selectedRecipeIndex].name;
    document.getElementById("recipe-modify_name-new").placeholder = recipesList[selectedRecipeIndex].name;


    // clear and draw ingredients
    document.getElementById("ingredient-form").reset();
    let recipeIngredientsLocal = localStorage.getItem('ingredients');
    recipeIngredientsLocal = JSON.parse(recipeIngredientsLocal);

    recipesList[selectedRecipeIndex].ingredients.sort();

    let display_string = '';
    for (let i = 0; i < recipesList[selectedRecipeIndex].ingredients.length; i++) {
        if (i == recipesList[selectedRecipeIndex].ingredients.length - 1) {
            display_string += ' ' + recipesList[selectedRecipeIndex].ingredients[i];
        }
        else {
            display_string += ' ' + recipesList[selectedRecipeIndex].ingredients[i] + ',';
        };
    };

    clearBoard("#recipe-scaffolding_left_modify");
    clearBoard("#recipe-scaffolding_right_modify");
    let ingredientsDrawList = new IngredientsScaffolding(recipeIngredientsLocal, '_modify');
    ingredientsDrawList.boardDraw();

    document.getElementById("recipe-modify_ingredients-old").textContent = display_string;
    // ingredients selection
    let ingredientsLocal = localStorage.getItem('ingredients');
    ingredientsLocal = JSON.parse(ingredientsLocal);

    document.getElementById("recipe-modify_ingredients-details").value = recipesList[selectedRecipeIndex].details;
    document.getElementById("recipe-modify_description").value = recipesList[selectedRecipeIndex].description;


    function modifySaveScaffoldRecipe() {
        let modified_name = document.getElementById("recipe-modify_name-new").value;

        flag = false;
        if (modified_name == '') {
            modified_name = recipesList[selectedRecipeIndex].name;
        }
        else {
            // verify the existance of same Names
            for (let i = 0; i < recipesList.length; i++) {
                if (modified_name == recipesList[i].name) {
                    flag = true;
                    // console.log('Recipe Name Exists Already');
                };
            };
            recipesList[selectedRecipeIndex].name = modified_name;
        };

        // ingredient selection
        let ingredientsSelected = document.getElementsByName('recipe-ingredient_item_modify');
        let elementSelected = [];
        // identify selected Ingredients array
        for (i = 0; i < ingredientsSelected.length; i++) {
            if (ingredientsSelected[i].checked) {
                elementSelected.push(ingredientsSelected[i].value);
            }
        };

        if (elementSelected.length === 0 || elementSelected === undefined) {
            elementSelected = recipesList[selectedRecipeIndex].ingredients;
            console.log('No ingerdient elements selected !');
            // console.log(elementSelectedIngredient);
        };
        recipesList[selectedRecipeIndex].ingredients = elementSelected;


        if (flag == false) {
            console.log('name nu exista - SAVE');
            console.log(recipesList[selectedRecipeIndex].name);

            document.getElementById("recipe-modify_error-name-exist").classList.add("visually-hidden");

            recipesList.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });

            let modified_details = document.getElementById("recipe-modify_ingredients-details").value;
            if (modified_details == '') {
                modified_details = recipesList[selectedRecipeIndex].details;
            };
            recipesList[selectedRecipeIndex].details = modified_details;

            let modified_description = document.getElementById("recipe-modify_description").value;
            if (modified_description == '') {
                modified_description = recipesList[selectedRecipeIndex].description;
            };
            recipesList[selectedRecipeIndex].description = modified_description;

            localStorage.setItem('recipes', JSON.stringify(recipesList));

            // Clear and draw recipe board
            clearBoard('#recipe-board_list');
            let fullRecipesInitial = new RecipesBoard(recipesList, null);
            fullRecipesInitial.boardDraw();

            clearBoard('#ingredient-board_list');
            let fullIngredientsInitial = new IngredientsBoard(ingredientsList);
            fullIngredientsInitial.boardDraw();

        }
        else {
            console.log('ERROR');
            document.getElementById("recipe-modify_error-name-exist").classList.remove("visually-hidden");
        };

        document.getElementById("recipe-modify").classList.add("visually-hidden");
        document.getElementById("recipe-display").classList.remove("visually-hidden");
    };
    document.querySelector('#btn-save_recipe').onclick = modifySaveScaffoldRecipe;


    document.getElementById("recipe-display").classList.add("visually-hidden");
    document.getElementById("recipe-scaffolding").style.display = "block";
    document.getElementById("recipe-modify").classList.remove("visually-hidden");
    document.getElementById("main-board").classList.add("visually-hidden");

};
document.querySelector('#btn-modify_recipe').onclick = modifyScaffoldRecipe;


// Cancel MODIFY Scaffold board
function cancelScaffoldModify() {

    // clear and draw ingredients
    document.getElementById("ingredient-form").reset();
    let recipeIngredientsLocal = localStorage.getItem('ingredients');
    recipeIngredientsLocal = JSON.parse(recipeIngredientsLocal);

    document.getElementById("recipe-scaffolding").style.display = "none";
    document.getElementById("main-board").classList.remove("visually-hidden");
};
document.querySelector('#btn-modify-cancel_recipe').onclick = cancelScaffoldModify;
