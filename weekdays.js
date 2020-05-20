// create an array with the days of the week. Log to the screen the days backwards
let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

for (let a = days.length - 1; a >= 0; a--) {
    // 'a = days.length - 1' means starts at 7-1=6=sunday
    // 'a >= 0' means it will continue to run until variable a is less than or equal to 0=monday
    // 'a--' means variable a will subtract 1 each time it passes through the loop
    console.log(days[a]);

}