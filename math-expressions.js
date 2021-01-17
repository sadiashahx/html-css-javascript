//Chp # 6-8: Math Expressions

// 1.  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser ?

//<script>
    var a = 10;
document.write("The value of a:\n" +a);
document.write("\n------------------");
document.write("The pre-increment value of a:\n" + ++a);
document.write("The value of a:\n" +a);
document.write("\n------------------");
document.write("The post-increment value of a:\n" + a++);
document.write("The value of a:\n" +a);
document.write("\n------------------");
document.write("The pre-decrement value of a:\n" + --a);
document.write("The value of a:\n" +a);
document.write("\n------------------");
document.write("The post-decrement value of a:\n" + a--);
document.write("The value of a:\n" +a);
//</script>

// 2.  What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; ?

//<script>
var a=2, b=1;
var result = --a - --b + ++b + b--;  // 1 - 0 + 1 + 1 = 3
document.write("Value of a is:\n" + a);
document.write("Value of b is:\n" + b);
document.write("The result is:\n" + result);
//</script>

// 3. Write a program that takes input a name from user & greet the user ?

//<script>
var user = prompt("Enter your Name")
alert("Hello" + " " + user);
//</script>

// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default ?

//<script>
var user = prompt("Enter any number for table")
var a = 5;
var n,i;
document.write("Table Generate: \n")
if(user>0)
{
  for(n=1; n<=10; n++)
  {
    document.write("\n" + user*n);
  }
}
else
{
for(i=1; i<=10; i++)
  {
    document.write("\n" + a*i);
  }
}
//</script>

// 5.  Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. 
        // d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) ?

//<script>
var subjectName1 = prompt("Enter first subject name");
   var a = subjectName1;
   var subjectName2 = prompt("Enter second subject name");
   var b = subjectName2;
   var subjectName3 = prompt("Enter third subject name");
   var c = subjectName3;
   document.write("Three subject's are: \n" + a + " " + b + " " + c);

   var totalMarksEachSubject = 100;
   
   var obtainedMarks1 = +prompt("Enter first subject obtained marks");
   var x = obtainedMarks1;
   var obtainedMarks2 = +prompt("Enter second subject obtained marks");
   var y = obtainedMarks2;
   var obtainedMarks3 = +prompt("Enter third subject obtained marks");
   var z = obtainedMarks3;
   document.write("Three subject's obtained marks are: \n" + x + " " + y + " " + z);

   var percentMark1 = (obtainedMarks1/totalMarksEachSubject)*100;
   var percentMark2 = (obtainedMarks2/totalMarksEachSubject)*100;
   var percentMark3 = (obtainedMarks3/totalMarksEachSubject)*100;
   document.write("Three subject's percentage are: \n" + percentMark1 + " " + percentMark2 + " " + percentMark3);

   var totalMarks = 300;
   var totalObtainedMarks = (x+y+z);
   var totalPercentage = (totalObtainedMarks/totalMarks)*100; 
   document.write("Three subject's total marks, obtained marks and percentage are: \n" + totalMarks + " " + totalObtainedMarks + " " + totalPercentage);
//</script>
