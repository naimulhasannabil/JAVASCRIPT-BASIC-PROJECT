let Num1 = prompt("Enter first number");
let Num2 = prompt("Enter second number");

Num1 = parseInt(Num1);
Num2 = parseInt(Num2);

const Result1 = Num1 + Num2;
const Result2 = Num1 - Num2;
const Result3 = Num1 * Num2;
const Result4 = Num1 / Num2;
const Result5 = Num1 % Num2;

document.write("After Adding: "  + Result1 + "<br>");
document.write("After Substracting: " + Result2 + "<br>");
document.write("After Multiplication: " + Result3 + "<br>");
document.write("After Division: " + Result4 + "<br>");
document.write("After Modulus: " + Result5 + "<br>");
