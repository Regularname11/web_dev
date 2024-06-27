// Calculating days, week, and months according to user age input.

function lifeLeft() {
    var age = prompt("Enter your age: ");
    
    var remainingAge = 90 - age;
    var days = remainingAge * 365;
    var weeks = remainingAge * 52;
    var months = remainingAge * 12;

    var message = "You have " + days + " days, " + weeks + " weeks, and " + months + " months left.";

    alert(message);
}

lifeLeft() 
