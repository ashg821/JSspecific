// a=document.all;
// console.log(a);
// Array.from(a).forEach(function(element){
//     console.log(element);
// });
// const getText=()=>{
//     let text=document.getElementById("demotext").value;
//     document.getElementById("demo").innerHTML=text;
// }
let a=document.links;

Array.from(a).forEach((element)=>{
    if(element.href.includes('godaddy')){
        console.log(element.href);
    }
});


let element=document.getElementById("container");
console.log(element.childNodes);
console.log(element.parentNode);
console.log(element.innerText);
console.log(element.innerHTML);

sel=document.querySelector('div a');
sel.style.color="red";
console.log(sel);

let elements=document.getElementsByClassName("child");
// console.log(elements);
// Array.from(elements).forEach((element,index)=>{
//     if(index==3) element.innerText="The last child";
// })
// Array.from(elements).forEach((element)=>{
//     console.log(element);
// })
elements=document.getElementsByTagName("div");
console.log(elements);

