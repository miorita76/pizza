// generate - Ingredient list
let ingredientsDefault = [
    'artichokes', 'bacon', 'boiled potatoes', 'eggplant', 'eggs', 'fried egg', 'ham', 'mozzarella', 'mushrooms', 'olives', 'oregano', 'parmesan', 'sausage', 'spicy salami', 'chilli pepper', 'tomato sauce'
];
ingredientsDefault.sort();

localStorage.setItem('ingredients', JSON.stringify(ingredientsDefault));

// verify the existance of the recipes list
let ingredientsList = [];

ingredientsList = localStorage.getItem('ingredients');
if (ingredientsList) {
    ingredientsList = JSON.parse(ingredientsList);
    ingredientsList.sort();
}
else {
    console.log('Ingredients List do not exist.')
};

//console.log(ingredientsList);


class IngredientsBoard {
    constructor(ingredientsArr) {
        this.ingredientsArr = ingredientsArr;
    }
    boardDraw() {
        let parent = document.querySelector("#ingredient-board_list");

        for (let i in this.ingredientsArr) {

            let ingredientLabel = document.createElement("LABEL");
            ingredientLabel.setAttribute("class", "ingredient-wrapper");

            let checkboxInput = document.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.setAttribute("name", "ingredient_item");
            checkboxInput.setAttribute("value", this.ingredientsArr[i]);
            // checkboxInput.setAttribute("onclick", "displayIngredientValue()");
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

    }

};

class IngredientsScaffolding {
    constructor(ingredientsArr, actionType) {
        this.ingredientsArr = ingredientsArr;
        this.actionType = actionType;
    }
    boardDraw() {
        let parent = document.querySelector("#recipe-ingredients-draw" + this.actionType);

        let left = document.getElementById("recipe-scaffolding_left" + this.actionType);
        let right = document.getElementById("recipe-scaffolding_right" + this.actionType);

        for (let key in this.ingredientsArr) {
            if (key < this.ingredientsArr.length / 2 + 1)
                parent = left
            else parent = right;

            let ingredientLabel = document.createElement("LABEL");
            ingredientLabel.setAttribute("class", "ingredient-wrapper");

            let checkboxInput = document.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.setAttribute("name", "recipe-ingredient_item" + this.actionType);
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

let ingredientsDrawList = new IngredientsBoard(ingredientsList);
ingredientsDrawList.boardDraw();

// clear selected ingredients
function clearSelectedIngredients() {
    // clear and draw ingredients
    document.getElementById("ingredient-form").reset();
    let recipeIngredientsLocal = localStorage.getItem('ingredients');
    recipeIngredientsLocal = JSON.parse(recipeIngredientsLocal);
};
