/*
create an array of different restaurant
create an array of 1 stars through 5 stars as 1-5
create an array of how many guests (max 3) will be apart of reserevation
create a variable that has reserve cost of $100, equivalent to a 1 star
create a variable for per guest cost of $10, equivalent to a 1 star
output should show restaurant by ranking best to worst, stars * reserve cost, person * per guest cost
*/

let restaurants = ["Not Your Average Joe's", "TGIF", "Chipotle", "Chick-fil-a", "McDonalds"];
let stars = [5, 4, 3, 2, 1];
let guests = [1, 2, 3];
let reserve = 100;
let guest = 10;

for (let i = 0; i < stars.length; i++) {
    for (let g = 0; g < guests.length; g++)
        console.log(restaurants[i] + " reservation fee is " + "$" + stars[i] * reserve + ".", guests[g] + " guest(s) cost is " + "$" + guests[g] * guest + ".", "Total cost is " + "$" + ((stars[i] * reserve) + (guests[g] * guest)) + ".");
}