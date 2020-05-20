/* a DO...WHILE LOOP will first do one pass of the code inside the loop no matter what,
and then continue to run the loop while the specified condition evaluates to true.
*/

let arr = []; // created empty array
let i = 0; // created variable

do { // always begins with 'do' then code block
    // insert your code    
    arr.push(i);
    i++;
} while (i < 5); // while statement is always after the code block
console.log(arr);