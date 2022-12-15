
function generateList(){

    const result = document.querySelector("div");

    if (result.innerHTML === "")
    {
        let array = Array.from({
        length: Math.floor(Math.random() * 10) + 1
        }, () => Math.floor(Math.random() * 101));

        let list = document.createElement("ol");
        for (let i = 0; i < array.length; i++)
        {
        let listItem = document.createElement("li");
        listItem.innerText = array[i];
        document.querySelector("#resultat").appendChild(list);
        list.appendChild(listItem);
        } 
    }
    else
    {
        let arrayList = document.querySelector("ol");
        result.removeChild(arrayList);

        let array = Array.from({
        length: Math.floor(Math.random() * 10) + 1
        }, () => Math.floor(Math.random() * 101));

        let list = document.createElement("ol");
        for (let i = 0; i < array.length; i++)
        {
        let listItem = document.createElement("li");
        listItem.innerText = array[i];
        document.querySelector("#resultat").appendChild(list);
        list.appendChild(listItem);
        } 
    }
}


