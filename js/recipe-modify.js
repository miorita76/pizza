

// Cancel View Scaffold board
function modifyScaffoldRecipe() {
    //console.log("INTERIOR Modify: " + recipesList[selectedRecipeIndex].name);

    document.getElementById("recipe-error_nameModify_exist").classList.add("visually-hidden");

    document.getElementById("recipe-modify_name-old").textContent = recipesList[selectedRecipeIndex].name;
    document.getElementById("recipe-modify_name-new").placeholder = recipesList[selectedRecipeIndex].name;
    document.getElementById("recipe-modify_ingredients-details").value = recipesList[selectedRecipeIndex].details;
    document.getElementById("recipe-modify_description").value = recipesList[selectedRecipeIndex].description;

    // localStorage recipe index
    let selectedDefault = selectedRecipeIndex;
    selectedRecipeIndex = selectedRecipeIndex - DEFAULT_RECIPE_LENGTH;


    let recipesLocal = localStorage.getItem('recipes');
    recipesLocal = JSON.parse(recipesLocal);

    document.getElementById("recipe-modify_ingredients-old").textContent = recipesLocal[selectedRecipeIndex].ingredients;
    // ingredients selection
    let ingredientsLocal = localStorage.getItem('ingredients');
    ingredientsLocal = JSON.parse(ingredientsLocal);

    if (typeof ingredientsLocal != "undefined" && ingredientsLocal != null) {
        ingredientsList = ingredientsDefault.concat(ingredientsLocal);
    }
    else {
        ingredientsList = ingredientsDefault;
    };

    clearBoard('#recipe-scaffolding_left-modify');
    clearBoard('#recipe-scaffolding_right-modify');
    let ingredientsRecipe = new IngredientsBoard(ingredientsList, DEFAULT_INGREDIENT_LENGTH);
    ingredientsRecipe.ingredientsScaffoldingModify();






    function modifySaveScaffoldRecipe() {
        //console.log("INTERIOR Save: " + recipesList[selectedRecipeIndex].name);

        let modified_name = document.getElementById("recipe-modify_name-new").value;
        flag = false;
        if (modified_name == '') {
            modified_name = recipesList[selectedDefault].name;
        }
        else {
            // verify the existance of same Names
            for (let i = 0; i < recipesList.length; i++) {
                if (modified_name == recipesList[i].name) {
                    flag = true;
                    // console.log('Recipe Name Exists Already');
                };
            };
        };



        // identify selected Ingredients array
        let ingredientsSelected = document.getElementsByName('ingredient_item');
        let elementSelected = [];

        for (i = 0; i < ingredientsSelected.length; i++) {
            if (ingredientsSelected[i].checked) {
                /*console.log('before SELECTED ingerdient elements !');
                console.log(elementSelected);*/
                elementSelected.push(ingredientsSelected[i].value);
            }
        };

        if (elementSelected.length === 0 || elementSelected === undefined) {
            elementSelected = recipesLocal[selectedRecipeIndex].ingredients;
            // console.log('No ingerdient elements selected !');
            // console.log(elementSelected);
        };
        recipesLocal[selectedRecipeIndex].ingredients = elementSelected;




        if (flag == false) {
            // console.log('SAVE');
            recipesLocal[selectedRecipeIndex].name = modified_name;
            // sorting by name
            recipesLocal.sort(function (a, b) {
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
            recipesLocal[selectedRecipeIndex].details = modified_details;

            let modified_description = document.getElementById("recipe-modify_description").value;
            if (modified_description == '') {
                modified_description = recipesList[selectedRecipeIndex].description;
            };
            recipesLocal[selectedRecipeIndex].description = modified_description;


            localStorage.setItem('recipes', JSON.stringify(recipesLocal));

            recipesList = recipesDefault.concat(recipesLocal);

            // Clear and draw recipe board
            clearBoard('#recipe-board_list');
            let fullRecipesInitial = new RecipesBoard(recipesList, DEFAULT_RECIPE_LENGTH);
            fullRecipesInitial.boardDraw();

            // clear insert INPUT pizza name
            document.getElementById("recipe-modify_name-new").value = '';

            document.getElementById("recipe-error_nameModify_exist").classList.add("visually-hidden");
            document.getElementById("recipe-scaffolding").style.display = "none";
            document.getElementById("main-board").classList.remove("visually-hidden");
        }
        else {
            // console.log('ERROR');
            document.getElementById("recipe-error_nameModify_exist").classList.remove("visually-hidden");
        };
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
    document.getElementById("recipe-scaffolding").style.display = "none";
    document.getElementById("recipe-add").classList.add("visually-hidden");
    document.getElementById("main-board").classList.remove("visually-hidden");
};
document.querySelector('#btn-cancelModify_recipe').onclick = cancelScaffoldModify;
