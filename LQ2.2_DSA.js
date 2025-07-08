//Store the correct password
let password = "12345"; 

//using prompt there is dailog browser ask for user_name and user_password
let user_name = prompt("Enter your username:");
let user_password = prompt("Enter your password:");

//check if password is correct
if (user_password === password) {
//and gonna welcome the user if the password is correct
  alert(`Welcome ${user_name}`);
} else {
  //if the user put wrong password, username its say invalid 
  alert("Username or Password is Invalid or Does not Match");
}

//ask dog breed and how many times to print it
let dog_breed = prompt("Enter the dog breed:");
//use parseInt to make input number
let print_count = parseInt(prompt("How many times to print the dog breed?"));


//print dog breed have pre-increment/counter its adds (1) before it’s used in an expression
in the console
for (let i = 0; i < print_count; i++) {
  console.log(dog_breed);
}

//the list of choices in the console
console.log("Price List:");
console.log("A. Pepsi Cola      Php 30.00");
console.log("B. Coca Cola       Php 35.00");
console.log("C. Apple (per kg)  Php 100.00");
console.log("D. Orange (per kg) Php 120.00");
console.log("E. Hotdogs (per kg) Php 180.00");

//for item choice (A, B, C, D, E)
let item_Choice = prompt("Enter your item choice (A, B, C, D, E):");

//ask for quantity to be ordered
let QTY = parseInt(prompt("Enter the quantity:"));

let price = 0;
let itemName = "";

//switch to check item choice and set price and item name
switch (item_Choice.toUpperCase()) {
  case "A":
    price = 30;
    itemName = "Pepsi Cola";
    break;
  case "B":
    price = 35;
    itemName = "Coca Cola";
    break;
  case "C":
    price = 100;
    itemName = "Apple";
    break;
  case "D":
    price = 120;
    itemName = "Orange";
    break;
  case "E":
    price = 180;
    itemName = "Hotdogs";
    break;
  default:
    alert("Invalid choice!");
    price = 0;
}

//calculate and show total only if valid choice
if (price > 0) {
  let total = price * QTY;
  alert(`You ordered ${QTY} ${itemName}(s). Total Price: ₱ ${total}.00`);
}



