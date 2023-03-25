let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));
console.log(str.lastIndexOf("locate"));


console.log(str.indexOf("locate", 20));
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("ain");
console.log(result);
let text2 = "The rain in SPAIN stays mainly in the plain";
let result2 = text2.match(/ain/g);
console.log(result2.length,result2)

let text3 = "The rain in SPAIN stays mainly in the plain";
const myArr = text3.match(/ain/g);
console.log(myArr);