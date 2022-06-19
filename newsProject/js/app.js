//api key: f8d3cd14977d410ab3964f71f868e138


//create a get request using XMLHTTPSRequest object
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e439372a38d34e0ebc02bcb6d631cf7c', true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsAccordion = document.getElementById("newsAccordion");
        let newsHtml = "";

        articles.forEach((element, index) => {
            newsHtml += `<div class="card">
            <div class="card-header" id="heading-${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link collasped" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample${index}" aria-expanded="false" aria-controls="collapseExample">
                        <b>Breaking News: ${index+1}</b> ${element.title}
                    </button>
                </h2>
            </div>
            </div>
            
            
            
            <div class="collapse" id="collapseExample${index}" data-parent="#accordionExample" aria-labelledby="heading${index}">
            <div class="card card-body">
                ${element.content}
                <a href="${element.url}" target="_blank"> Click on the link to read more</a>
            </div>
            </div>`;
        });
        newsAccordion.innerHTML=newsHtml;

    }
    else console.log('Some error occured');
}

xhr.send();