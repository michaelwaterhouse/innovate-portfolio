


console.log("hello world");

// VARIABLES

var myFirstName = "Michael"
; // 'var' is used in legacy code

const mySuename = "Waterhouse";; //'const' cannot be updated

let myJob = "Waiting in the Dole queue";

myJob = "Web Developer"; // 'let' can be updated

console.log(myJob);

//! IF STATEMENTS

IF (myJob ==="Waiting in the Dole queue") {
    console.log("Michael needs to get a job!");
} elseif (myJob === "Web Developer)") {
    console.log("Michael has finally got somewhere in 2022!");
} 
    else {
    console.log ("What is Michael upto?");
}

if (myFirstName == "Michael" && mySurname === "Waterhouse") {
    console.log("His name is 'Michael Waterhouse'");
} else {
    console.log("I don't know hid name");
}

if (myJob === "Waiting in the Dole queue"  || myJob === "Web developer") {
    console.log("michael does this")
} else {
    console.log("Michael does that");
}

//! FUNCTIONS

function myFunction {
    console.log("This is a JavaScript function!");
}
myFunction()

//! STRING INTERPOLATION

console.log(`His first name is ${myFirstName} and his second is ${mySurname}!`);

//! ARRAYS

let innovateInstructors = ["Jordan", "Katy"];

console.log(innovateInstructors);
console.log(innovateInstructors[1]);

//! LOOPS

let text = "";

for (let i = 0; i < 5; i++) {
    text += "the number is " + i + ""
}

let i=1;

while (i < 5) {
    text += "the number is" + i;
    i++;
} console.log(text);

//!SWITCH STATEMENTS 

let fruit = "apple";
switch (fruit) {
    case "grape":
        console.log("grape");
        break;
    case "orange":
        console.log("orange");
        break;
    case "apple":
        console.log("apple");
        break;
    default:
        console.log("I don't like that fruit.")
}

//! ARROW FUNCTIONS

hello = () => {
    console.log("Hello World!");
}
hello()