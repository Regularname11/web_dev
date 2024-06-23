// Text counter with a limit of 150 characters.

var text = prompt("Hi, enter your text here: 👇");

if (text.length > 150) {
    alert("You have reached your limit which is 150 characters.");
}
else {
    var textCount = text.length;
    alert("You have written " + textCount + " characters, and you still have " + (150 - textCount) + " characters left.");
}