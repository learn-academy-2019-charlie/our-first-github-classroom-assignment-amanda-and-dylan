// var test = 1 + 1
// console.log(test)
//
// console.log(3.0/2.5)
//
// console.log(33%6)
//
// var testPower = Math.pow(5, 7)
// console.log(testPower)
// console.log(Math.pow(5, 7))
//
// var name = "Amanda"
// console.log(name.length)
// console.log(name.includes("e"))
//
// var a = "hi"
// var b = "there"
// var c = a + " " + b
// console.log(c.length)
//
// var favNum = 8
// console.log(favNum/2)
// var otherNum = 13
// console.log(favNum/otherNum)
// console.log(otherNum > favNum)
// var d = "Learning to code"
// console.log(d.length)
// console.log(d.charAt(2))
// console.log(d.charAt(5) + "t")
// console.log(3.6 + "a");
// console.log(3.0 + 3.0);
//
// var price = 200
// if (price <= 100) {
//     console.log("in budget")
// }
// else {
//     console.log("too expensive!");
// }
//
// var hunger = "not hungry"
// if (hunger === "hungry") {
//     console.log("eat food");
// }
// else {
//     console.log("keep coding");
// }
//
// var trafficLight = "purple"
//
// if(trafficLight === "green") {
//     console.log('go');
// } else if(trafficLight === "yellow") {
//     console.log('slow down');
// } else if(trafficLight === 'red') {
//     console.log('stop');
// } else {
//     console.log('not possible');
// }
//
// var numOne = 46
// var numTwo = 46
//
// if(numOne < numTwo) {
//     console.log(numTwo);
// } else if(numOne === numTwo) {
//     console.log('equal');
// } else {
//     console.log(numOne);
// }
//
// var numThree = 89
// if(numThree === 0) {
//     console.log('zero');
// } else if(numThree%2 === 0) {
//     console.log('even');
// } else {
//     console.log('odd');
// }
//
// var grade = 87.6
// if(grade >= 90.0) {
//     console.log("A");
// } else if( grade >= 80.0 && grade < 90.0) {
//     console.log("B");
// } else if(grade <=70.0 && grade < 80.0) {
//     console.log("C");
// } else {
//     console.log("F");
// }
// var P = 7
// if(typeof P === "string") {
//     console.log(typeof P);
// } else if(typeof P === "number") {
//     console.log(typeof P);
// } else if(typeof P === "boolean") {
//     console.log(typeof P);
// } else if(typeof P === "undefined") {
//     console.log(typeof P);
// } else if(typeof P === "null") {
//     console.log(typeof P);
// } else if(typeof P === "symbol") {
//     console.log(typeof P);
// } else {
//     console.log("unknown");
// }

// var groceryList2 = ["chips","dip","cookies"]
// console.log(groceryList2.push("soda"));
// console.log(groceryList2);
//
// var numbers2 = [2, 4, 6, 8, 10]
// console.log(numbers2.unshift(0));
// console.log(numbers2);
//
// var groceryList1 =["apples","carrots","oatmeal"]
// var groceryList3 = groceryList1.concat("granola")
// console.log(groceryList3);
// console.log(groceryList1);
// //
// var numbers1 = [1, 2, 3, 4, 5]
// var numbers2 = [0]
// var add0 = numbers2.concat(numbers1);
// console.log(add0);
// console.log(numbers1);
// console.log(numbers2);
//
// var numbers3 = [2, 13, 6, 8, 4, 2]
// console.log(numbers3.indexOf(2));
// console.log(numbers3.lastIndexOf(2));
//
// var chars = ["y", "a", "r", "r", "a"]
// console.log(chars.join(""))
// var charsReversed = chars.reverse("")
// console.log(charsReversed);
// console.log(charsReversed.join("-"));
// console.log(charsReversed.join(""));
//
var siblings = [" bob"," sally"," tim"," jane"]
var parents = [" tom"," ashley"," zeb"]
// var siblingsSorted = siblings.sort()
// var parentsSorted = parents.sort()
// var family = parentsSorted.concat(siblingsSorted)
// console.log(family.sort());
var family = siblings.concat(parents);
console.log(family);
var familySorted = family.sort();
console.log(familySorted);
console.log(familySorted.reverse());
//
// var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here"]
// var question = "Will I be rich one day?"
// var answerNum = Math.floor(Math.random() * 6)
// console.log(answerNum);
//
// console.log(answers[answerNum]);
