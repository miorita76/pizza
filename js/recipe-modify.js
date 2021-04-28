
// Cancel View Scaffold board
function modifyScaffoldRecipe() {
    console.log("INTERIOR   Modify");
    document.getElementById("recipe-scaffolding").style.display = "none";
    document.getElementById("recipe-modify").classList.add("visually-hidden");
    document.getElementById("main-board").classList.remove("visually-hidden");
};
document.querySelector('#btn-modify_recipe').onclick = modifyScaffoldRecipe;