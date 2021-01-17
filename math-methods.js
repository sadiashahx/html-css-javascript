//Chp # 26-30: Math Methods

// 1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number .

//<script>
var positiveNum = prompt("Enter any positive integer");
document.write("User Input:\n" + " " + num + "<br>");
document.write("Round off value:\n" + " " + Math.round(num) + "<br>");
document.write("Floor value:\n" + " " + Math.floor(num) + "<br>");
document.write("Ceil value:\n" + " " + Math.ceil(num) + "<br>");
//</script>

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.

//<script>
var negativeNum = prompt("Enter any negative floating integer");
document.write("User Input:\n" + " " + num + "<br>");
document.write("Round off value:\n" + " " + Math.round(num) + "<br>");
document.write("Floor value:\n" + " " + Math.floor(num) + "<br>");
document.write("Ceil value:\n" + " " + Math.ceil(num) + "<br>");
//</script>

// 3. Write a program that displays the absolute value of a number.

//<script>
var absoluteNum = prompt("Enter any integer");
document.write()
document.write("The absolute value of " + absoluteNum + " " + "is:\n" + " " + Math.abs(absoluteNum));
//</script>

// 4.  Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

//<script>
var diceNum = Math.floor( Math.random() * 6 ) + 1;
document.write("Play Dice:" + "<br>")
document.write("Random dice value " + diceNum);
//</script>

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

//<script>
var toss = Math.random()*2;
document.write("Toss start:" + "<br>")
if(Math.floor(toss)==0){
    document.write("Random coin value " + "Heads");
}
else{
    document.write("Random coin value " + "Tails");
}
//</script>

// 6. Write a program that shows a random number between 1 and 100 in your browser.

//<script>
var rangeNum = Math.floor((Math.random() * 100) + 1);
document.write("Random number between 1 to 100:" + rangeNum);
//</script>

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms.

//<script>
var weight = prompt("Enter your weight");
var intWeight = parseInt(weight);
document.write("The weight of user is:" + intWeight + "kilograms");
//</script>

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

//<script>
var guess = prompt("Enter a number between 1 to 10")    
var secretNum = Math.floor((Math.random() * 10) + 1);
if(guess==secretNum){
    document.write("Guess Number:" + guess + "<br>");
    document.write("Secret Number:" + secretNum + "<br>");
    document.write("Congratulation");
}
else{
    document.write("Guess Number:" + guess + "<br>");
    document.write("Secret Number:" + secretNum + "<br>");
    document.write("Try again");
}
//</script>