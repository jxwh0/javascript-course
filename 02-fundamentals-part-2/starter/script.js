// // console.log("Part 2: Functions ready!");

// // console.log("=== FUNCTIONS ===");
// // function logger() {
// //   console.log("My name is Jehu");
// // }

// // logger();
// // logger();  
// // logger();

// // function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //   return juice;
// // }   
// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // Function Expressions
// // const calcAge = function (birthYear) {
// //   return 2025 - birthYear;
// // };

// // console.log(calcAge(1991));
// // console.log(calcAge(2000));

// // function introduce(firstName, lastName, age) {
// //     const introduction = `hi. I'm ${firstName} ${lastName}, and I'm ${age} years old.`;
// //     return introduction;
// // }

// // console.log(introduce("Jehu", "Gipaya", 20));

// // function yearsUntilRetirement(birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         return`${firstName} retires in ${retirement} years.`;
// //     } else {
// //         return`${firstName} has already retired.`;
// //     }
// // }
// // console.log(yearsUntilRetirement(2000,"Jehu"));

// // //global scope
// // const globalVar = "I am global";

// // function testScope() {
// //     //local scope
// //     const localVar = "I am local";
// //     console.log(globalVar);
// //     console.log(localVar);
// // }
// // testScope();
// // console.log(globalVar);

// // ////////////////////////////////////
// // // Coding Challenge #1

// // // Function to calculate average of 3 scores
// // function calcAverage(score1, score2, score3) {
// //   return (score1 + score2 + score3) / 3;
// // }

// // // Function to check winner
// // function checkWinner(avgDolphins, avgKoalas) {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     return `🏆 Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// //   } else if (avgKoalas >= 2 * avgDolphins) {
// //     return `🏆 Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// //   } else {
// //     return `No team wins... (Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`;
// //   }
// // }

// // // Test Data 1
// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Test Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const friends = ["Chaious", "Robert", "Masangkay"];
// console.log(friends);

// const mixed = ["Jehu", 20, false, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);

// console.log(friends.length);

// friends[2] = "Jay";
// console.log(friends);

// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const ages = [calcAge(1991), calcAge(2000), calcAge(1969)];
// console.log(ages);

// const newlength = friends.push("John");
// console.log(friends);
// console.log(newlength);

// friends.unshift("Mary");
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Robert"));
// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Robert"));
// console.log(friends.includes("Bob"));

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// friends.forEach(
//   function(friend, index) {
//     console.log(`${index + 1}: ${friend}`);
//   });

//   friends.forEach( 
//     (friend, index) =>{
//       console.log(`${index + 1}: ${friend}`);
//     });

// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//   total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed (2)}`);

// let passedCount = 0;
// grades2.forEach(grade => {
//   if (grade >= 70) passedCount++;
// }); 

// console.log(`Number of students who passed: ${passedCount}`);

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(arr) {
//   let sum = 0;
//   for (let grade of arr) {
//     sum += grade;
//   }
//   return sum / arr.length;
// }

// // Function to find highest grade
// function findHighestGrade(arr) {
//   let highest = arr[0];
//   for (let grade of arr) {
//     if (grade > highest) {
//       highest = grade;
//     }
//   }
//   return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(arr) {
//   let lowest = arr[0];
//   for (let grade of arr) {
//     if (grade < lowest) {
//       lowest = grade;
//     }
//   }
//   return lowest;
// }

// // Function to count passing students
// function countPassing(arr, passingGrade) {
//   let count = 0;
//   for (let grade of arr) {
//     if (grade >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// // Generate complete report
// const average3 = calculateAverage(grades3);
// const highest3 = findHighestGrade(grades3);
// const lowest3 = findLowestGrade(grades3);
// const passing3 = countPassing(grades3, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average3.toFixed(2)}`);
// console.log(`Highest: ${highest3}`);
// console.log(`Lowest: ${lowest3}`);
// console.log(`Passing students: ${passing3} out of ${grades3.length}`);

// //////

// const jehuArray = [
// "Jehu", 
// "Gipaya", 
// 2025 - 2005,
// "teacher",
// ["Chaious", "Robert", "Masangkay"],
// true
// ];

// console.log(jehuArray[0]);
// console.log(jehuArray[1]);

// const jehuObject = {
//   firstName: "Jehu",
//   lastName: "Gipaya",
//   age: 2025 - 2005,
//   job: "teacher",
//   friends: ["Chaious", "Robert", "Masangkay"],
// };

// console.log(jehuObject);

// ////

// console.log(jehuObject["lastName"]);
// console.log(jehuObject["age"]);

// const nameKey = "Name";
// console.log(jehuObject["first" + nameKey]);


// jehuObject.job = "programmer";
// jehuObject["age"] = 30;
// console.log(jehuObject);

// jehuObject.location = "Philippines";
// jehuObject["twitter"] = "@jehugipaya";
// jehuObject.hasDriversLicense = true;
// console.log(jehuObject);

// const property = "job";
// console.log(jehuObject[property]);

// //
// const listOfYears = [1991,1984,2008,2020];
// const shoppingList = ["apples", "bannas", "milk", "bread"];
// const testScores = [85,92,78,96];

// //

// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// }

//   const student = {
//     name: "Sarah",
//     grades: [85,92,78],
//     adress:{
//     street: "123 Main St",
//     city: "New York",
//   }
//   };

// console.log (student.grades[0]);
// console.log (student.adress.city);

// const john = {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1990,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function( birthYear) {
//     return 2025 - birthYear;
//   },
// }; 
// console.log(john.calcAge(2000));

// //

//  const johnImproved = {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1995,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function() {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },  

//   getsummary: function() {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job},
//     and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   }
//   };
//  console.log(johnImproved.calcAge());
//  console.log(johnImproved.age);
//  console.log(johnImproved.getsummary());

//  //////////////////////////////////

// const bankAccount = {
//   owner: "Jehu Gipaya",
//   movements: [200, -100, 340, -300, -20, 50, 400, -460],
//   interestRate: 1.2,
//   pin: 1111,

//   calcBalance: function() {
//     this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
//     return this.balance;
//   },

//   deposit: function(amount) {
//     this.movements.push(amount);
//     this.calcBalance();
//   },
//   withdraw: function(amount) {
//     this.movements.push(-amount);
//     this.calcBalance();
//   },

//   getStatement: function() {
//     return ` ${this.owner}'s account balance: ${this.calcBalance()}`;
//   }
// };

// console.log(bankAccount.getStatement());
// bankAccount.deposit(500);
// console.log(bankAccount.getStatement());

// /////
// ////////////////////////////////////
// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   // Add friend method
//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//     return this.friends.length;
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     return this.friends.filter(friend => friend.status === "active").length;
//   },

//   // Toggle active status
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // Generate profile summary
//   getSummary: function () {
//     this.calcAge(); // Ensure age is always updated
//     return `
// Profile Summary
// ----------------------------
// Name: ${this.firstName} ${this.lastName}
// Age: ${this.age}
// Location: ${this.location}
// Status: ${this.isActive ? "Online " : "Offline "}
// Interests: ${this.interests.join(", ")}
// Friends: ${this.friends.length} total (${this.getActiveFriends()} active)
//     `;
//   },
// };

// // Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

//4th
