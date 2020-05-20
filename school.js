//hw create a new file named school.js
//create an array called careerdevs w/ 3 nested arrays w/ 4 student names
//! DO NOT CREATE AN ARRAY FOR THE CLASSES A B n C
/* output:
Class A students are:
X
X
X
X
Class B students are:
X
X
X
X
*/

let classes = [
    ["Jon", "Chris", "Anabel", "Jeremy"],
    ["David", "Kenny", "Steve", "Mark"],
    ["Luke", "Cullen", "Kyle", "Mike"]
];

for (i = 0; i < classes.length; i++) {
    let classNames = ["Classes A students are:", "Classes B students are:", "Classes C students are:"];
    console.log(classNames[i]);
    for (c = 0; c < classes[i].length; c++) {
        console.log(classes[i][c]);
    }
}