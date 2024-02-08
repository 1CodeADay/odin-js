


// const string = "The revolution will not be televised.";
// console.log(string);


// ..................
// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

// const badString = string;
// console.log(badString);

// ..............
// const single = 'Single quotes';
// const double = "Double quotes";
// const backtick = `Backtick`;

// console.log(single);
// console.log(double);
// console.log(backtick);

// ....................
// const badQuotes = 'This is not allowed!";

// ...............
// const one = "Hello, ";
// const two = "How are you?";
// const joined = `${one}${two}`;
// console.log(joined);

// ..................
// const bigmouth = 'I\'ve got no right to take my place…';
// console.log(bigmouth);

// JavaScript String Length
// let text = "abcde fghij klmno pqrst uvwxyz";
// let length = text.length
// console.log(length);

// Extracting String Characters
// let text = "HELLO WORLD";
// let char = text.charAt(3);
// console.log(char);

// let text = "HELLO WORLD";
// let char = text.charCodeAt(3);
// console.log(char);


// const name = "W3Schools";
// let letter = name.at(2);
// console.log(letter);

// from the last character
// const name = "W3Schools";
// let letter = name.at(-1);
// console.log(letter);


// let text = "HELLO WORLD";
// let char = text[0];
// console.log(char);

// Extracting String Parts
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part)

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 9);

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-4);

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2)

// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();

// console.log(text1.length);
// console.log(text2.length);


// let text = "5";
// let padded = text.padEnd(4,"x");

// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4,"0");

// let text = "Hello world!";
// let result = text.repeat(10);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");

let text = "hello how are you doing today?";
const myArray = text.split(" ");
console.log(myArray)
console.log(myArray[3])
