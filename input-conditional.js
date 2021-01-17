//Chp # 9-11: User Input and Conditional Statement

// 1.  Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” ?

//<script>
var cityName = prompt("Enter your city name");
if(cityName=="karachi"){
    alert("Welcome to city of lights")
}
else{
    alert("Welcome to city")
}
//</script>

// 2.  Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am ?

//<script>
var gender = prompt("Enter your gender");
if(gender=="male"){
    alert("Good Morning Sir")
}
else{
    alert("Good Morning Ma’am")
}
//</script>

// 3. Write a program to take input color of road traffic signal from the user & show the message ?

//<script>
var color = prompt("Enter your gender");
if(color=="red"){
    alert("Must Stop")
}

else if(color=="yellow"){
    alert("Ready to move")
}

else if(color=="green"){
    alert("Move now");
}
else{
    alert("Signal lights turn off");
}
//</script>

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” ?

//<script>
var remainingFuel = +prompt("Enter remaining fuel in car (in litres)");
if(remainingFuel<0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("Start the car");
}
//</script>

// 5. Run this script, & check whether alert message would be displayed or not ?

//a.
var a = 4;
if (++a === 5){ 
    alert("given condition for variable a is true");
 }
 
 //b.
 var b = 82; 
 if (b++ === 83){ 
     alert("given condition for variable b is true"); } 
 
 //c.
var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); } 
    if (c === 13){ 
        alert("condition 2 is true"); }
         if (++c < 14){ 
             alert("condition 3 is true"); } 
             if(c === 14){ 
                 alert("condition 4 is true"); }  

//d.
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){
     alert("The cost equals"); }  

//e.
if (true){ 
    alert("True"); } 
    if (false){ 
        alert("False"); }  

//f.
f. if("car" < "cat")
    alert("car is smaller than cat");
 

 // 6.  Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade ?

 //<script>
 var totalMarks = 300;
 var obtainedMarks = +prompt("Enter your obtained marks");
 var percentage = (obtainedMarks/totalMarks)*100;
 document.write("Total Marks\n" + totalMarks);
 document.write("Obtained Marks\n" + obtainedMarks);
 document.write("Percentage\n" + percentage);
 if(percentage>=80){
     document.write("Grade:\n A-one");
     document.write("Great Effort");
 }
 else if(percentage>=70){
     document.write("Grade:\n\n A");
     document.write("Keep it up");
 }
 else if(percentage>=70){
     document.write("Grade:\n\n A");
     document.write("Keep it up");
 }
 else if(percentage>=60){
     document.write("Grade:\n\n B");
     document.write("You need to improve");
 }
 else{
     document.write("Grade:\n\n Fail");
     document.write("Sorry");
 }
 //</script>

 // 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer” ?

 //<script>
var userGuess = +prompt("Enter secret number","Guess secret number");
if(userGuess>=1 && userGuess<=10){
     document.write("Bingo! Correct answer");
}
else{
     document.write("Close enough to the correct answer");
} 
//</script>

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3 ?

//<script>
var num = +prompt("Check, it is divisible by 3 or not","Enter any number");
if(num/3){
       document.write("The number is divisible by 3");
   }
else{
       document.write("The number is not divisible by 3")
   }
//</script>

// 9. Write a program that checks whether the given input is an even number or an odd number ?

//<script>
var num = +prompt("Check, it is even number or an odd number","Enter any number");
if(num%2==0){
       document.write("Even number");
   }
else{
       document.write("Odd number");
   }
//</script>

// 10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.” ?

//<script>
var temperature = prompt("Enter temperature");
if(temperature>40){
    alert("It is too hot outside");
}

else if(temperature>30){
    alert("The Weather today is Normal");
}

else if(temperature>20){
    alert("Today’s Weather is cool");
}

else if(temperature>10){
    alert("OMG! Today’s weather is so Cool");
}
//</script>

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user ?

//<script>
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var operator = prompt("Enter opeartor:\n +, -, *, / & %");
if(operator=="+"){
    document.write("Add:\n" + (num1+num2));
}

else if(operator=="-"){
    document.write("Add:\n" + (num1-num2));
}

else if(operator=="*"){
    document.write("Add:\n" + (num1*num2));
}

else if(operator=="/"){
    document.write("Add:\n" + (num1/num2));
}

else if(operator=="%"){
    document.write("Add:\n" + (num1%num2));
}
//</script>
   

