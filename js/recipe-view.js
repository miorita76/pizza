// generate Recipe list
let recipesDefault = [
    {
        "name": "Quattro Stagioni",
        "image": "img/quattro.png",
        "ingredients": ["tomato sauce", "mozzarella", "mushrooms", "ham", "artichokes", "olives", "oregano"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Carbonara",
        "image": "img/carbonara.png",
        "ingredients": ["tomato sauce", "mozzarella", "parmesan", "eggs", "bacon"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Crudo",
        "image": "img/crudo.png",
        "ingredients": ["tomato sauce", "mozzarella", "parma ham"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Montanara",
        "image": "img/montanara.png",
        "ingredients": ["tomato sauce", "mozzarella", "mushrooms", "pepperoni", "Stracchino (soft cheese)"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Emiliana",
        "image": "img/emiliana.png",
        "ingredients": ["tomato sauce", "mozzarella", "eggplant", "boiled potatoes", "sausage"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Fattoria",
        "image": "img/fattoria.png",
        "ingredients": ["tomato sauce", "mozzarella", "peppers", "peas", "porchetta (Italian spit-roasted pork)"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Prosciutto or Cardinale",
        "image": "img/prosciutto.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "oregano"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Prosciutto e Funghi",
        "image": "img/prosciutto_funghi.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "mushrooms"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Sarda",
        "image": "img/sarda.png",
        "ingredients": ["tomato sauce", "mozzarella", "pecorino cheese", "spicy salami"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Diavola",
        "image": "img/diavola.png",
        "ingredients": ["tomato sauce", "mozzarella", "spicy salami", "chilli pepper"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Contadina",
        "image": "img/contadina.png",
        "ingredients": ["tomato sauce", "mozzarella", "asparagus", "mushrooms", "bacon", "parmesan"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Capricciosa",
        "image": "img/capricciosa.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "artichokes", "mushrooms", "olives"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Padana",
        "image": "img/padana.png",
        "ingredients": ["tomato sauce", "parmesan cheese", "salami", "zucchini", "polenta (boiled cornmeal)"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Tedesca",
        "image": "img/tedesca.png",
        "ingredients": ["tomato sauce", "mozzarella", "vienna sausage"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Tirolese",
        "image": "img/tirolese.png",
        "ingredients": ["tomato sauce", "mozzarella", "gorgonzola cheese", "speck"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Boscaiola",
        "image": "img/boscaiola.png",
        "ingredients": ["tomato sauce", "mozzarella", "porcino mushrooms", "bacon"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Francescana",
        "image": "img/francescana.png",
        "ingredients": ["tomato sauce", "mozzarella", "porcino mushrooms", "ham", "parmesan"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Valdostana",
        "image": "img/valdostana.png",
        "ingredients": ["tomato sauce", "mozzarella", "fontina cheese", "bacon"],
        "details": "no details",
        "description": "no description"
    },
    {
        "name": "Bismarck",
        "image": "img/bismarck.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "fried egg"],
        "details": "100 g flour; 5 g salt; 5 g olive oil; 2 g yeast; 50 g water.; 20 g genovese sauce; 30 g cheese; half papurika",
        "description": "no description"
    }
];


const DEFAULT_RECIPE_LENGTH = recipesDefault.length;


// sorting by name
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

recipesClient = localStorage.getItem('recipes');
if (recipesClient) {
    recipesClient = JSON.parse(recipesClient);
    recipesClient.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
};

let recipesList = recipesDefault;
if (typeof recipesClient != "undefined" && recipesClient != null && recipesClient.length != null && recipesClient.length > 0) {
    recipesList = recipesDefault.concat(recipesClient);
};



class RecipesBoard {
    constructor(recipesArr, defaultArrLength) {
        this.recipesArr = recipesArr;
        this.defaultArrLength = defaultArrLength;
    }
    boardDraw() {
        let parent = document.querySelector("#recipe-board_list");

        for (let i in this.recipesArr) {
            var recipeLabel = document.createElement("LABEL");
            recipeLabel.setAttribute("class", "recipe-wrapper");

            if (i == this.defaultArrLength) {
                let lineHR = document.createElement("HR");
                lineHR.setAttribute("class", "ingredient-board_line");
                parent.appendChild(lineHR);

                let headerName = document.createElement("HEADER");
                headerName.setAttribute("class", "ingredient-board_header");
                headerName.textContent = "My recipes board";
                parent.appendChild(headerName);

                lineHR = document.createElement("HR");
                lineHR.setAttribute("class", "ingredient-board_line");
                parent.appendChild(lineHR);
            };

            let radioInput = document.createElement("INPUT");
            radioInput.setAttribute("type", "radio");
            radioInput.setAttribute("name", "recipe_item");
            radioInput.setAttribute("value", this.recipesArr[i].name);
            radioInput.setAttribute("onclick", "displayRecipeValue()");
            recipeLabel.appendChild(radioInput);

            let recipeCheckmark = document.createElement("SPAN");
            recipeCheckmark.setAttribute("class", "recipe-checkmark");
            recipeLabel.appendChild(recipeCheckmark);

            let recipeTitle = document.createElement("SPAN");
            recipeTitle.setAttribute("class", "recipe-label_title");
            let titleText = document.createTextNode(this.recipesArr[i].name);
            recipeTitle.appendChild(titleText);
            recipeLabel.appendChild(recipeTitle);

            parent.appendChild(recipeLabel);
        }
    }
};

let recipes = new RecipesBoard(recipesList, DEFAULT_RECIPE_LENGTH);
recipes.boardDraw();


function displayRecipeValue() {
    let recipeSelected = document.getElementsByName('recipe_item');

    for (i = 0; i < recipeSelected.length; i++) {
        if (recipeSelected[i].checked) {
            // The Dashboard Recipe display
            if (i > DEFAULT_RECIPE_LENGTH - 1) {
                document.getElementById("recipe-buttons_manage").classList.remove("visually-hidden");
            }
            else {
                document.getElementById("recipe-buttons_manage").classList.add("visually-hidden");
            };

            document.querySelector('.recipe-display_title').textContent = 'pizza "' + recipesList[i].name + '"';
            document.querySelector('.recipe-display_img').src = recipesList[i].image;
            document.querySelector('.recipe-display_details').textContent = recipesList[i].details;
            document.querySelector('.recipe-display_description').textContent = recipesList[i].description;

            console.log(recipeSelected[i].value + ' i= ' + i);
            console.log('DEFAULT_RECIPE_LENGTH= ' + DEFAULT_RECIPE_LENGTH);
        };
    };

    document.getElementById("recipe-add").classList.add("visually-hidden");
    document.getElementById("recipe-scaffolding").style.display = "block";
    document.getElementById("recipe-display").classList.remove("visually-hidden");
    document.getElementById("main-board").classList.add("visually-hidden");
};

