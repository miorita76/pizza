console.log('START  recipe-add.js');

// draw ingredients in recipe Add/Modify/Erase block
class IngredientsScaffolding {
    constructor(ingredientsArr, defaultArrLength) {
        this.ingredientsArr = ingredientsArr;
        this.defaultArrLength = defaultArrLength;
    }
    boardDraw() {
        let parent = document.querySelector("#recipe-add_ingredients-draw");

        for (let i in this.ingredientsArr) {

            let ingredientLabel = document.createElement("LABEL");
            ingredientLabel.setAttribute("class", "ingredient-wrapper_scaffolding");


            if (i == this.defaultArrLength) {
                let lineHR = document.createElement("HR");
                lineHR.setAttribute("class", "ingredient-board_line");
                parent.appendChild(lineHR);

                let headerName = document.createElement("HEADER");
                headerName.setAttribute("class", "ingredient-board_header-scaffolding");
                headerName.textContent = "My ingredients board";
                parent.appendChild(headerName);

                lineHR = document.createElement("HR");
                lineHR.setAttribute("class", "ingredient-board_line");
                parent.appendChild(lineHR);
            };


            let checkboxInput = document.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.setAttribute("name", "ingredient_item-recipe");
            checkboxInput.setAttribute("value", this.ingredientsArr[i]);
            //            checkboxInput.setAttribute("onclick", "displayIngredientValue()");
            ingredientLabel.appendChild(checkboxInput);

            let ingredientCheckmark = document.createElement("SPAN");
            ingredientCheckmark.setAttribute("class", "ingredient-checkmark_scaffolding");
            ingredientLabel.appendChild(ingredientCheckmark);

            let ingredientTitle = document.createElement("SPAN");
            ingredientTitle.setAttribute("class", "ingredient-label_title-scaffolding");

            let titleText = document.createTextNode(this.ingredientsArr[i]);
            ingredientTitle.appendChild(titleText);
            ingredientLabel.appendChild(ingredientTitle);

            parent.appendChild(ingredientLabel);
        };

        if (this.ingredientsArr.length > this.defaultArrLength) {
            document.getElementById("btn-ingredientsModify").classList.remove("visually-hidden");
            document.getElementById("btn-ingredientsErase").classList.remove("visually-hidden");
        };
    }
};

let recipeIngredientDraw = new IngredientsScaffolding(ingredientsList, ingredientsDefault.length);
recipeIngredientDraw.boardDraw();



function showSelected() {
    let pizza_name = document.getElementById("recipe-add_name").value;
    if (!pizza_name) {
        console.log('no Name inserted !!')
    };


    // identify checked ingredients and form an array
    let checkboxes = document.getElementsByName('ingredient_item-recipe');
    let vals = '';
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            vals += "," + checkboxes[i].value;
        }
    };
    if (vals) vals = vals.substring(1);
    let ingredients_selected = vals.split(",");

    // verify if any ingredient selected
    if (vals == '') {
        console.log('no Ingredients selected !!');
    };

    // read Local storage the client recipes
    let recipesLocal = [];
    let temp = new Object();
    recipesLocal = localStorage.getItem('recipes');
    recipesLocal = JSON.parse(recipesLocal);

    if (recipesLocal) {
        temp.name = pizza_name;
        temp.ingredients = ingredients_selected;
        recipesLocal.push(temp);
    }
    else {
        recipesLocal = [];
        temp.name = pizza_name;
        temp.ingredients = ingredients_selected;
        recipesLocal.push(temp);
    };

    localStorage.setItem('recipes', JSON.stringify(recipesLocal));

    for (let key in recipesLocal) {
        recipesDefault.push(recipesLocal[key]);
    };


};



document.querySelector('#btn-add_recipe').onclick = showSelected;