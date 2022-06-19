value=localStorage.getItem('text');
let text;
if(value==null) text=document.createTextNode('Click here to enter sometext');
else text=document.createTextNode(value);
let mainDiv=document.getElementById('container');
mainDiv.appendChild(text);
mainDiv.addEventListener('click',()=>{
    let notextArea=document.getElementsByClassName("textarea").length;
    if(notextArea==0){
        let html=mainDiv.innerHTML;
        mainDiv.innerHTML=`<textarea id="textarea" class="textarea" name="w3review" rows="4" cols="10" style="margin-top:20px; margin-left:20px; padding:20px">${html}</textarea>`
    }
    let textArea=document.getElementById("textarea");
    textArea.addEventListener('blur',()=>{
        mainDiv.innerHTML=textArea.value;
        localStorage.setItem('text',textArea.value);
    });
});