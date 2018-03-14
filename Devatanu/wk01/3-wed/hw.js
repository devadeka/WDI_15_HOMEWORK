console.log("Question1")
for(var i = 0; i <= 20; i++){
    if(i%2==0){
        console.log(i + " is even");
    }
    else{
        console.log(i + " is odd");
    }
}

console.log("\n\n Question2");
for(var i = 1; i <= 10; i++){
    for(var j = 1; j <= 10; j++){
        console.log(i + " * " + j + " = " + i*j);
    }
    console.log("\n");
}

console.log("\n\n Question3");
var colours = [
    "blue",
    "red",
    "yellow",
    "grey",
    "pink",
    "maroon",
    "lilac"
]

var th = [
    "st",
    "nd",
    "rd",
    "th"
]

for (var i = 1; i < colours.length; i++){
    var number = i + th[i<4?i-1:3]
    console.log("My " + number + " choice is " + colours[i]);
}