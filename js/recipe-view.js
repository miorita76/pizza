// generate Recipe list
let recipesDefault = [
    {
        "name": "Quattro Stagioni",
        "image": "img/quattro.png",
        "ingredients": ["tomato sauce", "mozzarella", "mushrooms", "ham", "artichokes", "olives", "oregano"]
    },
    {
        "name": "Carbonara",
        "image": "img/carbonara.png",
        "ingredients": ["tomato sauce", "mozzarella", "parmesan", "eggs", "bacon"]
    },
    {
        "name": "Crudo",
        "image": "img/crudo.png",
        "ingredients": ["tomato sauce", "mozzarella", "parma ham"]
    },
    {
        "name": "Montanara",
        "image": "img/montanara.png",
        "ingredients": ["tomato sauce", "mozzarella", "mushrooms", "pepperoni", "Stracchino (soft cheese)"]
    },
    {
        "name": "Emiliana",
        "image": "img/emiliana.png",
        "ingredients": ["tomato sauce", "mozzarella", "eggplant", "boiled potatoes", "sausage"]
    },
    {
        "name": "Fattoria",
        "image": "img/fattoria.png",
        "ingredients": ["tomato sauce", "mozzarella", "peppers", "peas", "porchetta (Italian spit-roasted pork)"]
    },
    {
        "name": "Prosciutto or Cardinale",
        "image": "img/prosciutto.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "oregano"]
    },
    {
        "name": "Prosciutto e Funghi",
        "image": "img/prosciutto_funghi.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "mushrooms"]
    },
    {
        "name": "Sarda",
        "image": "img/sarda.png",
        "ingredients": ["tomato sauce", "mozzarella", "pecorino cheese", "spicy salami"]
    },
    {
        "name": "Diavola",
        "image": "img/diavola.png",
        "ingredients": ["tomato sauce", "mozzarella", "spicy salami", "chilli pepper"]
    },
    {
        "name": "Contadina",
        "image": "img/contadina.png",
        "ingredients": ["tomato sauce", "mozzarella", "asparagus", "mushrooms", "bacon", "parmesan"]
    },
    {
        "name": "Capricciosa",
        "image": "img/capricciosa.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "artichokes", "mushrooms", "olives"]
    },
    {
        "name": "Padana",
        "image": "img/padana.png",
        "ingredients": ["tomato sauce", "parmesan cheese", "salami", "zucchini", "polenta (boiled cornmeal)"]
    },
    {
        "name": "Tedesca",
        "image": "img/tedesca.png",
        "ingredients": ["tomato sauce", "mozzarella", "vienna sausage"]
    },
    {
        "name": "Tirolese",
        "image": "img/tirolese.png",
        "ingredients": ["tomato sauce", "mozzarella", "gorgonzola cheese", "speck"]
    },
    {
        "name": "Boscaiola",
        "image": "img/boscaiola.png",
        "ingredients": ["tomato sauce", "mozzarella", "porcino mushrooms", "bacon"]
    },
    {
        "name": "Francescana",
        "image": "img/francescana.png",
        "ingredients": ["tomato sauce", "mozzarella", "porcino mushrooms", "ham", "parmesan"]
    },
    {
        "name": "Valdostana",
        "image": "img/valdostana.png",
        "ingredients": ["tomato sauce", "mozzarella", "fontina cheese", "bacon"]
    },
    {
        "name": "Bismarck",
        "image": "img/bismarck.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "fried egg"]
    }
];

recipesDefault.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

// verify the existance of the client data
let recipesClient = [];

/*let recipesClient = [
    {
        "name": "Client Quattro Stagioni",
        "image": "img/personal-meat.png",
        "ingredients": ["tomato sauce", "mozzarella", "mushrooms", "ham", "artichokes", "olives", "oregano"]
    },
    {
        "name": "Client Carbonara",
        "image": "img/personal-meat.png",
        "ingredients": ["tomato sauce", "mozzarella", "parmesan", "eggs", "bacon"]
    }
];
*/

recipesClient = localStorage.getItem('recipes');
if (recipesClient) {

    recipesClient = JSON.parse(recipesClient);


};

let recipesList = recipesDefault;
if (typeof recipesClient != "undefined" && recipesClient != null && recipesClient.length != null && recipesClient.length > 0) {
    recipesList = recipesDefault.concat(recipesClient);
};

let recipeItem = document.getElementById('recipe-board_list');

for (let i in recipesList) {
    var recipeLabel = document.createElement("LABEL");
    recipeLabel.setAttribute("class", "recipe-wrapper");

    let radioInput = document.createElement("INPUT");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("name", "recipe_item");
    radioInput.setAttribute("value", recipesList[i].name);
    radioInput.setAttribute("onclick", "displayRecipeValue()");
    recipeLabel.appendChild(radioInput);

    let recipeCheckmark = document.createElement("SPAN");
    recipeCheckmark.setAttribute("class", "recipe-checkmark");
    recipeLabel.appendChild(recipeCheckmark);

    let recipeTitle = document.createElement("SPAN");
    recipeTitle.setAttribute("class", "recipe-label_title");
    let titleText = document.createTextNode(recipesList[i].name);
    recipeTitle.appendChild(titleText);
    recipeLabel.appendChild(recipeTitle);

    recipeItem.appendChild(recipeLabel);
}

function displayRecipeValue() {
    let recipeSelected = document.getElementsByName('recipe_item');

    for (i = 0; i < recipeSelected.length; i++) {
        if (recipeSelected[i].checked)
            // The Dashboard Recipe display
            console.log(recipeSelected[i].value);
    }
}