var empty = [];
var arr = [0, 1 , 2, 3];
document.write(arr[0] + " " + arr[1] + " "+ arr[2] + " " + arr[3]);
document.write(`<br>`);
document.write(arr[1] + " " + arr[0] + " "+ arr[1] + " " + arr[2]);
document.write(`<br>`);
document.write(arr[2] + " " + arr[0] + " "+ arr[2] + " " + arr[1]);
document.write(`<br>`);
for (var i = 0; i <= 10; i++) {
    document.write(i + "<br>");
}


// next
var table = prompt("Enter the number for the multiplication table:");
    var length = prompt("Enter the length of the multiplication table:");

    document.write("Multiplication Table of " + table + ":<br><br>");
    for (var i = 1; i <= length; i++) {
        document.write(table + " x " + i + " = " + (table * i) + "<br>");
    }

    // next
    document.write(`<br>`);
    var fruits = ["apple", "banana", "orange" , "mango"];

    for (var i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    document.write(`<br>`);
    document.write("Element at index 0 is" + " " + fruits[0]);
    document.write(`<br>`);
    document.write("Element at index 1 is" + " " + fruits[1]);
    document.write(`<br>`);
    document.write("Element at index 2 is" + " " + fruits[2]);
    document.write(`<br>`);
    document.write("Element at index 3 is" + " " + fruits[3]);
    document.write(`<br>`);

    // next
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Forward Counting</h1>`);
    for (var i = 1; i <= 15; i++) {
        document.write(i + "<br>");
    }
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Backward Counting</h1>`);
    for (var i = 10; i >= 1; i--) {
        document.write(i + "<br>");
    }
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Even numbers</h1>`);
    for (var i = 0; i <= 20; i += 2) {
        document.write(i + "<br>");
    }
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Odd number</h1>`);
    for (var i = 1; i < 20; i += 2) {
        document.write(i + "<br>");
    }
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<h1>Series</h1>`);
    for (var i = 1; i <= 20; i += 2) {
        document.write(i + "K" + "<br>");
    }


    // next

    var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
    var askBakery = prompt("Enter a bakery item:");
    
    var found = false;
    
    for (var i = 0; i < bakery.length; i++) {
        if (bakery[i].toLowerCase() === askBakery.toLowerCase()) {
            found = true; 
            break; 
        }
    }
    
    if (found) {
        alert("Yes, " + askBakery + " is available!");
    } else {
        alert("Sorry, " + askBakery + " is not available.");
    }

    // next

    var numbers = [34, 89, 100, 45, 78, 443];
    document.write(numbers);
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]; 
    }
}

document.write(" The largest number is: " + largest);

document.write(`<br>`);
// next

var numbers = [34, 89, 100, 45, 78, 443];
    document.write(numbers);
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < largest) {
        largest = numbers[i]; 
    }
}

document.write(" The smallest number is: " + largest);

//next
document.write(`<br>`);

for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        document.write(i + " ");
    }
}