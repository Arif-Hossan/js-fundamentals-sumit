// toString
let x = 123;
console.log(typeof(x.toString()), x.toString());
console.log((100+23).toString());


// to exponential
let y = 9.8210000000;
console.log(y.toExponential());
console.log(y.toExponential(2));
console.log(y.toExponential(4));
console.log(y.toExponential(6));

// to fixed (working with money)
let z = 2.12453
console.log(z.toFixed());
console.log(z.toFixed(2));
console.log(z.toFixed(3));
console.log(z.toFixed(6));

// toPrecision
let a = 2.12453;
console.log(a.toPrecision());
console.log(a.toPrecision(2));
console.log(a.toPrecision(3));
console.log(a.toPrecision(6));

//Number Method
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number(" 10"));
console.log(Number("10.33"));
console.log(Number(" 10 "));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));

// parseInt
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 30"));
console.log(parseInt("-10"));
console.log(parseInt("10"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 Years"));
console.log(parseInt("Years 10"));

// parseFloat
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 30"));
console.log(parseFloat("-10"));
console.log(parseFloat("10"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 Years"));
console.log(parseFloat("Years 10"));