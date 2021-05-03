// backend data supply - Ingredient list
let ingredientsDefault = [
    "tomato sauce", "mozzarella", "mushrooms", "ham", "artichokes", "olives", "oregano", "parmesan", "eggs", "bacon", "parma ham", "pepperoni", "stracchino (soft cheese)", "eggplant", "boiled potatoes", "sausage", "peppers", "peas", "porchetta (Italian spit-roasted pork)", "pecorino cheese", "spicy salami", "chilli pepper", "asparagus", "salami", "zucchini", "polenta (boiled cornmeal)", "vienna sausage", "gorgonzola cheese", "speck", "porcino mushrooms", "fontina cheese", "fried egg"
];
ingredientsDefault.sort();

const DEFAULT_INGREDIENT_LENGTH = ingredientsDefault.length;

// verify the existance of the client data
let ingredientsClient = [];

let client_ingredients = localStorage.getItem('ingredients');
if (typeof client_ingredients != "undefined" && client_ingredients != null && client_ingredients.length != null && client_ingredients.length > 0) {
    ingredientsClient = JSON.parse(client_ingredients);
    ingredientsClient.sort();
};

let ingredientsList = ingredientsDefault;
if (typeof ingredientsClient != "undefined" && ingredientsClient != null && ingredientsClient.length != null && ingredientsClient.length > 0) {
    ingredientsList = ingredientsDefault.concat(ingredientsClient);
}

class IngredientsBoard {
    constructor(ingredientsArr, defaultArrLength) {
        this.ingredientsArr = ingredientsArr;
        this.defaultArrLength = defaultArrLength;
    }
    boardDraw() {
        let parent = document.querySelector("#ingredient-board_list-default");

        for (let i in this.ingredientsArr) {

            let ingredientLabel = document.createElement("LABEL");
            ingredientLabel.setAttribute("class", "ingredient-wrapper");


            if (i == this.defaultArrLength) {
                let lineHR = document.createElement("HR");
                lineHR.setAttribute("class", "ingredient-board_line");
                parent.appendChild(lineHR);

                let headerName = document.createElement("HEADER");
                headerName.setAttribute("class", "ingredient-board_header");
                headerName.textContent = "My ingredients board";
                parent.appendChild(headerName);

                lineHR = document.createElement("HR");
                lineHR.setAttribute("class", "ingredient-board_line");
                parent.appendChild(lineHR);
            };


            let checkboxInput = document.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.setAttribute("name", "ingredient_item");
            checkboxInput.setAttribute("value", this.ingredientsArr[i]);
            checkboxInput.setAttribute("onclick", "displayIngredientValue()");
            ingredientLabel.appendChild(checkboxInput);

            let ingredientCheckmark = document.createElement("SPAN");
            ingredientCheckmark.setAttribute("class", "ingredient-checkmark");
            ingredientLabel.appendChild(ingredientCheckmark);

            let ingredientTitle = document.createElement("SPAN");
            ingredientTitle.setAttribute("class", "ingredient-label_title");

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
    ingredientsScaffolding() {
        let parent = document.querySelector("#recipe-add_ingredients-draw");

        let left = document.getElementById("recipe-scaffolding_left");
        let right = document.getElementById("recipe-scaffolding_right");

        for (let key in this.ingredientsArr) {
            if (key < this.ingredientsArr.length / 2 + 1)
                parent = left
            else parent = right;

            let ingredientLabel = document.createElement("LABEL");
            ingredientLabel.setAttribute("class", "ingredient-wrapper");

            if (key == this.defaultArrLength) {
                let headerName = document.createElement("HEADER");
                headerName.setAttribute("class", "ingredient-board_header");
                headerName.textContent = "My Ingredients";
                parent.appendChild(headerName);
            };


            let checkboxInput = document.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.setAttribute("name", "ingredient_item");
            checkboxInput.setAttribute("value", this.ingredientsArr[key]);
            ingredientLabel.appendChild(checkboxInput);

            let ingredientCheckmark = document.createElement("SPAN");
            ingredientCheckmark.setAttribute("class", "ingredient-checkmark");
            ingredientLabel.appendChild(ingredientCheckmark);

            let ingredientTitle = document.createElement("SPAN");
            ingredientTitle.setAttribute("class", "ingredient-label_title");

            let titleText = document.createTextNode(this.ingredientsArr[key]);
            ingredientTitle.appendChild(titleText);
            ingredientLabel.appendChild(ingredientTitle);

            parent.appendChild(ingredientLabel);
        };
    }
    ingredientsScaffoldingModify() {
        let parent = document.querySelector("#recipe-modify_ingredients-old");

        let left = document.getElementById("recipe-scaffolding_left-modify");
        let right = document.getElementById("recipe-scaffolding_right-modify");

        for (let key in this.ingredientsArr) {
            if (key < this.ingredientsArr.length / 2 + 1)
                parent = left
            else parent = right;

            let ingredientLabel = document.createElement("LABEL");
            ingredientLabel.setAttribute("class", "ingredient-wrapper");

            if (key == this.defaultArrLength) {
                let headerName = document.createElement("HEADER");
                headerName.setAttribute("class", "ingredient-board_header");
                headerName.textContent = "My Ingredients";
                parent.appendChild(headerName);
            };


            let checkboxInput = document.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.setAttribute("name", "ingredient_item");
            checkboxInput.setAttribute("value", this.ingredientsArr[key]);
            ingredientLabel.appendChild(checkboxInput);

            let ingredientCheckmark = document.createElement("SPAN");
            ingredientCheckmark.setAttribute("class", "ingredient-checkmark");
            ingredientLabel.appendChild(ingredientCheckmark);

            let ingredientTitle = document.createElement("SPAN");
            ingredientTitle.setAttribute("class", "ingredient-label_title");

            let titleText = document.createTextNode(this.ingredientsArr[key]);
            ingredientTitle.appendChild(titleText);
            ingredientLabel.appendChild(ingredientTitle);

            parent.appendChild(ingredientLabel);
        };
    }


};

let ingredients = new IngredientsBoard(ingredientsList, DEFAULT_INGREDIENT_LENGTH);
ingredients.boardDraw();

// Clear and draw recipe board
clearBoard('#recipe-board_list');
let recipesClearIngredientView = new RecipesBoard(recipesList, DEFAULT_RECIPE_LENGTH, null);
recipesClearIngredientView.boardDraw();


