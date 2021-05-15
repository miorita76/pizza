// console.log("verificare conexiune SCRIPT");

// Clear board to be populated 
function clearBoard(boardName) {
    let parent = document.querySelector(boardName);
    while (parent.firstChild) {
        parent.firstChild.remove()
    };
};


function clearSelected() {
    console.log('clearSelected');
    // Clear and draw recipe board
    clearBoard('#recipe-board_list');
    let recipesClear = new RecipesBoard(recipesList);
    recipesClear.boardDraw();

    cancelScaffoldModify();
}
