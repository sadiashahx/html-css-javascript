//Chp # 21-25: String Methods

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name ?

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName+lastName;
alert("Hello\n" + " " + fullName);

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser ?

//<script>
var favMobile = prompt("Enter your favourite mobile phone model");
document.write("My favourite mobile phone:\n" + " " + favMobile + "<br>");
document.write("Length of string:\n" + " " + favMobile.length);
//</script>

// 3.  Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser ? 

//<script>
var str = "Pakistani";
document.write("The index of letter “n” in the 'Pakistani' word is:\n" + " " + str.indexOf("n"));
//</script>

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser ?

//<script>
var str = "Hello World";
document.write("The index of letter “l” in the 'Hello World' word  is:\n" + " " + str.indexOf("l"));
//</script>

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser ?

//<script>
var str = "Pakistani";
document.write("The character at index 3 in the 'Pakistani' word is:\n" + " " + str.charAt(3));
//</script>

// 6. Repeat Q1 using string concat() method ?

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(lastName);
alert("Hello" + " " + fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser ?

//<script>
var str1 = "Hyderabaad";
document.write("City\n" + " " + str1);
document.write("After replacement city\n" + " " + str1.replace("Islamabaad"));
//</script>

// 8.  Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser ?

//<script>
var message = "Ali and Sami are best friends. They play cricket and football together."; 
document.write("Message\n" + " " + message + "<br>");
document.write("After replacement 'and' to '&' in message\n" + " " + message.replace(/and/g,"&"));
//</script>

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser ?

//<script>
var str2 = "472"; 
document.write("Value\n" + " " + str2 + "<br>");
document.write("After String into Integer type\n" + " " + parseInt("472"));
//</script>

// 10. Write a program that takes user input. Convert and show the input in capital letters ?

//<script>
var user = prompt("Enter your favourite snacks");
document.write("User Input\n" + " " + user + "<br>");
document.write("Upper Case\n" + " " + user.toUpperCase + "<br>");
//<script>

// 11. Write a program that takes user input. Convert and show the input in title case ?

//<script>
var user1 = prompt("Enter your favourite langauge");
document.write("User Input\n" + " " + user1 + "<br>");
var firstChar = user1.slice(0,1);
var firstCapitalChar = firstChar.toUpperCase();
var otherChar = user1.slice(1);
var fullChar = firstCapitalChar+otherChar;
document.write("Title Case\n" + " " + fullChar);
//<script>

// 12. Write a program that converts the variable num to string ?

//<script>
var num = 35.36; 
document.write("Value\n" + " " + num + "<br>");
document.write("After Number into String type\n" + " " + num.toString());
//</script>

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username ?

//<script>
var userName = prompt("Enter your username");
if(userName.includes("!") || userName.includes(".") || userName.includes(",") || userName.includes("@") ){
    alert("Enter a valid username");
}
else{
    alert("Username Valid");
}
//</script>

// 14. Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability ?

//<script>
var A = ["cake","apple pie","cookie","chips","patties"]
var userSearch = prompt("Enter your thing");
for(var d=0; d<A.length; d++){
var A = userSearch.slice(d,d+1);
var firstCap = A.toUpperCased;
var otherCharr = userSearch.slice(d);
var capCase = firstCap+otherCharr;

var twoCharr = userSearch.slice(d,d+2);
var remainingCharr = userSearch.slice(d);
var capRemainCharr = remainingCharr.toUpperCase;
var lastCapCase = twoCharr+capRemainCharr;

if(userSearch==capCase){
    alert("Item is found in the list");
}
else if(userSearch.toUpperCase==A[d].toUpperCase){
    alert("Item is found in the list");
}
else if(userSearch.toLowerCase==A[d].toLowerCase){
    alert("Item is found in the list");
}
else if(userSearch==lastCapCase){
    alert("Item is found in the list");
}
else{
    alert("Item is not found in the list");}
}
//</script>

// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document ?

//<script>
var pswd = prompt("Enter your password");
var u =[1,2,3,4,5,6,7,8,9];
for(var f=65; f<=90; f++){
    var o = String.fromCharCode(f);
}
if(pswd.length<6){
    alert("It must at least 6 characters long, Enter a valid password");
}
else if(pswd.indexOf(u) || pswd.includes(o)){
    alert("Valid Password");
}

//</script>

// 16. Write a program to convert the following string to an array using string split method ?

//<script>
var university = "University of Karachi";
var s = university.split("");
for(var p=0; p<s.length; p++){
    document.write(s[p] + "<br>");
}
//</script>

// 17. Write a program to display the last character of a user input ?

//<script>
var userInput = prompt("Enter any word");
document.write("User Input:" + " " + userInput + "<br>");
var len = userInput.length-1;
document.write("Last character of input" + " " + userInput.charAt(len));
//</script>

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

//<script>
var text = "the quick brown fox jumps over the lazy dog";
document.write("Text:" + text + "<br>");
var occur = (text.match(/the/g)).length;
document.write("There are two occurence(s) of word 'the' is" + " " + occur);
//</script>


