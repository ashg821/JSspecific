//initialize number of parameters
let addCount = 2;

//utility dunction to convert the stringHtml to element
function returnInnerElement(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

//hide the parameters box initially
let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display = 'none';

//if the user selects the parameters box then hide the json box
let paramRadio = document.getElementById('paramRadio');
paramRadio.addEventListener('click', () => {
    document.getElementById('jsonBox').style.display = 'none';
    parameterBox.style.display = 'block';
});

//if the user select the json request type then keep the parameter box hidden

let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parameterBox').style.display = 'none';
    document.getElementById('jsonBox').style = 'block';
});

//if the user clicks on the + button then add more parameter box to the DOM
let addparam = document.getElementById('addParam');
addparam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="row g-3 my-2">
    <label for="param1" class="col-sm-2 col-form-label">Parameter ${addCount}</label>
    <div class="col-md-4">
        <input type="text" class="form-control" placeholder="Key Name" aria-label="Key Name" id="keyName${addCount}">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" placeholder="Key Value" aria-label="Key Value" id="keyValue${addCount}">
    </div>
    <div class="col-md-2 deleteParam">
        <button type="submit" class="btn btn-primary" id="addParam${addCount}">-</button>
    </div>
</div>`;
    let paramsElement = returnInnerElement(string);
    params.appendChild(paramsElement);

    let deleteParamClass = document.getElementsByClassName('deleteParam');
    // console.log(deleteParamClass);
    for (item of deleteParamClass) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        });
    }
    addCount++;
});

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //tell the user to wait till the response is being fetched
    // let responseText = document.getElementById('responseText');
    let responsePrism = document.getElementById('responsePrism');
    responsePrism.innerHTML = 'Please wait while we fetch your response...'

    //Fetch all the values that user has entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector('input[name=requestType]:checked').value;
    let contentType = document.querySelector('input[name=contentType]:checked').value;

    console.log(url);
    console.log(requestType);
    console.log(contentType);

    if (contentType == 'params') {
        let data = {};
        for (let i = 0; i <= addCount; i++) {
            if (document.getElementById('keyName' + (i + 1)) != undefined) {
                let key = document.getElementById('keyName' + (i + 1)).value;
                let value = document.getElementById('keyValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
        // console.log(data);
    }
    else {
        data = document.getElementById('jsonText').value;
    }
    //if the request type slected by the user is get, then invoke the fetch api for get request 
    
    if (requestType == 'get') {
        fetch(url, {
            method: 'GET'
        }).then(response => response.text()).then(text => {
            // document.getElementById('responseText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }
    else{
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: data,  
        }).then(response => response.text()).then(text => {
            // document.getElementById('responseText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }


});