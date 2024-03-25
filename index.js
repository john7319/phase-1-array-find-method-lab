// code your solution here
function superbowlWin(element){
    const win = element.find(yearFound => yearFound.result === "W")
    return win ? win.year : undefined;
}
superbowlWin(record)