


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

// let text = "hello how are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)
// console.log(myArray[3])


// if ...else

// const hour = new Date().getHours(); 
// let greeting;
// if (hour < 10) {
//     greeting = "Good morning";
// }
// else if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// console.log(greeting)

// *SWITCH into IF

// switch (browser) {
//     case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//     default:
//     alert( 'We hope that this page looks ok!' );
// }

// To precisely match the functionality of switch, the if must use a strict comparison '==='.
// For given strings though, a simple '==' works too.


// let browser;
// if (browser == "Edge") {
//     alert("You've got the Edge");
// }
// else if (browser == "Chrome" 
//     || browser == "Firefox" 
//     || browser == "Safari"
//     || browser == "Opera") {
//         alert("Okay we support these browsers too");
// }
// else {
//     alert('We hope that this page looks ok!');
// }

// *IF into SWITCH

// let a = +prompt('a?', '');
// if (a == 0) {
// alert( 0 );
// }
// if (a == 1) {
// alert( 1 );
// }

// if (a == 2 || a == 3) {
// alert( '2,3' );
// }

let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
    break;
    case 1:
        alert(1);
    break;
    case 2:
    case 3:
        alert('2,3');
    break; // Please note: the break at the bottom is not required. But we put it to make the code future-proof.
    default:
}

