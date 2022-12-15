
function inputChanged ()
{
    const result = document.querySelector("#resultat");
    const resultBox = document.querySelector("input").value;

    if(/\d/.test(resultBox))
    {
        const product = parseInt(resultBox)* parseInt(resultBox);
        result.innerText = product;
    }

    else
    {
        result.innerText = "Värdet är inte ett nummer"; 
    }  
}