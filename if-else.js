//Chp # 12-13: If-Else and Testing Conditions

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122) ?

//<script>
var x = prompt("Enter number");
if(x>="A" && x<="Z"){
    document.write("Uppercase letter:\n " + x);
}
else if(x>="a" && x<="z"){
    document.write("Lowercase letter:\n " + x);
}
else{
    document.write("Number:\n " + x);
}
//</script>

// 2.  Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal ?

//<script>
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
if(num1>num2){
    document.write("First number is larger than Second number:\n");
}
else if(num1==num2){
    document.write("First number is equal to Second number:\n");
}
else{
    document.write("Second number is larger than First number:\n");
}
//</script>

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero ?

//<script>
var num = prompt("Enter first number");
if(num>0){
    document.write("Positive number:\n" + num);
}
else if(num<0){
    document.write("Negative number:\n" + num);
}
else if(num==0){
    document.write("Zero number:\n" + num);
}
//</script>

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise ?

//<script>
var a = prompt("Enter a character");
if(a=="a" && a=="e" && a=="i" && a=="o" && a=="u"){
    document.write("Character is vowel:\n" + a);
}
else{
    document.write("Character is not vowel:\n" + a);
}
//</script>

// 5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise ?

//<script>
var password = "hello123";
var user = prompt("Enter your password");
if(user==password){
    document.write("Correct! The password you entered matches the original password");
}
else if(user==""){
    document.write("Please enter your password");
}
else if(user!==password){
    document.write("Incorrect password");
}
//</script>

// 6.  This if/else statement does not work. Try to fix it ?

//<script>
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day"; 
}
else{
    reeting = "Good evening"; 
}   
//</script>

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements  ?

//<script>
var time = prompt("Enter your password");
if(time>=0000 && time<1200){
    document.write("Good Morning");
}
else if(time>=1200 && time<1700){
    document.write("Good Afternoon");
}
else if(time>=1700 && time<2100){
    document.write("Good Evening");
}
else if(time>=2100 && time<2359){
    document.write("Good Night");
}
//</script>

