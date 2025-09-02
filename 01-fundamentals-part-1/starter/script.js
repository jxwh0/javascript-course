// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("GUMANA KA PLS");


// console.log("=== VARIABLES ===");

// let firstname = "Jehu";
// console.log(firstname);

// let age= 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 2005;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job ="programmer";
// job = "teacher";
// console.log(job);

// let lastName = "Gipaya"

// console.log("=== DATA TYPES ===");

// age = 24;
// console.log(age);
// console.log(typeof age);

// //string
// let username ="jxwho";
// console.log(username);
// console.log(typeof username);

// //Boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// //dynamic variable
// let dynamicVariabale = 23;
// console.log(dynamicVariabale, typeof dynamicVariabale);

// // Change into string
// dynamicVariable = "NOw I'm a string";
// console.log(dynamicVariabale, typeof dynamicVariabale);

// // Change into a boolean
// dynamicVariabale = true;
// console.log(dynamicVariabale, typeof dynamicVariabale);

//Basic Operators - Math Operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

const firstName =  "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);
console.log("Hello" + "World" + "!");
console.log("I am " + 25 + " years old");

//Assignment Operators
console.log("=== ASSIGNEMNT OPERATORS ===");

let x = 10 + 5;
console.log("x starts as:", x);

x +=10;
console.log("After x += 10:", x);

x *= 4; 
console.log("After x *= 4:", x);

x /= 2; 
console.log("After x /= 2:", x);

x++; 
console.log("After x++:", x);

x--; 
x--; 
console.log("After x-- twice:", x);

/////
console.log("=== COMPARISON OPERATORS ===");

console.log("Age Comparison");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

////
const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder);

console.log("Complex comparison");
console.log(now - 1991 > now - 2018);

let zx, y; 'Doe'
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Your code here:
// 1. Calculate BMIs
const markBMI = (massMark / heightMark ** 2);
const johnBMI = (massJohn / heightJohn ** 2);
console.log(markBMI);
console.log(johnBMI);
// 2. Create markHigherBMI variable
const markHigherBMI = markBMI > johnBMI;
// 3. Log results to console
console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);
console.log("Mark has a higher BMI", markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
const firstNamee = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

console.log(`Just a regular string...`);

const inputYear = "1991";
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

console.log("I'm " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

console.log('18' === 18);
console.log('18' == 18); 
console.log(18 === 18);

console.log('0' == 0)
console.log(0 == false);
console.log('0' == false);
console.log(null == undefined);

console.log('' == 0);
console.log('   ' == 0);

const favourite = Number(("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
}
else if (favourite === 7) {
  console.log("7 is also a cool number");
} 
else if (favourite === 9) {
  console.log("9 is also a cool number");
}
else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");


// logical operators  
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log('AND OPERATOR: ${hasDriversLicense && hasGoodVision}');// true   
console.log('OR OPERATOR: ${hasDriversLicense || hasGoodVision}');// true
console.log('NOT OPERATOR: ${!hasDriversLicense}');// false

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);// true

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Jehu is able to drive!");
}
else {
  console.log("Someone else should drive...");
}agee = 20;
const hasPermission = true;
const hasExperience = true;

if (age >= 18 && hasPermission && hasExperience) {
  console.log('Approved to drive');
} else {
  console.log('Not approved to drive');
}

console.log('Age 20, permission true, experience false', (age >= 18 && hasPermission && false));

// Club Entry System
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

function checkEntry(age, hasID, isVIP) {
  if ((age >= 21 && hasID) || isVIP) {
    console.log(`Age: ${age}, hasID: ${hasID}, isVIP: ${isVIP} → Welcome to the club!`);
  } else {
    console.log(`Age: ${age}, hasID: ${hasID}, isVIP: ${isVIP} → Sorry, you cannot enter`);
  }
}

checkEntry(19, true, false);   // too young, not VIP
checkEntry(22, true, false);   // old enough + ID
checkEntry(22, false, false);  // old enough but no ID
checkEntry(19, false, true);   // VIP override
checkEntry(25, false, true);   // VIP works regardless of ID
checkEntry(20, true, false);   // not 21 yet

const Age = 17;

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}  
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// Test data
const bill = 275; 
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
const total = bill + tip;

// Output
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
