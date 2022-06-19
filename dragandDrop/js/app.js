let imgBox=document.querySelector('.imgBox');
let whiteBoxes=document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart',(e)=>{
    console.log('Dragstart hass been triggered');
    e.target.classList.add('hold');
    // e.target.className='hide';
    setTimeout(() => {
        e.target.className='hide';
    }, 0);
});
imgBox.addEventListener('dragend',(e)=>{
    console.log('Dragend has been triggered.');
    e.target.className='imgBox';
});

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        // e.target.classList.add('back');
    });
    whiteBox.addEventListener('dragenter',(e)=>{
        e.target.classList.add('dashed');

    });
    whiteBox.addEventListener('dragleave',(e)=>{
        e.target.className='whiteBox';

    });
    whiteBox.addEventListener('drop',(e)=>{
        e.target.appendChild(imgBox);

    });
}