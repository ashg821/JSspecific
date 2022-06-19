let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the button");
    //instantiating a Xhr object
    let xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET','ash.txt', true);
    
    //use this for post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json')
    
    //what to do when the request is under process(optional)
    xhr.onprogress = function () {
        console.log('on progress');
    }
    
    xhr.onreadystatechange = function () {
        console.log("the state is", xhr.readyState);
    }
    //what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) console.log(this.responseText);
        else console.log('Some error occured');
    }
    let params = `{"name":"test123","salary":"123","age":"23"}`
    xhr.send(params);
}

let popBtn = document.getElementById('popBtn');

popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log("You have clicked the pop button");
    //instantiating a Xhr object
    let xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees', true);
    
    //use this for post request
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('Content-type', 'application/json')
    
    //what to do when the request is under process(optional)
    // xhr.onprogress = function () {
    //     console.log('on progress');
    // }
    
    // xhr.onreadystatechange = function () {
    //     console.log("the state is", xhr.readyState);
    // }
    //what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200){
            let obj=JSON.parse(this.responseText);
            console.log(obj.data);
            str="";
            let list=document.getElementById('list');
            obj.data.forEach((element)=>{
                str+="id: "+element.id+"&nbsp"+"Name: "+element.employee_name+"&nbsp"+"Salary: "+element.employee_salary+"&nbsp"+"Employee Age: "+element.employee_age+"<br>";
            });
            list.innerHTML=str;
        }
        else console.log('Some error occured');
    }
    // let params = `{"name":"test123","salary":"123","age":"23"}`
    xhr.send();
}