// Replace() method
let str = "I love Microsoft & Microsoft";
let newStr = str.replace(/Microsoft/g, "Chrome");
console.log(str);
console.log(newStr);
let uppercase = str.toUpperCase();
let lowerease = str.toLowerCase();
console.log(uppercase);
console.log(lowerease);

// concat()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// trim
let names = "       Jobbar  Ali     ";
let trimName = names.trim();
console.log(trimName);


// converting string to array
let message = "Hello world";
let messageArray = message.split(" ");
let messageArray2 = message.split("");
console.log(messageArray);
console.log(messageArray2);