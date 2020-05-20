/*
create a variable for a single family of 5 searching for a hotel to stay at for 3 days in the area
create an array of different hotels
create an array of hotel stars; 5-1, best to worst
create an array for hotel room types; basic-suite, deluxe-suite, master-suite
create an array for nights staying; 1-3
create a variable for each room types cost per night; $100, $200, $300
create a variable for dinner cost; $50 per night
create a variable for money they'd get back per night for denying roomcare service
output: hotel name, hotel room(x) and cost for 3 nights, dinner cost for 3 nights, total cost for that hotel/room/dinner
*/

let adamsFamily = 5;
let hotels = ["Tipton", "Fitzpatrick", "Biltmore", "Harbor Inn", "Best Western"];
let stars = [5, 4, 3, 2, 1];
let roomType = ["Basic-Suite", "Deluxe-Suite", "Master-Suite"];
let nightStay = 3
let roomCost = [100, 200, 300];
let dinner = 50;
let denyService = 10;

for (let h = 0; h < hotels.length; h++) {
    for (let r = 0; r < roomType.length; r++)
        console.log("The " + hotels[h] + "'s", '"' + roomType[r] + '"', "cost $" + roomCost[r] * stars[h] * nightStay + " for 3 nights.", "\n\tDinner for all 3 nights would cost the Adams family $" + stars[h] * dinner * nightStay + ".", "\n\t\tThey're total 3 night stay would cost them $" + ((roomCost[r] * stars[h] * nightStay) + (stars[h] * dinner * nightStay)) + ".", "\n\t\t\tIf the Adams family denied roomcare service, they would save $" + denyService + " per night stayed. \n\t\t\t\tThey're new total would be $" + (((roomCost[r] * stars[h] * nightStay) + (stars[h] * dinner * nightStay)) - (nightStay * denyService)) + "\n");
}