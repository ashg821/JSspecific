// document.getElementById("navbar").addEventListener('click',(event)=>{
//     console.log(event.target);
//     console.log(event.offsetX);
//     console.log(event.movementY);
//     // location.href='//google.com';
//     // open('//google.com','_blank');
// });

// document.getElementById('container').addEventListener('mousemove',(e)=>{
//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},0)`;
// });

document.getElementById('btn').addEventListener('dblclick', (e)=>{
    console.log("mouse was double clicked");
    e.preventDefault();
});
document.getElementById('btn').addEventListener('click', (e)=>{
    console.log("mouse was single clicked");
    e.preventDefault();
    console.log(e);
});
document.getElementById('btn').addEventListener('mousedown', (e)=>{
    console.log("Its's a mouse down");
    e.preventDefault();
    console.log(e);
});
document.getElementById('demotext').addEventListener('change',(e)=>{
    document.body.style.backgroundColor="red";
});
document.getElementById('head').addEventListener('copy',(e)=>{
    document.body.style.backgroundColor="pink";
});