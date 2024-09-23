//valueOf()
let m=123;
console.log(m.valueOf());
console.log((123).valueOf());

//toLocalString()
let n = 1234567789356.89;
console.log(n.toLocaleString());

//toExponential()
var k=974859;
console.log(k.toExponential(10));


// isNaN  console true if the value is not a number.
console.log(isNaN('hello')); 
console.log(isNaN(11));

//Number.isInteger()
var h="hellow"
var h1=234
console.log(Number.isInteger(h));
console.log(Number.isInteger(h1));

//Number.parseInt()
var i="hellow"
var i1=123.564
console.log(Number.parseInt(i));
console.log(Number.parseInt(i1));

//Number.parseFloat
var j="hello world!"
var j1=123.345
console.log(Number.parseFloat(j));
console.log(Number.parseFloat(j1));

//Number()
var g="24 44";
console.log(typeof g, Number(g)) //22
var g1=24;
console.log(typeof g1 , Number(g1)); //number 24
console.log(Number("22 4")); //Nan
console.log(Number([11])); //11
console.log(Number([11,12])); // Nan
console.log(Number([11.11])); //11.11

//toFixed()
var f=111.111
var f1=f.toFixed(10);
var f2=f.toFixed();
console.log(typeof f,f1);
console.log(typeof f,f2);

//toPrecision()
var e=111.11
var e1=e.toPrecision(10);
console.log(typeof e, e1);

//isFinite()
var d=1234
var d1=Number.isFinite(d);
var d2=isFinite(d);
console.log(typeof d ,d1);
console.log(typeof d ,d2);

//toString()
var a=123
var a1=a.toString();
console.log(typeof a1 ,a);

//parseInt()
var b=12.02
var b1=parseInt(b)
console.log(typeof b ,b1);

//parseFloat()
var c=12.02
var c1=parseFloat(b)
console.log(typeof c,c1)



