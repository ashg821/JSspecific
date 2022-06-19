let display = document.getElementById('display');
let buttonClass = document.querySelectorAll('button');

for (item of buttonClass) {
    item.addEventListener('click', (e) => {
        display.style.textAlign='right';
        buttonText = e.target.innerText;
        // console.log(buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            display.value += buttonText;
        }
        else if (buttonText == 'C') {
            display.value = '';
        }
        else if (buttonText == '=') {
            try {
                display.value = eval(display.value);
            }
            catch(error){
                display.style.textAlign='center';
                display.value='WRONG EXPRESSION';

            }
        }
        else {
            display.value += buttonText;
        }
    });

}