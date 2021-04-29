
function saveScaffoldAdd() {


    let pizza_name = document.getElementById("recipe-add_name").value;

    if (!pizza_name) {
        document.getElementById("recipe-error_nameAdd").classList.remove("visually-hidden");
    }
    else {
        document.getElementById("recipe-error_nameAdd").classList.add("visually-hidden");
        document.getElementById("recipe-scaffolding").style.display = "block";
    };

    // verification the existance of Name
    let flag = false;
    for (let i = 0; i < recipesList.length; i++) {
        if (pizza_name == recipesList[i].name) {
            flag = true;
            // console.log('Recipe Name Exists Already');
        };
    };

    if (flag == true) {
        document.getElementById("recipe-error_nameAdd_exist").classList.remove("visually-hidden");
    }
    else {
        document.getElementById("recipe-error_nameAdd_exist").classList.add("visually-hidden");
        document.getElementById("recipe-scaffolding").style.display = "block";
    };

    let ingredientsSelected = document.getElementsByName('ingredient_item');
    let elementSelected = [];

    // identify selected Ingredients array
    for (i = 0; i < ingredientsSelected.length; i++) {
        if (ingredientsSelected[i].checked) {
            elementSelected.push(ingredientsSelected[i].value);
        }
    }
    // verification array elementSelected is empty or does not exist
    // else is selected Ingredients array
    if (elementSelected.length === 0 || elementSelected === undefined) {
        document.getElementById("recipe-error_ingredientAdd").classList.remove("visually-hidden");
        // console.log('No ingerdient elements selected !');
    }
    else {
        document.getElementById("recipe-error_ingredientAdd").classList.add("visually-hidden");
        document.getElementById("recipe-scaffolding").style.display = "block";
        // console.log(elementSelected);
    };

    // verification if ingredient details is empty
    let ingredients_details = document.getElementById("recipe-add_ingredients-details").value;
    if (ingredients_details == '') {
        document.getElementById("recipe-error_detailAdd").classList.remove("visually-hidden");
        //console.log('No Ingredients Details Inserted !!')
    }
    else {
        document.getElementById("recipe-error_detailAdd").classList.add("visually-hidden");
        document.getElementById("recipe-scaffolding").style.display = "block";
    };

    // verification if recipie description is empty
    let recipe_description = document.getElementById("recipe-add_description").value;
    if (recipe_description == '') {
        document.getElementById("recipe-error_descriptionAdd").classList.remove("visually-hidden");
        //console.log('No Recipe Description Inserted !!')
    }
    else {
        document.getElementById("recipe-error_descriptionAdd").classList.add("visually-hidden");
        document.getElementById("recipe-scaffolding").style.display = "block";
    };

    // data existance verification
    if ((flag == false) && (elementSelected.length !== 0) && (elementSelected !== undefined) && (ingredients_details !== '') && (recipe_description !== '')) {

        // create temporary object to be PUSH in recipesList
        let temp = new Object();
        temp.name = pizza_name;
        temp.image = 'img/personal-meat.png';
        temp.ingredients = elementSelected;
        temp.details = ingredients_details;
        temp.description = recipe_description;

        let recipesLocal = localStorage.getItem('recipes');
        recipesLocal = JSON.parse(recipesLocal);

        if (typeof recipesLocal != "undefined" && recipesLocal != null && recipesLocal.length != null && recipesLocal.length > 0) {
            // console.log('recipesLocal EXISTA');

            recipesLocal.push(temp);
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

            localStorage.setItem('recipes', JSON.stringify(recipesLocal));
            recipesList = recipesDefault.concat(recipesLocal);
            clearBoard('#recipe-board_list');
            let fullRecipesNext = new RecipesBoard(recipesList, DEFAULT_RECIPE_LENGTH);
            fullRecipesNext.boardDraw();

            document.getElementById("recipe-scaffolding").style.display = "none";
            document.getElementById("recipe-add").classList.add("visually-hidden");
            document.getElementById("main-board").classList.remove("visually-hidden");
        }
        else {
            // console.log('recipesLocal LIPSESTE');
            recipesLocal = [];
            recipesLocal.push(temp);

            localStorage.setItem('recipes', JSON.stringify(recipesLocal));

            recipesList = recipesDefault.concat(recipesLocal);

            // Clear and draw recipe board
            clearBoard('#recipe-board_list');
            let fullRecipesInitial = new RecipesBoard(recipesList, DEFAULT_RECIPE_LENGTH);
            fullRecipesInitial.boardDraw();

            document.getElementById("recipe-scaffolding").style.display = "none";
            document.getElementById("recipe-add").classList.add("visually-hidden");
            document.getElementById("main-board").classList.remove("visually-hidden");
        };

    };

};
document.querySelector('#btn-add_recipe').onclick = saveScaffoldAdd;

// Cancel ADD Scaffold board
function cancelScaffoldAdd() {
    document.getElementById("recipe-scaffolding").style.display = "none";
    document.getElementById("recipe-add").classList.add("visually-hidden");
    document.getElementById("main-board").classList.remove("visually-hidden");
};
document.querySelector('#btn-cancel_recipe').onclick = cancelScaffoldAdd;

// Open ADD Scaffold board from recipice board
function viewScaffoldAdd() {
    let ingredientsLocal = localStorage.getItem('ingredients');
    ingredientsLocal = JSON.parse(ingredientsLocal);

    if (typeof ingredientsLocal != "undefined" && ingredientsLocal != null) {
        ingredientsList = ingredientsDefault.concat(ingredientsLocal);
    }
    else {
        ingredientsList = ingredientsDefault;
    };

    //clearBoard('#recipe-add_ingredients-draw');
    let ingredientsRecipe = new IngredientsBoard(ingredientsList, DEFAULT_INGREDIENT_LENGTH);
    ingredientsRecipe.ingredientsScaffolding();

    document.getElementById("recipe-display").classList.add("visually-hidden");
    document.getElementById("recipe-error_nameAdd").classList.add("visually-hidden");
    document.getElementById("recipe-error_ingredientAdd").classList.add("visually-hidden");
    document.getElementById("recipe-error_detailAdd").classList.add("visually-hidden");
    document.getElementById("recipe-scaffolding").style.display = "block";
    document.getElementById("recipe-add").classList.remove("visually-hidden");
    document.getElementById("main-board").classList.add("visually-hidden");
};
document.querySelector('#btn-recipesAdd').onclick = viewScaffoldAdd;
