//declaring and assignomng variables

var a;

window.onload =(button, a=3, b=5)=>{
     c =a*b
    const myButton = document.createElement("button")
    const submitValu =  document.createTextNode("submit")
    myButton.appendChild(submitValu)
    
    document.body.append(myButton)
 
}

window.onclick =(button, a=3, b=5)=>{
    c =a*b

   const createh1 = document.createTextNode(`${c}`)
//    const createNode =  document.createTextNode(` ${c}`)
//    createh1.appendChild(createNode)

  append(createh1).document.getElementsByClassName("this")
   
}

a = 8;

b = a;

console.log(b)

//strings: they are characters enclosed with single or double quotes
var myFirstName = "Beau"
var myLastName = "Carnes"

//initialise these three variables
var a = 5;
var b = 10;
var c = "I am a"

//do not changre  co9de below this line
a = a + 1;
b = b + 5;
c = c + " strings"

console.log(c)

//Number is a data in JavaScript which represent numeric data.
var sum = 5 + 10;
console.log(sum)

var dif = 45 - 33;
console.log(dif)

var pro = 8 * 10;
console.log(pro)

var quotient = 66 / 33;
console.log(quotient)

//incremnt a number
var myVar = 87;

//only change below this line
myVar++;
console.log(myVar)

//rmainder
var remainder
remainder = 11 % 3;
console.log(remainder)
//compounding addition

var u = 3;
//var u = u + 5;
u += 5;
console.log(u)

//escaping quotes(you can as well replace the double uotes of the strings with single quotes)
var myStr ="I am a \"double quoted\" string inside \"double quote\""
console.log(myStr)
//escape sequences in strings
/****
 \' single qote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 ****/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

//concatenating strings with plus sign
var myStr = "This is the start. " + "This is the end"
console.log(myStr)

//concatenating strings with plus equal sign
var myStr = "This is the first sentence. "
myStr += "This is the last sentence"
console.log(myStr)

//concatenating strings with variables
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?"
console.log(ourStr)

//appending variables to strings
var anAdjective = "Awesome";
var ourStr = "freCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr)

//finding the lenght of a string

var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength)
//bracket notation to get the first characer of a  string 
var lastName = "Lovelace";
firstLetterOfLastNaame = lastName[0];
console.log(firstLetterOfLastNaame)

secondLetterOfLastNaame = lastName[1];
console.log(secondLetterOfLastNaame)

//immutable string
var myStr = "Jello world";
myStr = "Hello wold";
console.log(myStr)

//finding last name of the string
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName)
// use bracket notation to find thr Nth-to-Last character in astring
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2]
console.log(secondToLastLetterOfLastName)
//word blank
var myNoun = "dog";
var myAdjective = "big";
var  myVerb = "ran";
var myAdverb = "quickly";

var worldBlanks = "The " + myAdjective + " " + myNoun  + " " + myVerb + " " + myAdverb + ".";
console.log(worldBlanks)
//JavaScipt Array.it allows to store several pieces of data in one place
myArray =["Quincy", 1];
console.log(myArray)
// Nest one Array within Another
var myArray = [["Bulls", 23], ["white sox", 45]];
console.log(myArray)
// Access aray dat with nindexes
var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData)
//Modiy Array dat with indexes
var myArray = [18,45,56];
myArray[0] = 43;
console.log(myArray)
// selecting element in multidimensional array
var myArray = [[1,2,3], [4,5,6], [7,8,9, [10,11,12]]];
var myData = myArray[2][1];
console.log(myData)
//manipulate array with push method. it is an easy of adding to the existing array
var myArray = [["john", 23], ["cat", 2]];
myArray.push = (["dog", 3]);
console.log(myArray.push)
//manipulate array with pop method. it is an easy of removing to the existing array(last array)
var myArray = [["John", 23], ["Cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray)
//manipulate array with shift method. it is an easy of removing to the existing array(first element/array)
var myArray = [["John", 23], ["Cat", 2]];
var removedFromMyArray = myArray.shift();
console.log(myArray)

//manipulate array with unshift method. it is an easy of adding lement at the beginning of the array
var myArray = [["John", 23], ["Cat", 3]];
myArray.shift();
myArray.unshift = (["paul", 54]);
console.log(myArray)
//creating shopping listmyList should be an array, the first element dhould be a string, second element should be numbers, it should have at least 5 items in your list
var myList = [["cereal", 5], ["juice", 7], ["fruits", 5], ["utensils", 4], ["wears", 10]];
console.log(myList)

// write reusablefunction
function reusableFunction() {
    console.log("Hi world");
}
reusableFunction();
reusableFunction();

//parameters
function functionWithArgs(a, b) {
    console.log(a * b);
}
functionWithArgs(10, 5)

//retun a value from function with return
function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));
//In JS scope refers to the visibility of variables. variables which are ddefined outside of a function block have Global Scvope



//local scope: variable which are defined wiyhinthe  function has alocal scope
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
//Global vs local scope
var outerWear = "T-Shirt";
function myOutfit() {
var outerWear = "sweater";
return outerWear;
}
console.log(myOutfit());
console.log(outerWear);
//understanding undefined value returned from a function
var sum = 0;
function addFive() {
    sum += 5;
}
//assign a return value to a variable
var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
//next inline
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log(nextInLine(testArr, 6));

//Understanding Boolean Values
function welcomeToBooleans() {
    return true;
}
// use conditional Logic with if statements
function trueorFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was False";
}
console.log(trueorFalse(true));
//comparison with the equality operator
function testEqual(val) {
    if (val ==12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));
//comparison with strict Equality operator
function testStrict(val) {
    if (val ===7) {
        return "Equal"
    }
    return "Not Equal";
    /*
    3===3  true 
    3==='3' false
    */
}
console.log(testStrict('7'));

//practice comparing dif values



// comparison with the inequalitiees
function testNotEqual(val) {
    if (val != 90) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

//comparison with strict ineEquality operator
function testStrictNotEqual(val) {
    if (val !==7) {
        return "Not Equal"
    }
    return " Equal";
    /*
    !3==3  false
    !3=='3' true
    */
}
console.log(testStrictNotEqual(10));

//comparison with greater Than operator
/*
5>3 true
7>4 true
2>6 false
'1'> 6 false
*/
function testGreaterThan(val) {
    if (val > 10) {
        return "over 10";
    }
    return "10 or under";
}
console.log(testGreaterThan(10));

//comparison with greater Than or equal To operator
/*
5>=5 true
7>='4' true
2>=6 false
'1'>= 6 false
*/
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    return "Less than 20";
}
console.log(testGreaterOrEqual(20));

//comparison with less Than or equal To operator
/*
5<=6 true
4<='4' true
2<=2 true
'1'<= 6 false
*/
function testLessOrEqual(val) {
    if (val <= 20) {
        return "smaller Than or Equal to 20";
    }
    return "More than 20";
}
console.log(testLessOrEqual(20));

//compariason with the logical and operator. to test if two thungs are true at this same time
function testLogicalAnd(val) {
    if (val <=50 && val >=25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(30));

//compariason with the logical or operator. to test if eithervof the thungs are true.
function testLogicalOr(val) {
    if (val <10 || val >25) {
        return "Outside";
    }
    //if it is not true it will return inside
    return "Inside";
}
console.log(testLogicalOr(15));
//if/else statement
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result ="5 or smaller";
        
    }
    return result;
}
console.log(testElse(4));
// introducing else if statement
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

//logical order in If Else Statements. the functon is executed from top to bottom...
/*function orderMyLOgic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(3));
*/

//chaining if Else statements
function testSize(num) {
    if (num <5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "huge"
    }
}
console.log(testSize(15));

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogy", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par ) {
        return names[3]
    } else if (strokes = par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
}
console.log(golfScore(5, 8));
//selecting from many options with switch statement
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
        answer = "alpha"
        break;
        case 2:
        answer = "beyta"
        break;
        case 3:
        answer = "gamma"
        break;
        case 4:
        answer = "delta"
        break;
    }
    return answer;
}
console.log(caseInSwitch(4));
//adding a default value in switch statement
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
          answer = "apple";
          break;
          case "b":
          answer = "bird";
          break;
          case "c":
          answer = "cat";
          break;
          default:
          answer = "stuff";
          break;
    }
      return answer;
}
console.log(switchOfStuff("4"));
//switch statement with multiple chouices
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
      case 1:
     case 2:
     case 3:
     answer = "Low";
    break;
    case 4:
     case 5:
     case 6:
     answer = "Mid";
    break;
    case 7:
     case 8:
     case 9:
     answer = "High";
    break;
    }
    return answer;
}
console.log(sequentialSizes(8));
//returning boolean value
function isLess(a, b) {
    return a < b;
}
console.log(isLess(30, 15));
//abTest
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
}
console.log(abTest(-2, 2));
//card counting function
var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++;
        break;
        case 10:
        case "j":
        case "Q":
        case "K":
        case "A":
        count--;
        break;

    }
    var holdbet = "Hold"
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc('k'); cc('A');
console.log(cc(4));
//build javascript objects
var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};
//Accessing objests properties through dot notations
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtvalue = testObj.shirt
//Accessing objests properties through bracket notations
var testObj = {
    "an entrance": "bamburger",
    " my shirt": "jersey",
    " theshoes": "cleats"
};
var entranceValue = testObj["an entrance"];
var shirtvalue = testObj["my shirt"];
//
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "ujnitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
//updating objects properties
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
ourDog.name = "Happy Camper";
console.log(ourDog);
//Add new properties to a Java script
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
ourDog.bark = "bow wow";
console.log(ourDog.bark);
// Delete properties ffrom a java script
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
delete ourDog.legs;
console.log(ourDog);
//using objects for lookup
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "chicago"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("bravo"));
// Testing objects for properties


///manipulatng complx objects
var myMusic = [
    {
        "artist": "Bily Joel",
        "title": "piano man",
        "release year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true

    },
    {
        "artist": "Bily Joel",
        "title": "piano man",
        "release year": 1973,
        "formats": [
            "youtube v",
            "8T",
            "LP"
        ]
        
    }
]
//Accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


//Accessing Nested arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "flir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1]. list[1];
console.log(secondTree);

// Recod collection
var myArray = [];

var i = 0;;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//Iterate with JavaScript for Loops
var ourArray = [];

for (var i = 1; i < 6; i++) {

    myArray.push(i);
}
console.log(myArray);
//iterate with odd numbers

var ourArray = []
for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

//odd numbers
var ourArray = []
for (var i = 1; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

//count backward with a for loop
var ourArray = []
for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);

//odd numbers
var ourArray = []
for (var i = 9; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);
//Iterate through an array with a for looop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArray[i];
}
console.log(total);

// do whle loop
var myArray = [];
var i = 10;

do{
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);

//Random fraction with javascript
function randomFraction() {

    return Math.random();
}
console.log(randomFraction());


//Random whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
//use parslnt
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger('56');


function convertToInteger(str) {
    return parseInt(str, 2)
}
convertToInteger('10011');

//multiple conditional ternary operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(10));
