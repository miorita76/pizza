// generate Recipe list
let recipesDefault = [
    {
        "name": "Quattro Stagioni",
        "image": "img/quattro.png",
        "ingredients": ["tomato sauce", "mozzarella", "mushrooms", "ham", "artichokes", "olives", "oregano"],
        "details": "1) 2 tablespoons extra virgin olive oil;\n2) 80g chestnut mushrooms, sliced;\n3) 200g passata (sieved tomatoes);\n4) 2 mozzarella balls, drained and cut into small cubes;\n5) 100g pitted Kalamata olives, quartered;\n6) 80g sliced cooked ham, cut into strips;\n7) 6 artichokes hearts in oil, drained and quartered;\n8) to taste salt and pepper.",
        "description": "1) Prepare two baking trays by pouring 1 tablespoon of oil in each tray and spread it with your fingers or pastry brush. Brush the inside of a large bowl with oil.\n2) To prepare the topping, heat the oil in a large frying pan over a high heat, and fry the mushrooms for 5 minutes stirring frequently. Season with salt, leave to cool and set aside.\n3) To prepare the dough, place the flour, yeast and salt into a large bowl, make a well in the centre and pour in the water with 1 tablespoon of oil. Use a wooden spoon to mix everything together to create a wet dough.\n4) Turn out the dough onto a well-floured surface and work it with your hands for about 5 minutes or until smooth and elastic. Place in the oiled bowl, brush the top with oil and cover with clingfilm. Leave to rest at room temperature for 25 minutes.\n5) Preheat the oven to 200°C/gas mark 6.\n6) Once rested, turn out the dough onto a well-floured surface. Roll 4 little pieces of dough into 22cm-long strings, and set them aside. Divide the remaining dough into two equal halves. Use your hands to push each one out from the centre to create 2 discs about 22cm in diameter. Gently lift the pizza bases onto the oiled baking trays.\n7) Spread the passata evenly over the bases using the back of a tablespoon and season with salt and pepper. Scatter the mozzarella cheese on top.\n8) Use 2 dough strings per pizza to make a cross on top of each. Press the ends of the strings onto the edge of the base to secure. Both pizzas will have 4 triangle shapes. Fill one triangle with olives, one with ham, the next with artichokes and the last with mushrooms.\n9) Cook in the middle of the oven for 18 minutes until golden brown. Serve hot and enjoy.\n"
    },
    {
        "name": "Emiliana",
        "image": "img/emiliana.png",
        "ingredients": ["tomato sauce", "mozzarella", "eggplant", "boiled potatoes", "sausage"],
        "details": "- Emiliana Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Prepare the pizza dough according to the basic recipe.\n2) Preheat the oven to 220 ° C.\n3) Roll out the dough for the pizzas.\n4) Fill the molds or place the dough on the baking tray and brush with the olive oil.\n5) Divide the mozzarella, basil, tomatoes cut side up and the Parma ham on top.\n6) Bake the pizzas in the middle of the oven for 20 minutes until golden brown and done.\n7) Divide the arugula on top and sprinkle with the Parmesan cheese.\n8) Drizzle with a little more olive oil if necessary."
    },
    {
        "name": "Diavola",
        "image": "img/diavola.png",
        "ingredients": ["tomato sauce", "mozzarella", "spicy salami", "chilli pepper"],
        "details": "- Diavola Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Preheat the oven to 500°F with a pizza stone (or heavy-duty baking sheet turned upside down) on the centre rack.\n2) With the pizza dough rolled out and placed on a cornmeal-dusted pizza peel, use a small palette knife to spread the tomato sauce evenly over the dough. Place the salami slices, peppers and mozzarella evenly over the sauce. Sprinkle with the Parmesan.\n3) Give the pizza peel a shake to make sure the pizza isn’t sticking and slide it onto the hot stone in the oven. Bake for 8 to 10 minutes, until the crust is blistered and golden and the cheese is melted.\n4) Remove the pizza from the oven with tongs and slide it onto a cutting board. Top the hot pizza with the fresh basil leaves and pepperoncini pepper. Allow to cool for 3 minutes before slicing and serving.\n"
    },
    {
        "name": "Carbonara",
        "image": "img/carbonara.png",
        "ingredients": ["tomato sauce", "mozzarella", "parmesan", "eggs", "bacon"],
        "details": "1) 150g cooking bacon, sliced;\n2) 130g mushrooms, sliced;\n3) 2 garlic cloves, crushed;\n4) 100ml crème fraiche;\n5) 210g mozzarella;\n6) 2 sourdough pizza bases;\n7) 100g mature Cheddar, grated;\n8) 30g rocket;\n9) 1 tsp olive oil.",
        "description": "1) Heat the oven to gas 6, 200°C, fan 180°C. Put a large flat baking sheet that will fit both pizza bases in the oven to heat up.\n2) Fry the bacon over a medium heat for 5 mins until crisp. Remove from the pan and set aside. Add the mushrooms to the pan and fry for 5 mins until golden. Season with pepper and add half the garlic and fry for 1 min. Mix the crème fraiche with the remaining garlic and black pepper. Finely chop the mozzarella.\n3) Place the pizza bases on the hot baking tray. Divide the crème fraiche mixture between the pizza bases and spread out evenly, leaving a 1cm border around the edges.\n4) Top the pizzas with the bacon and mushrooms, then scatter over the mozzarella and the Cheddar. Cook for 9-10 mins until the cheese is bubbling and the bacon is golden and crisp. Scatter with the rocket just before serving. Serve any remaining rocket alongside, drizzled with a little olive oil."
    },
    {
        "name": "Bismarck",
        "image": "img/bismarck.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "fried egg"],
        "details": "1) 1 time basic recipe pizza dough;\n2) extra virgin olive oil;\n3) 400 grams of mozzarella(in slices);\n4) 3 tablespoons basil(chopped);\n5) 350 grams cherry / cherry tomatoes(halved);\n6) 200 grams of Parma ham;\n7) 75 grams of arugula;\n8) 100 grams Parmesan cheese(grated).",
        "description": "1) Spread the pizza sauce on the base;\n2) Lay out the Pancetta strips leaving rom in the middle for the egg;\n3) Scatter a handful of Mushrooms over the Pancetta;\n4) Using a spoon, dot the Salsa Tartufata over the pizza;\n5) Crack the egg into the middle;\n6) Bake in oven at highest temp for 3 - 5 minutes. The crust should be crispy but not burnt.;\n7) Remove from the oven and garnish with the rocket and mozzarella."
    }
];

let recipesLocal = [];
let recipesList = [];

// verification the existance of the recipesList
recipesLocal = localStorage.getItem('recipes');
if (typeof recipesLocal != "undefined" && recipesLocal != null && recipesLocal.length != null && recipesLocal.length > 0) {
    //console.log('recipesLocal - exista');
    recipesList = JSON.parse(recipesLocal);
}
else {
    console.log('recipesLocal - NU exista');
    localStorage.setItem('recipes', JSON.stringify(recipesDefault));
    recipesList = recipesDefault;
};

//console.log('----- recipesList ----');
//console.log(recipesList);

recipesList.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

class RecipesBoard {
    constructor(recipesArr) {
        this.recipesArr = recipesArr;
    }
    boardDraw() {
        let parent = document.querySelector("#recipe-board_list");

        for (let i in this.recipesArr) {
            let recipeLabel = document.createElement("LABEL");
            recipeLabel.setAttribute("class", "recipe-wrapper");

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
        };
    }
};

let recipesDrawList = new RecipesBoard(recipesList);
recipesDrawList.boardDraw();


let selectedRecipeIndex;

function displayRecipeValue() {
    let recipeSelected = document.getElementsByName('recipe_item');

    for (i = 0; i < recipeSelected.length; i++) {
        if (recipeSelected[i].checked) {
            document.querySelector('.recipe-display_title').textContent = 'pizza "' + recipesList[i].name + '"';
            document.querySelector('.recipe-display_img').src = recipesList[i].image;
            document.querySelector('.recipe-display_details').textContent = recipesList[i].details;
            document.querySelector('.recipe-display_description').textContent = recipesList[i].description;

            // console.log(recipeSelected[i].value + ' i= ' + i);
            selectedRecipeIndex = i;
            // console.log('selectedRecipeIndex= ' + selectedRecipeIndex);
        };
    };

    document.getElementById("recipe-modify").classList.add("visually-hidden");
    document.getElementById("recipe-add").classList.add("visually-hidden");
    document.getElementById("recipe-scaffolding").style.display = "block";
    document.getElementById("recipe-display").classList.remove("visually-hidden");
    document.getElementById("main-board").classList.add("visually-hidden");
};
