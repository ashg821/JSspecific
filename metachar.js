let string = "The thirty-three thieves -thought that 9they thrilled the throne throutheghout ThursDay. Imagine an imaginary menagerie manager imagining managing an imaginary menagerie victoryyyyyyyyyyy putput.";
// let reg = /The/;
// reg = /^The/;             //^ indicates that if the tring starts with the given regular expression
// reg = /rie$/;             //$ indicated that if the srting ends with the given regular expression
// reg = /man.ger/;          //. indicated that there is only one character in place of . that can fit in the regular expression

// reg = /victory*/g;           // The n* quantifier matches any string that contains zero or more occurrences of n. 

// reg = /thouge?ht/;            //The n? quantifier matches any string that contains zero or one occurrences of n.
//If you want a symbol which is normally not considered a part of the string when given as it is, you can use \ prior to the symbol to make it a part of the pattern

// Character sets
// reg = /Thurs[a-zA-Z]ay/;         //if you want that character to be any one of the characters then you can write it as [cbsgf], also you can have any number of character sets in a pattern, also you can you these for numbers, also we can use ^ to perform not of[]
// reg = /imagi[^n]e/i;         //finding a not[schgkg]

//quantifiers
// reg = /thril{2}ed/;           //The n{X} quantifier matches any string that contains a sequence of X n's. X must be a number.

// reg = /thril{0,2}ed/;         //The n{X,Y} quantifier matches any string that contains a sequence of X to Y n's. X and Y must be a number.

//grouping: it is achieved by using parenthesis 
reg = /(\w+)/;

//more meta-characters
// reg = /th\wt/;                //The \w metacharacter matches word characters. A word character is a character a-z, A-Z, 0-9, including _ (underscore).

// reg = /\w+e{2}/;             //\w+ means that it searches for one or more characters whereas \w means only one character

// reg = /\W+thought/;                  //The \W metacharacter matches non-word characters: A word character is a character a-z, A-Z, 0-9, including _ (underscore).

// reg = /\dthey/;               //The \d metacharacter matches digits from 0 to 9.

// reg = /\D+out/;           //The \D metacharacter matches non-digit characters.

// reg = /\s\dthey/;             //The \s metacharacter matches whitespace character.

/*Whitespace characters can be:

A space character
A tab character
A carriage return character
A new line character
A vertical tab character
A form feed character*/

// reg=/\Sthought/;            //The \S metacharacter matches non-whitespace characters.

// reg=/the\b/;            //The \b metacharacter matches at the beginning or end of a word.

// reg=/thri(?=l)/;        //The ?=n quantifier matches any string that is followed by a specific string n.

let execResult = reg.exec(string);
if (execResult != null) console.log(execResult);
else console.log("Null was returned");


let testResult = reg.test(string);
// console.log(testResult);
if (testResult) console.log(`Pattern found in the string according to the given conditions at index ${execResult.index}`);
else console.log("No match found");
