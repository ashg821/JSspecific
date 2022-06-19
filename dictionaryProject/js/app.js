let btn = document.getElementById("btn");


btn.addEventListener("click", (event) => {
    event.preventDefault();
    let enteredWord = document.getElementById("word");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.dictionaryapi.dev/api/v2/entries/en/${enteredWord.value}`, true);
    xhr.onload = function () {
        let card = document.getElementById('card');
        if (this.status === 200) {
            let dataArray = JSON.parse(this.responseText);
            // console.log(dataArray);
            let meanings = dataArray[0].meanings;
            // console.log(meanings);
            let cardHtml = `<h2>${dataArray[0]['word']}</h2>`;
            meanings.forEach(element => {
                cardHtml += `<div class="card-body">
                <h5 class="card-title">Part of speech: ${element.partOfSpeech}</h5>`
                element.definitions.forEach((elem, index) => {
                    cardHtml += `<p class="card-text">${index + 1} ${elem.definition}</p>`
                });
                cardHtml += `</div>`;
            });
            card.innerHTML = cardHtml;
        }
        else {
            let cardHtml=`<div class="card-body">
            <h5 class="card-title">Entered word is either incorrect or some error occured</h5>
            </div>`;
            card.innerHTML=cardHtml;
            console.log('Some error occured', xhr.status);
        }

    }
    enteredWord.value = "";
    xhr.send();

});