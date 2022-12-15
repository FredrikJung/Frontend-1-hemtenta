


function generateList(){
    let array = Array.from({
        length: Math.floor(Math.random() * 10) + 1
    }, () => Math.floor(Math.random() * 101));

    console.log(array);

    let list = document.createElement("ol");
    for (let i = 0; i < array.length; i++)
    {
        let listItem = document.createElement("li");
        listItem.innerText = array[i];
        document.querySelector("#resultat").appendChild(list);
        list.appendChild(listItem);
    }   
}


