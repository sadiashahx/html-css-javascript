//Chp # 17-20: Arrays and Loops

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)  ?

var x = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

// 2. Declare and initialize a multidimensional array representing the following matrix ?

//<script>
var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];
document.write("<br>" + matrix[0]);
document.write("<br>" + matrix[1]);
document.write("<br>" + matrix[2]);
//</script>

// 3. Write a program to print numeric counting from 1 to 10 ?

//<script>
var num = [1,2,3,4,5,6,7,8,9,10];
for(i=0; i<=9; i++){
    document.write("<br>" + num[i]);
}
//</script>

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user ?

//<script>
var table = +prompt("Enter number to generate table");
for(var k=1; k<=10; k++){
    document.write("<br>" + (table*k));
}
//</script>

// 5.  Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] ?

//<script>
var fruits = ["apple","banana","mango","orange","strawberry"];
document.write("<br>" + fruits);
for(var j=0; j<=4; j++){
document.write("Element at index" + " " + [j] + " " + fruits[j] + "<br>");
}
//</script>

// 6.  Generate the following series in your browser. See example output ?

//<script>
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
document.write("Counting:");
for(var a=0; a<=14; a++){
    document.write(" " + numbers[a]);
}
document.write("<br>" + "Reverse Counting:");
for(var a=0; a<=9; a++){
    document.write(" " + numbers[9-a]);
}
document.write("<br>" + "Even:");
for(var a=0; a<=19; a+=2){
    document.write(" " + numbers[a+1]);
}
document.write("<br>" + "Odd:");
for(var a=2; a<=20; a+=2){
    document.write(" " + numbers[a-2]);
}
document.write("<br>" + "Series:");
for(var a=0; a<=19; a+=2){
    document.write(" " + numbers[a+1] + "k");
}
//</script>

// 7.  You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not ?

//<script>
var x = ["cake","apple pie","cookie","chips","patties"];
var user = prompt("Search");
if(user==x[0] || user==x[1] || user==x[2] || user==x[3]){
    document.write("Item is found in the list");
}
else{
    document.write("Item is not found in the list");
}
//</script>

// 8. Write a program to identify the largest number in the given array ?

//<script>
var item = [25,53,78,91,12];
document.write("Array items:\n" + item);
var largestNum = Math.max(...item);
document.write("Largest Number:\n" + largestNum);

//</script>

// 9.  Write a program to identify the smallest number in the given array ?

//<script>
var items = [25,53,78,91,12];
document.write("Array items:\n" + items);
var smallestNum = Math.min(...items);
document.write("Smallest Number:\n" + smallestNum);
//</script> 

// 10. Write a program to print multiples of 5 ranging 1 to 100 ?

//<script>
var numm = 5;
for(v=1; v<=20; v++){
    document.write(" " + numm*v);
}
//</script>