// Creating a simple BMI calculator

function bmiCalculator() {
    var height = parseFloat(prompt("Enter your height in meters (ex: 1.70 or 180):"));
    var weight = parseFloat(prompt("Enter your weight in kg:"));

    if (height > 10) { 
        height = height / 100;
    }

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid positive numbers for height and weight.");
        return;
    }

    var bmi = weight / Math.pow(height, 2);
    var message = "Your BMI is " + bmi.toFixed(2) + " according to your height and weight.";

    alert(message);
}

bmiCalculator();
