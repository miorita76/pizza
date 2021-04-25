// backend data supply - Ingredient list
let ingredientsDefault = [
    "tomato sauce", "mozzarella", "mushrooms", "ham", "artichokes", "olives", "oregano", "parmesan", "eggs", "bacon", "parma ham", "pepperoni", "stracchino (soft cheese)", "eggplant", "boiled potatoes", "sausage", "peppers", "peas", "porchetta (Italian spit-roasted pork)", "pecorino cheese", "spicy salami", "chilli pepper", "asparagus", "salami", "zucchini", "polenta (boiled cornmeal)", "vienna sausage", "gorgonzola cheese", "speck", "porcino mushrooms", "fontina cheese", "fried egg"
];
ingredientsDefault.sort();

// verify the existance of the client data
let ingredientsClient = [];

let client_ingredients = localStorage.getItem('ingredients');
if (client_ingredients) {
    ingredientsClient = JSON.parse(client_ingredients);
    ingredientsClient.sort();
};

let ingredientsList = ingredientsDefault.concat(ingredientsClient);


class IngredientsDefault {
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
};

let ingredients = new IngredientsDefault(ingredientsList, ingredientsDefault.length);
ingredients.boardDraw();
