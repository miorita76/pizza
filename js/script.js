// Clear board to be populated 
function clearBoard(boardName) {
    let parent = document.querySelector(boardName);
    while (parent.firstChild) {
        parent.firstChild.remove()
    };
};
