// JAVASCRIPT OBJECTS

// -------------------- Chapter 1: "ALERTS" --------------------
/*
// Exercise 1
alert("Hi there!");

// Exercise 2
alert("Error! Please enter a valid password.");

// Exercise 3
alert("Welcome to JS Land...\nHappy Coding!");

// Exercise 4
alert("Welcome to JS Land...");
alert("Happy Coding!");
// document.write("<input type='checkbox' onchange='handleChange(this);'> Checkbox.")
// function handleChange(checkbox) {
// if(checkbox. checked == true){
// document. getElementById("submit"). removeAttribute("disabled");
// }else{
// document. getElementById("submit").
// }

// Exercise 5
console.log("Hello... I can run JS through my web browser's console");

// Exercise 6 & 7 (Go to index.html)
*/




// -------------------- Chapter 2: "VARIABLES FOR STRINGS" --------------------
/*
// Exercise 1
var username;

// Exercise 2
var myName = "Farah Syed";

// Exercise 3
// a
var message;

// b
message = "Hello World";

// c
alert(message);

// Exercise 4
var studentName = "John Doe";
var age = "15 years old";
var certification = "Certified Mobile Application Development";
alert(studentName);
alert(age);
alert(certification);

// Exercise 5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// Exercise 6
var email = "farahsyed44@gmail.com";
alert("My email address is" + " " + email);

// Exercise 7
var book = "A smarter way to learn JavaScript";
alert("I'm trying to learn from the Book" + " " + book);

// Exercise 8
document.write("Yah! I can wirte HMTL content through JavaScript<br />");

// Exercise 9
var sym = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(sym);
document.write(sym + "<br />");
*/




// -------------------- Chapter 3: "VARIABLES FOR NUMBERS" --------------------
/*
// Exercise 1
var age = 23;
alert("I am" + " " + age + " " + "years old");

// Exercise 2
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}

alert("You have visited this site" + " " + visitCount + " " + "time(s)");

// Exercise 3
var birthYear = 1990;
document.write("My birth year is" + " " + birthYear + "<br />Data type of my declared variable is number<br />");

// Exercise 4
var visitorName = prompt("Enter your full name", "John Doe");
var productTitle = prompt("Enter product title", "T-shirt(s)");
var quantity = prompt("Specify the number of products you want to order", "5");
document.write(visitorName + " " + "ordered" + " " + quantity + " " + productTitle + " " + "on XYZ-Clothing store<br />");
*/




// -------------------- Chapter 4: "VARIABLE NAMES: LEGAL & ILLEGAL" --------------------
/*
// Exercise 1
var a = 2, b = 4, c = 6;
// OR
var step1 = "HTML",
  step2 = "CSS",
  step3 = "JavaScript";

// Exercise 2
// 5 Legal variable names:
var fullName;
var age;
var $email;
var contact1;
var _myVar;

// 5 Illegal variable names:
// var Full name;
// var My-age;
// var My.email;
// var 1Contact;
// var var;


// Exercise 3
document.write("<h1>“Rules for naming JS variables”</h1><p>Variable names can only contain numbers, $ and _. For example $my_1stVariable<br />Variables must begin with a letter, $ or _. For example $name, _name or name<br />Variable names are case sensitive<br />Variable names should not be JS keywords</p>");
*/




// -------------------- Chapter 5: "MATH EXPRESSIONS" --------------------
/*
// Exercise 1
var num1 = +prompt("Enter first number");
var opt = prompt("Specify an operator");
var num2 = +prompt("Enter second number");

if (isNaN(num1) || isNaN(num2)) {
  document.write("Please type a number to perform Mathematical operation<br /><br />");
}
else if (opt === "+") {
  var result = num1 + num2;
  document.write("Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result + "<br /><br />");
}

// Exercise 2
else if (opt === "-") {
  var result = num1 - num2;
  document.write("Subtraction of" + " " + num2 + " " + "from" + " " + num1 + ", " + "is" + " " + result + "<br /><br />");
}
else if (opt === "*") {
  var result = num1 * num2;
  document.write("Multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result + "<br /><br />");
}
else if (opt === "/") {
  var result = num1 / num2;
  document.write("Division of" + " " + num1 + " " + "by" + " " + num2 + " " + "is" + " " + result + "<br /><br />");
}
else if (opt === "%") {
  var result = num1 % num2;
  document.write("Modulus of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result + "<br /><br />");
}
else {
  document.write("Mathematical operation cannot be performed!<br /><br />");
}

// Exercise 3
var num;
document.write("Value after variable declaration is:" + " " + num + "<br />");

var num = 2;
document.write("Initial value:" + " " + num + "<br />");

var num = ++num;
document.write("Value after increment is:" + " " + num + "<br />");

var num = 7 + num;
document.write("Value after addition is:" + " " + num + "<br />");

var num = --num;
document.write("Value after decrement is:" + " " + num + "<br />");

var result = num % 3;
document.write("Output: the remainder is:" + " " + result + "<br /><br />");

// Exercise 4
var ticket = 600;
document.write("Total cost to buy a movie ticket is:" + " " + 5 * ticket + " " + "PKR<br /><br />");

// Exercise 5
var tableOf = 2;
document.write("<h1>Table of " + tableOf + " " + "</h1><br />" + tableOf + " x 1 =" + " " + tableOf + "<br />" + tableOf + " x 2 =" + " " + tableOf * 2 + "<br />" + tableOf + " x 3 =" + " " + tableOf * 3 + "<br />" + tableOf + " x 4 =" + " " + tableOf * 4 + "<br />" + tableOf + " x 5 =" + " " + tableOf * 5 + "<br />" + tableOf + " x 6 =" + " " + tableOf * 6 + "<br />" + tableOf + " x 7 =" + " " + tableOf * 7 + "<br />" + tableOf + " x 8 =" + " " + tableOf * 8 + "<br />" + tableOf + " x 9 =" + " " + tableOf * 9 + "<br />" + tableOf + " x 10 =" + " " + tableOf * 10 + "<br /><br />");

// Exercise 6
var c = 32; //°
f = (c * 9 / 5) + 32;
document.write(c + "°C is" + " " + f + "°F<br />");

var f = 32;
c = (f - 32) * 5 / 9;
document.write(f + "°F is" + " " + c + "°C<br /><br />");

// Exercise 7
var item1Price = 500;
var item2Price = 700;
var item1Quantity = 5;
var item2Quantity = 4;
var shippingCharges = 100;
var total = item1Price * item1Quantity + item2Price * item2Quantity + shippingCharges;
// var total = 500 * 5 + 700 * 4 + 100;

document.write("<h1>Shopping Cart</h1>" + "Price of item 1 is" + " " + item1Price + "<br />" + "Quantity of item 1 is" + " " + item1Quantity + "<br />" + "Price of item 2 is" + " " + item2Price + "<br />" + "Quantity of item 2 is" + " " + item2Quantity + "<br />" + "Shipping charges" + " " + shippingCharges + "<br /><br />Total cost of your order is" + " " + total + " PKR<br /> <br />");

// Exercise 8
var totalMarks = 900;
var marksObtained = 850;
var percent = (marksObtained / totalMarks) * 100
document.write("<h1>Mark Sheet</h1>" + "Total Marks:" + " " + totalMarks + "<br />Marks Obtained:" + " " + marksObtained + "<br />Percentage:" + " " + percent + "%<br /><br />");

// Exercise 9
// 1 U.S. Dollar(USD) into PKR
var usd = 104.80;

// 1 Saudi Arabian Riyal(SAR) into PKR
var sar = 28;

var total = usd * 10 + sar * 25;
document.write("<h1>Currency in PKR</h1>" + "Total Currency in PKR:" + " " + total + "<br /><br />");

// Exercise 10
var num = 10;
document.write(((5 + num) * 10) / 2 + "<br /><br />");

// Exercise 11
var currentYear = 2022;
var birthYear = 1996;
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1>" + "Current Year:" + " " + currentYear + "<br />Birth Year:" + " " + birthYear + "<br />Your age is:" + " " + age + " " + "years<br /><br />");

// Exercise 12
var r = 20;
var π = 3.142;
var C = 2 * π * r;
var A = π * Math.pow(r, 2);
document.write("<h1>The Geometrizer</h1>" + "Radius of a circle:" + " " + r + "<br />The circumference is:" + " " + C + "<br />The area is:" + " " + A + "<br /><br />");

// Exercise 13
var snack = "Croissant";
var age = 23;
var maxAge = 25;
var amountPerDay = 1;
var snacksForLife = (maxAge - age) * (amountPerDay * 365)
document.write("<h1>The Lifetime Supply Calculator</h1>" + "Favorite Snack:" + " " + snack + "<br />Current Age:" + " " + age + "<br />Estimated Maximum Age:" + " " + maxAge + "<br />Amount of Snacks per day:" + " " + amountPerDay + "<br />You will need" + " " + snacksForLife + " " + snack + "s " + "to last you until ripe old age of" + " " + maxAge + "<br /><br /><br />");
*/




// -------------------- Chapter 6-9: "MATH EXPRESSIONS" --------------------
/*
// Exercise 1
var a = 10;
document.write("Result:<br />The value of a is" + " " + a + "<br /><br /> The value of ++a is:" + " " + ++a + "<br />Now the value of a is:" + " " + a + "<br /><br />The value of a++ is:" + " " + a++ + "<br />Now the value of a is:" + " " + a + "<br/ ><br />The value of --a is:" + " " + --a + "<br />Now the value of a is:" + " " + a + "<br /><br />The value of a-- is:" + " " + a-- + "<br />Now the value of a is:" + " " + a + "<br /><br />");

// Exercise 2
var a = 2;
var b = 1;
var result = --a;
document.write("a is" + " " + a + "<br />b is" + " " + b + "<br />result is" + " " + result + "<br /><br />");
var result = --a - --b;
document.write("a is" + " " + a + "<br />b is" + " " + b + "<br />result is" + " " + result + "<br /><br />");
var result = --a - --b + ++b;
document.write("a is" + " " + a + "<br />b is" + " " + b + "<br />result is" + " " + result + "<br /><br />");
var result = --a - --b + ++b + b--
document.write("a is" + " " + a + "<br />b is" + " " + b + "<br />result is" + " " + result + "<br /><br />");

// Exercise 3
var username = prompt("Enter your name")
alert("Hi" + " " + username + "!")

// Exercise 5
var tableOf = prompt(username + ", Please enter a number to display multiplication table", "5");
document.write("<h1>Table of " + tableOf + " " + "</h1>" + tableOf + " x 1 =" + " " + tableOf + "<br />" + tableOf + " x 2 =" + " " + tableOf * 2 + "<br />" + tableOf + " x 3 =" + " " + tableOf * 3 + "<br />" + tableOf + " x 4 =" + " " + tableOf * 4 + "<br />" + tableOf + " x 5 =" + " " + tableOf * 5 + "<br />" + tableOf + " x 6 =" + " " + tableOf * 6 + "<br />" + tableOf + " x 7 =" + " " + tableOf * 7 + "<br />" + tableOf + " x 8 =" + " " + tableOf * 8 + "<br />" + tableOf + " x 9 =" + " " + tableOf * 9 + "<br />" + tableOf + " x 10 =" + " " + tableOf * 10 + "<br /><br />");

// Exercise 6
var subject1 = prompt("Enter a subject name");
var subject2 = prompt("Enter another subject name");
var subject3 = prompt("Enter a last subject name");
var totalInEach = 100;
var totalMarks = 300;

var sub1Marks = +prompt("Enter obtained marks in" + " " + subject1);
var sub2Marks = +prompt("Enter obtained marks in" + " " + subject2);
var sub3Marks = +prompt("Enter obtained marks in" + " " + subject3);

var percentInSub1 = (sub1Marks / totalInEach) * 100;
var percentInSub2 = (sub2Marks / totalInEach) * 100;
var percentInSub3 = (sub3Marks / totalInEach) * 100;

var obtainedMarks = sub1Marks + sub2Marks + sub3Marks;
var percent = (obtainedMarks / totalMarks) * 100;

document.write("<table><thead><tr><td>Subject</td><td>Total Marks</td><td>Obatained Marks</td><td>Percentage</td></tr></thead><tbody><tr><td>" + subject1 + "</td><td>" + totalInEach + "</td><td>" + sub1Marks + "</td><td>" + percentInSub1 + "%</td></tr><tr><td>" + subject2 + "</td><td>" + totalInEach + "</td><td>" + sub2Marks + "</td><td>" + percentInSub2 + "%</td></tr><tr><td>" + subject3 + "</td><td>" + totalInEach + "</td><td>" + sub2Marks + "</td><td>" + percentInSub2 + "%</td></tr></tbody><tfoot><tr><td></td><td>" + totalMarks + "</td><td>" + obtainedMarks + "</td><td>" + percent + " " + "%</td></tr></tfoot></table>");
*/




// -------------------- Chapter 9-11: "USER INPUT & CONDITIONAL STATEMENT" --------------------
/*
// Exercise 1
var city = prompt("Enter a city name", "Karachi");

if (city == "Karachi") {
  alert("Welcome to the city of lights")
} else {
  alert("Welcome to" + " " + city);
};

// Exercise 2
var gender = prompt("Gender");

if (gender === "Male" || gender === "male") {
  alert("Good Morning, Sir");
}
else if (gender === "Female" || gender === "female") {
  alert("Good Morning, Ma'am");
}
else {
  alert("The value you entered is not valid");
}

// Exercise 3
var red = "Must Stop";
var yellow = "Ready to Move";
var green = "Move now";

var SignalColor = prompt("Enter a color of road traffic signal");

if (SignalColor === "Red" || SignalColor === "red") {
  alert(red);
}
else if (SignalColor === "Yellow" || SignalColor === "yellow") {
  alert(yellow);
}
else if (SignalColor === "Green" || SignalColor === "green") {
  alert(green);
}
else {
  alert("Invalid Entry! Please Try again");
}

// Exercise 4
var fuelInCar = prompt("How many Litres of fuel is left in your car", "0.2");

if (fuelInCar < 0.25) {
  alert("Please refill the fuel in your car");
}
else {
  alert("No need to refill the fuel now");
}

// Exercise 5
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true"); //Displayed
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");  //Not displayed
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true"); //Displayed
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true"); //Displayed
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals" + " " + totalCost);   //Displayed
}

if (true) {
  alert("True"); //Displayed
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat"); //Displayed
}

// Exercise 6
var marksObtainedInSub1 = +prompt("Marks Obtained in Subject 1 out of 100");
var marksObtainedInSub2 = +prompt("Marks Obtained in Subject 2 out of 100");
var marksObtainedInSub3 = +prompt("Marks Obtained in Subject 3 out of 100");

var totalMarks = 300;
var marksObtained = marksObtainedInSub1 + marksObtainedInSub2 + marksObtainedInSub3;

if (marksObtainedInSub1 < 100.1 && marksObtainedInSub2 < 100.1 && marksObtainedInSub3 < 100.1) {
  var percentage = (marksObtained / totalMarks) * 100;
}
else {
  alert("Calculation cannot be performed! Enter marks within the total marks")
}

var grade;
var remarks;

if (percentage > 80 || percentage === 80) {
  grade = "A-One";
  remarks = "Excellent";
} else if (percentage > 70 || percentage === 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage > 60 || percentage === 60) {
  grade = "B";
  remarks = "You need to improve";
} else if (percentage < 60) {
  grade = "Fail";
  remarks = "Sorry";
}
document.write("<h1>Mark Sheet</h1> Total Marks:" + " " + totalMarks + "<br />Marks Obtained:" + " " + marksObtained + "<br />Percentage:" + " " + percentage + "%<br />Grade:" + " " + grade + "<br />Remarks:" + " " + remarks + "<br /><br />");

// Exercise 7
var secretNum = 5;
var userNum = +prompt("Guess the secret number");

if (userNum === secretNum) {
  alert("Bingo! Correct answer");
}
else if (userNum == --secretNum) {
  alert("Close enough to the correct answer");
}
else {
  alert("Better luck next time");
}

// Exercise 8
var num = +prompt("Enter a number to check if it is divisible by 3");

if (num%3 == 0 && num > 2) {
  alert("Yes," + " " + num + " " + "is divisible by 3");
}
else {
  alert("No," + " " + num + " " + "is not divisible by 3");
}

// Exercise 9
var n = +prompt("Enter a number to check if it is even or odd");

if (n%2 == 0) {
  alert(n + " " + "is an even number");
}
else if (!n%2 == 0) {
  alert(n + " " + "is an odd number")
}
else {
  alert("Please enter a number")
}

// Exercise 10
var temp = +prompt("Enter the current temperature of your city");

if (temp > 40) {
  alert("It is too hot outside.")
}
else if (temp > 30) {
  alert("The weather today is Normal.")
}
else if (temp > 20) {
  alert("Today's weather is cool.")
}
else if (temp > 10) {
  alert("OMG! Today's weather is so Cool.")
}
else if (temp < 10 || temp === 10) {
  alert("Oh! It is cold as ice.")
}
else {
  alert("Please enter a number");
}
// Exercise 11
var num1 = +prompt("First number");
var num2 = +prompt("Second number");
var opt = prompt("Select an Operation (+, -, *, /, %)");

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid data!")
}
else if (opt === "+") {
  var result = num1 + num2;
  alert(result);
}
else if (opt === "-") {
  var result = num1 - num2;
  alert(result);
}
else if (opt === "*") {
  var result = num1 * num2;
  alert(result);
}
else if (opt === "/") {
  var result = num1 / num2;
  alert(result);
}
else if (opt === "%") {
  var result = num1 % num2;
  alert(result);
}
else {
  alert("Please specify an operation!")
}
*/