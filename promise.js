let prom=new Promise(function(resolve,reject){
    let error=true;
    setTimeout(() => {
        if(error==true){
            reject("Some error occured, unable to run the code.");
        }
        else resolve("There was no error and the code was run successfully.");
    }, 2000);
});

prom.then(function(str){
    console.log(str);
}).catch(function(str){
    console.log(str);
})