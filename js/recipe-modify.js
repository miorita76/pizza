

// Cancel View Scaffold board
function modifyScaffoldRecipe() {
    console.log("INTERIOR Modify: " + recipesList[selectedRecipeIndex].name);

    document.getElementById("recipe-modify_name-old").textContent = recipesList[selectedRecipeIndex].name;
    document.getElementById("recipe-modify_name-new").placeholder = recipesList[selectedRecipeIndex].name;

    let modified_name = document.getElementById("recipe-modify_name-new").value;

    function modifySaveScaffoldRecipe() {
        console.log("INTERIOR Save: " + recipesList[selectedRecipeIndex].name);

        let flag = false;
        if (modified_name == '') {
            modified_name = recipesList[selectedRecipeIndex].name;

            console.log("+++++++++++ NAME +++++++++++++++");
            console.log('name= ' + modified_name);
            console.log("++++++++++++++++++++++++++");
        }
        else {
            // verification the existance of Name
            for (let i = 0; i < recipesList.length; i++) {
                if (modified_name == recipesList[i].name) {
                    flag = true;
                    // console.log('Recipe Name Exists Already');
                };
            };
            if (flag == true) {
                document.getElementById("recipe-error_nameModify_exist").classList.remove("visually-hidden");
            }
            else {
                document.getElementById("recipe-error_nameModify_exist").classList.add("visually-hidden");
                document.getElementById("recipe-scaffolding").style.display = "block";
            };
        };



    }
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
