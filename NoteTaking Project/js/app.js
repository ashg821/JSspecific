showNotes();
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click', ()=>{
    let addText=document.getElementById('addText');
    let addTitle=document.getElementById('title');
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    myObj={
        title: addTitle.value,
        text: addText.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addText.value="";
    addTitle.value="";
    showNotes();
    
});
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html= "";
    notesObj.forEach((element,index) => {
        html+=`
            <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.text}</p>
                  <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        `;
    });
    let notesElement=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElement.innerHTML=html;
    }
    else{
        notesElement.innerHTML=`There are no notes that has been added`;
    }
}
function deleteNote(index){
    console.log("Delete button clicked", index);
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

searchText.addEventListener('input', ()=>{
    searchText=document.getElementById('searchText');
    let inputVal=searchText.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards= document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach((element)=>{
        let cardText=element.getElementsByTagName('p')[0].innerText;
        console.log(cardText);
        if(cardText.includes(inputVal)){
            element.style.display='block';
        }
        else element.style.display='none';
    });
});