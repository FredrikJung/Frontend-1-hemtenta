


function generateList(){
    let list = document.createElement("ol");
    document.getElementById("resultat").appendChild(list);
    listItem = document.createElement("li") 
    listItem.innerHTML = Array.from({
        length: Math.floor(Math.random() * 10) + 1
    }, () => Math.floor(Math.random() * 101)),
    document.querySelector("ol").appendChild(listItem);
    
}


