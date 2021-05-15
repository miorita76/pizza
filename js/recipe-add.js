
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


    let ingredientsSelected = document.getElementsByName('recipe-ingredient_item_add');
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
        document.getElementById("recipe-error_ingredientAdd").classList.remove("visually-hidden");
        // console.log('No ingerdient elements selected !');
    }
    else {
        document.getElementById("recipe-error_ingredientAdd").classList.add("visually-hidden");
        document.getElementById("recipe-scaffolding").style.display = "block";
        // console.log(elementSelected);
    };

    // verification if ingredient details is empty
    let ingredients_details = document.getElementById("recipe-add_details").value;
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
    if ((flag == false) && (elementSelected.length !== 0) && (elementSelected !== undefined)
        && (ingredients_details !== '') && (recipe_description !== '')) {

        // create temporary object to be PUSH in recipesList
        let temp = new Object();
        temp.name = pizza_name;
        temp.image = 'img/personal-meat.png';
        temp.ingredients = elementSelected;
        temp.details = ingredients_details;
        temp.description = recipe_description;
        //console.log(temp);

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
            recipesList = recipesLocal;
            clearBoard('#recipe-board_list');
            let fullRecipesNext = new RecipesBoard(recipesList, null);
            fullRecipesNext.boardDraw();

            document.getElementById("recipe-scaffolding").style.display = "none";
            document.getElementById("recipe-add").classList.add("visually-hidden");
            document.getElementById("main-board").classList.remove("visually-hidden");
        }
        else {
            //console.log('recipesLocal LIPSESTE');
            recipesLocal = recipesDefault;
            recipesLocal.push(temp);

            localStorage.setItem('recipes', JSON.stringify(recipesLocal));

            recipesList = recipesLocal;

            // Clear and draw recipe board
            clearBoard('#recipe-board_list');
            let fullRecipesInitial = new RecipesBoard(recipesList, null);
            fullRecipesInitial.boardDraw();

            document.getElementById("recipe-scaffolding").style.display = "none";
            document.getElementById("recipe-add").classList.add("visually-hidden");
            document.getElementById("main-board").classList.remove("visually-hidden");
        };

        // clear and draw ingredients
        document.getElementById("ingredient-form").reset();
        let recipeIngredientsLocal = localStorage.getItem('ingredients');
        recipeIngredientsLocal = JSON.parse(recipeIngredientsLocal);
    };
};
document.querySelector('#btn-add_recipe').onclick = saveScaffoldAdd;


// Open ADD Scaffold board from recipice board
function viewScaffoldAdd() {

    // Clear and draw recipe board
    clearBoard('#recipe-board_list');
    let fullRecipesInitial = new RecipesBoard(recipesList, null);
    fullRecipesInitial.boardDraw();

    // clear Name field in case of previous insertion
    document.getElementById("recipe-add_name").value = '';

    document.getElementById("recipe-modify").classList.add("visually-hidden");
    document.getElementById("recipe-display").classList.add("visually-hidden");
    document.getElementById("recipe-error_nameAdd").classList.add("visually-hidden");
    document.getElementById("recipe-error_nameAdd_exist").classList.add("visually-hidden");
    document.getElementById("recipe-error_ingredientAdd").classList.add("visually-hidden");
    document.getElementById("recipe-error_detailAdd").classList.add("visually-hidden");
    document.getElementById("recipe-error_descriptionAdd").classList.add("visually-hidden");
    document.getElementById("recipe-scaffolding").style.display = "block";
    document.getElementById("recipe-add").classList.remove("visually-hidden");
    document.getElementById("main-board").classList.add("visually-hidden");

    // clear and draw ingredients
    document.getElementById("ingredient-form").reset();
    let recipeIngredientsLocal = localStorage.getItem('ingredients');
    recipeIngredientsLocal = JSON.parse(recipeIngredientsLocal);

    clearBoard("#recipe-scaffolding_left_add");
    clearBoard("#recipe-scaffolding_right_add");

    let ingredientsDrawList = new IngredientsScaffolding(recipeIngredientsLocal, '_add');
    ingredientsDrawList.boardDraw();

    // clear Selected fields in case previous inserted smth
    let ingredientsSelected = document.getElementsByName('recipe-ingredient_item_add');
    for (let i = 0; i < ingredientsSelected.length; i++) {
        ingredientsSelected[i].checked = false;
    };

    // clear Details and Description fields in case of previous insertion
    document.getElementById("recipe-add_details").value = "";
    document.getElementById("recipe-add_description").value = "";
};
document.querySelector('#recipe-board_add').onclick = viewScaffoldAdd;


// Cancel ADD Scaffold board
function cancelScaffoldAdd() {
    // clear and draw ingredients
    document.getElementById("ingredient-form").reset();
    let recipeIngredientsLocal = localStorage.getItem('ingredients');
    recipeIngredientsLocal = JSON.parse(recipeIngredientsLocal);

    document.getElementById("recipe-scaffolding").style.display = "none";
    document.getElementById("recipe-add").classList.add("visually-hidden");
    document.getElementById("main-board").classList.remove("visually-hidden");
};
document.querySelector('#btn-add-cancel_recipe').onclick = cancelScaffoldAdd;
