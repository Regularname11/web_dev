//working with lower and uppercase (slicing, extracting and string casing)

var name = prompt("What is your name?");
alert("Hello, " + name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase());