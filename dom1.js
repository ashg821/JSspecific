let child=document.querySelector('#container');
console.log(child.children);                    //childNodes gives you the node list where there will be texts as well as comments and tags, but if you use children property instead it will only give you elements in the form of collection

console.log(child.childNodes[6].nodeName);
console.log(child.childNodes[6].nodeType);          //visit https://www.w3schools.com/jsref/prop_node_nodetype.asp to view all the nodetype with there respective sequence number

console.log(child.children[5].children[0].children);   //you can reach the innermost nested element from the outermost element

console.log(child.firstChild);      //returns the first child of the nodelist produced by childNodes
console.log(child.firstElementChild);       //returns the first child from the children collection

console.log(child.lastChild);      //returns the last child of the nodelist produced by childNodes
console.log(child.lastElementChild);       //returns the last child from the children collection

console.log(child.childElementCount);       //returns the child count in the chilren collection

console.log(child.firstElementChild.nextElementSibling);        //returns the next element sibling of the selected child or element 