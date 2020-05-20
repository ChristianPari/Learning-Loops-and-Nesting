// create an array of lemonade flavors
// create an array for each flavor sold
// create an array of each flavors price
// create a variable for tax 0.07%
// output should give each flavors name, cost per flavor before and after tax, how many were sold, how much each flavor made in revenue, total revenue from all     the lemonades
let lemonadeFlavors = ["Lemon", "Watermelon", " Mix", "Cherry", "Tigers' Blood"]; // 5 total indexes
let flavorsSold = [8, 11, 14, 7, 18];
let flavorPrice = [1.25, 1.35, 1.30, 1.25, 1.50];
let tax = .07;
let totalRevenue = 0;

for (i = 0; i < flavorPrice.length; i++) {
    let sales = (flavorPrice[i] * flavorsSold[i]) + (flavorsSold[i] * flavorPrice[i] * tax);
    totalRevenue += sales;
    console.log("The lemonade flavor " + lemonadeFlavors[i] + " cost $" + flavorPrice[i] + " before tax and $" + (flavorPrice[i] * tax).toFixed(2) + " after tax. " + flavorsSold[i] + " of this flavor were sold, and the total revenue from this flavor was $" + ((flavorPrice[i] * flavorsSold[i]) + (flavorsSold[i] * flavorPrice[i] * tax)).toFixed(2) + ".");
}
console.log("The total revenue from all the lemonades together is $" + totalRevenue.toFixed(2) + ".");
//! using .toFixed(x) will set the decimals that are presented to whatever 'x' is set to

// save as and then add to this program the following; add array for sizes, add array for size prices, remove the flavors price array, add a nested array for each size sold for each flavor