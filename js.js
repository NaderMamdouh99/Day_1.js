alert("Wellcon to my site");
var wellcomToPage = prompt("Welcone to my site", "Enter your name");
document.write(
  `<h1 style="text-align: center;background: aqua;color: black;">Wellcom ${wellcomToPage}</h1>`
);

var FirstNumber = prompt("Enter your First Number for Calculate");
var SecondNumber = prompt("Enter your Second Number for Calculate");
console.log(+FirstNumber + +SecondNumber);

var temprature = prompt("Enter today’s temperature");
parseInt(temprature) >= 30
  ? document.write("<br> HOT!")
  : document.write("<br> COLD!");

var actualFeel = prompt("Enter Your Actual Feel");

if (
  parseInt(temprature) >= 25 &&
  parseInt(actualFeel) >= 25 &&
  parseInt(temprature) < 30 &&
  parseInt(actualFeel) < 30
) {
  document.write("<br> Normal");
} else if (parseInt(temprature) < 25 && parseInt(actualFeel) < 25) {
  document.write("<br> Cold");
} else if (parseInt(temprature) > 30 && parseInt(actualFeel) > 30) {
  document.write("<br> Hot");
} else {
  document.write("<br> Ambiguous");
}

var takesStudentfaculty = prompt("enter your faculty");
switch (takesStudentfaculty) {
  case "engineering":
    document.write("<p>You are eligible to Network and Embedded tracks</p>");
    break;
  case "fci":
    document.write("<p>You are eligible to Programing tracks</p>");
    break;
  case "Commerce":
    document.write("<p>You are eligible to ERP and Social media tracks</p>");
    break;
  default:
    document.write("<p>You are eligible to SW fundamentals track</p>");
    break;
}

var firstnumber = prompt("Enter your first number ");
var secondnumber = prompt("Enter your second number ");

for (let i = firstnumber; i <= secondnumber; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
function calculateExpression() {
  var expression = prompt("Enter a math expression (Ex. 3+4*5/10*8):");
  var result = eval(expression);
  alert(`You entered: ${expression}, and the result is: ${result}`);
}

var form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = "";
  let birthYear = 0;
  let age = 0;
  while (!name) {
    name = prompt("Enter your name:");
    if (!name || !isNaN(name)) {
      name = "";
    }
  }
  while (!birthYear) {
    birthYear = parseInt(
      prompt("Enter your birth year (between 1900 and 2009):"),
      10
    );
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > 2009) {
      birthYear = 0;
    }
  }
  age = new Date().getFullYear() - birthYear;
  var output = `Name: ${name}<br>Birth year: ${birthYear}<br>Age: ${age}`;
  document.body.innerHTML = output;
});
