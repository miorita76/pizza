
// Cancel View Scaffold board
function eraseScaffoldRecipe() {
    console.log("INTERIOR  ERASE");
    document.getElementById("recipe-scaffolding").style.display = "none";
    document.getElementById("recipe-display").classList.add("visually-hidden");
    document.getElementById("main-board").classList.remove("visually-hidden");
};
document.querySelector('#btn-erase_recipe').onclick = eraseScaffoldRecipe;