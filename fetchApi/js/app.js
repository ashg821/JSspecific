let mBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

//simple fetch api for get request to fetch data from a stored txt file
/*function getData(){
    let url='ash.txt';
    fetch(url).then(response=>response.text()).then(data=>{ console.log(data);});
}*/

//fetch api for a get request through a external link which has a json formatted data
function getData() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url).then(response => response.json()).then(data => { console.log(data); });
}

function postData() {
    let data = `{
        "id": 9978,
        "name": "Sri Lankan Airways",
        "country": "Sri Lanka",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
        "slogan": "From Sri Lanka",
        "head_quaters": "Katunayake, Sri Lanka",
        "website": "www.srilankaairways.com",
        "established": "1990"
    }`;

    let params = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: data
    }
    const url = 'https://api.instantwebtools.net/v1/airlines';
    fetch(url, params).then(response => response.json())
        .then(data => console.log(data));

}

getData();
// postData();
