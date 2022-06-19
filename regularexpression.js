let reg=/this/ig;        //there are three modifiers i(case-insensitive), g(global search), m(multi-line search)


let string="This is the longest string of all time, and nothing comes close when seeing the massivity of the length if this string, sometimes it may go random in between, you may not understand a thing or two while reading but you have to hold on tight so as to witness the record breaking string in the history of words and letters.";

let execResult=reg.exec(string);        //regular expression search method which returns an array including a set of properties or null in case of no match found
// console.log(execResult);


let testResult=reg.test(string);        //another regular expression search method which returns true or false
// console.log(testResult);

let matchResult=string.match(reg);      //unlike the above two methods, it is a string search method but returns same array like exec() or null in case of no math found
// console.log(matchResult);

let searchResult= string.search(reg);       //string search method that returns the first index of occurence or -1
// console.log(searchResult);

let replacedResult=string.replace(reg, "'the'");
console.log(replacedResult);