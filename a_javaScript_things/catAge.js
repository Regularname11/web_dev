function catAge (){
    var catAge = 0;
    var humanAge = parseInt(prompt ("Enter your cat age:"));
    if (humanAge === 1) return alert ("Your cat age is 15 years old in human age.");
    if (humanAge === 2) return alert ("Your cat age is 25 years old in human age.");

    catAge = (humanAge-2) * 4 + 25;

    return alert ("Your cat age is " + catAge + " years old in human age.");
}
catAge();