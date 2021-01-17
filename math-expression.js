//Chp # 5: Math Expressions

// 1.  Write a program that take two numbers & add them in a new variable. Show the result in your browser ?

var x = 3;
var y = 5;
var z = x+y;
document.write("Addition" + z);

// 2. Repeat task1 for subtraction, multiplication & modulus ?

var x = 3;
var y = 5;
var z = x-y;
var i = x*y;
var k = x%y;
document.write("Subtraction" + z);
document.write("Multiplication" + i);
document.write("Modulus" + k);

// 3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value 
//after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0” ?

//<script> 
 document.write("Value after variable declaration is: undefined");
 var num = 5;
 document.write("Initialize value: " + num);
 document.write("\nValue after increment is: " + (++num));
 n = num+7;
 document.write("\nValue after addition is: " + n);
 document.write("\nValue after decrement is: " + (--n));
 document.write("\nThe remainder is: " + (n%3));
//</script>

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie ?

var movieTicket = 600;
var sale = movieTicket*5;
document.write("Total cost to buy 5 tickets to a movie is" + sale + "PKR");

// 5.  Write a script to display multiplication table of any number in your browser ?

//<script>
document.write("Table of 4 \n");

    for(var i=1; i<=10; i++)
        {
            var n=4;
            document.write("\n" + n*i);
        }
//</script>

// 6.  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC” ?

//<script>
var F = 70;
var celsius = (F-32)*5/9;
var C = 25;
var fahrenheit = (C*9/5)+32;
document.write(celsius + "\n oC");
document.write("\n" + fahrenheit + "\n oF");    
//</script>

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
 //a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges 
 // Compute the total cost & show the receipt in your browser ?

//<script>
document.write("Shopping Cart");
document.write("\n Price of item 1 is:" + 650);
document.write("\n Price of item 2 is:" + 100);
document.write("\n Quantity of item 1 is:" + 3);
document.write("\n Quantity of item 2 is:" + 7);
document.write("\n Shipping Charges is:" + 100);
document.write("\n Total cost of your order is:" + ((650*3) + (100*7) + (100)) );
//</script>

// 8.  Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser ?

//<script>
document.write("Marks Sheet");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks)*100;
document.write("percentage is: " + percentage);
//</script>

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) ?

//<script>
document.write("Currency in PKR"); 
var usDollarIntoPak = 104.80;
var saudiRiyalIntoPak = 28;
var dollar = usDollarIntoPak*10;
var riyal = saudiRiyalIntoPak*25;
document.write("Total Currency in PKR" + (dollar + riyal));
//</script>

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression ?

//<script>         
var total = 10+5*10/2;
document.write("Total: " + total )        
//</script>

// 11.  The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values ?

//<script>
var currentYear = 2020;
var birthofYear = 1996;
var yourAge = currentYear - birthofYear;
document.write("Your Age is: \n" + yourAge);
//</script>

// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. 
//b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) ?

//<script>
var r = 20;
document.write("Radius of a circle" + r);
var pi = 3.142;
var circumference = 2*pi*r;
document.write("The circumference is: \n" + circumference);
var area = pi*r*r;
document.write("The area is: \n" + area);
//</script>

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life ?

//<script>
var favSnack = "chocochip";
var currentAge = 15;
var estimatedMaxAge = 65;
var snacksPerDay = 3;
var eatTotal = (estimatedMaxAge - currentAge )*snacksPerDay;
document.write("favourite snack:\n" + favSnack);
document.write("Current age:\n" + currentAge);
document.write("Estimated max age:\n" + estimatedMaxAge);
document.write("Amount of snacks per day:\n" + snacksPerDay);
document.write("You will need" + eatTotal + favSnack + "to last you until the ripe old age of 65");
//</script>


        







