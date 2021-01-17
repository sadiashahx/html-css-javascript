//Chp # 14-16: Arrays

// 1. Declare an empty array using JS literal notation to store student names in future ?

var students = [];

// 2. Declare an empty array using JS object notation to store student names in future ?

var students = new Array();

// 3. Declare and initialize a strings array ?

var a = ["sadia","candy","shah"];

// 4.  Declare and initialize a numbers array ?

var num = [1,2,3.5,8];

// 5. Declare and initialize a boolean array ?

var bool = Boolean[true,false];

// 6. Declare and initialize a mixed array ?

var mixed = ["sadia","12345","shah",40];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like ?

//<script>
document.write("Qualification:\n");
var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil","PhD"];
document.write("1)\n\n" +qualification[0]);
document.write("2)\n\n" +qualification[1]);
document.write("3)\n\n" +qualification[2]);
document.write("4)\n\n" +qualification[3]);
document.write("5)\n\n" +qualification[4]);
document.write("6)\n\n" +qualification[5]);
document.write("7)\n\n" +qualification[6]);
document.write("8)\n\n" +qualification[7]);
//</script>

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like ?

//<script>
var studentNames = ["Michael","John","Tony"];
var studentScores = [320,230,480];
var totalMarks = 500;
var studentPercentage1 = (studentScores[0]/totalMarks)*100;
var studentPercentage2 = (studentScores[1]/totalMarks)*100;
var studentPercentage3 = (studentScores[2]/totalMarks)*100;
document.write("Score of \n" + studentNames[0] + "is \n" + studentScores[0] + "Percentage: \n" + studentPercentage1);
document.write("Score of \n" + studentNames[1] + "is \n" + studentScores[1] + "Percentage: \n" + studentPercentage2);
document.write("Score of \n" + studentNames[2] + "is \n" + studentScores[2] + "Percentage: \n" + studentPercentage3);
//</script>

// 9. Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. c. Add two more color to the beginning of the array. Display the updated array in your browser. d. Delete the first color in the array. Display the updated array in your browser. e. Delete the last color in the array. Display the updated array in your browser. f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then 
//remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.  

//<script>
//a.
var color = ["red","blue","yellow","white","black","green","orange","purple"];
var user = prompt(color,"what color wants to add to the beginning");
color.unshift(user);
document.write("Updated color names is:\n\n" + color);

//b.
var user1 = prompt(color,"what color wants to add to the end");
color.unshift(user1);
document.write("Updated color names is:\n\n" + color);

//c.
var user2 = prompt(color,"what color wants to add to the beginning");
var user3 = prompt(color,"what color wants to add to the beginning");
color.unshift(user2,user3);
document.write("Updated color names is:\n\n" + color);

//d.
var user4 = prompt(color,"Delete the first color");
color.shift(user4);
document.write("Updated color names is:\n\n" + color);

//e.
var user5 = prompt(color,"Delete the last color");
color.pop(user5);
document.write("Updated color names is:\n\n" + color);

//f.
var user6 = prompt(color," Which index wants to add color");
var user7 = prompt(color," How many colors wants to add");
var user8 = prompt(color," Add the color to desired position/index");
color.splice(user6,user7,user8);
document.write("Updated color names is:\n\n" + color);

//g.
var user9 = prompt(color," which index wants to delete color");
var user10 = prompt(color," how many colors wants to delete");
color.splice(user9,user10);
document.write("Updated color names is:\n\n" + color);
//</script>

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method ?

//<script>
var scores = [320,230,480,120];
document.write("Score of Students:\n\n" + scores);
scores.sort();
document.write("Ordered Score of Students:\n\n" + scores);
//</script>

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array ?

//<script>
var cities = ["karachi","lahore","islamabad"];
document.write("Cities list:\n\n" + cities);
var selectedCities = cities.copy();
document.write("Selected cities list:\n\n" + selectedCities);
//</script>

// 12.  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; ?

//<script>
var arr = ["This","is","my","cat"];
document.write("Array:\n\n" + arr);
var joinString = arr.join();
document.write("String:\n\n" + joinString);
//</script>

// 13.  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) ?

//<script>
document.write("Devices:\n\n");
var arr = ["keyboard","mouse","printer","monitor"];
document.write("List:\n\n" + arr)
for(var i=0; i<=3; i++){
    document.write("Out:\n\n" + arr[i]);
}
//</script>

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) ?

//<script>
document.write("Devices:\n\n");
var arrr = ["keyboard","mouse","printer","monitor"];
document.write("List:\n\n" + arrr)
for(var i=0; i<=3; i++){
    document.write("Out:\n\n" + arrr[3-i]);
}
//</script>

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method ?

//<script>
var phoneStore = ["Apple","Sumsung","Motorola","Nokia","Sony","Haier"];
document.write("List:\n\n" + phoneStore)
//</script>

