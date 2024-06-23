// Your cat age according to human age.
function catAge (humanAge){
    var catAge = 0;
    prompt ("Enter your cqt age:")
    if (humanAge === 1) return 15;
    if (humanAge === 2) return 25;

    catAge = (humanAge-2) * 4 + 25;
    return alert ("Your cat age is " + catAge + " years old in human age.");
}