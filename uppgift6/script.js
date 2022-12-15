
let result = document.querySelector("#resultat");

function inputChanged ()
{
    let resultBox = document.createElement("p");
    result.appendChild(resultBox);
    resultBox.innterText = "Värdet är inte ett nummer";   
}