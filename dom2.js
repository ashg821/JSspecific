console.log("hey we are live");

const elem=document.createElement('li');
const elem1=document.createElement('li');
const text=document.createTextNode(' Ashwani is a good boy');           //creates a text string and afterward you can use the appendChild to addd to any existing element
elem.innerHTML="<b>List-5</b>";
elem1.innerHTML="<b>Replacement of List-5</b>";
elem.className="list";
elem1.className="list";
ul=document.getElementById("ul");
ul.setAttribute('style','list-style-type:square');          //it adds an attribute to an already created element
ul.appendChild(elem);                                   //it adds a childnode to a parentnode
elem.appendChild(text);
elem.replaceWith(elem1);                            //it replaces an element with a new element in the DOM

ul.replaceChild(elem,elem1);                        //it replaces a child node element of a parentnode with a new element. Second argument should be a existing childnode

ul.removeChild(elem);                               //if you want to remove a childnode from the parent node

const input= document.getElementById("demotext");
console.log(input.getAttribute("id"));
console.log(input.hasAttribute("id"));
input.removeAttribute('name');