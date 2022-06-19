let container = document.getElementById("container");
let card=document.getElementById('card');
let notesArray = [];

container.addEventListener('blur',(e)=>{
    notesArray.push(container.innerText);
    notesArray.forEach((element,index)=>{
        localStorage.setItem(`key${index}`,JSON.stringify(element));
        let fetchedData=JSON.parse(localStorage.getItem(`key${index}`));
    });
    container.innerText="";
    card.innerHTML+=fetchedData;
});

