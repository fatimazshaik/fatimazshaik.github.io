function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function mouseEnter(name) {
    document.getElementById("pageTitle").innerHTML = name;
    document.getElementById("pageTitle").style.color = "#7F5283";
}

function mouseLeave(){
    document.getElementById("pageTitle").innerHTML = "welcome";
    document.getElementById("pageTitle").style.color = "#2A0944";
}
