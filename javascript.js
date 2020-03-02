var newPass = document.querySelector("#newPass");
var generate = document.querySelector("#generate");
var copy = document.querySelector("#copy");


var length = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","<",">"];

var generate = [];
var newPass = [];
var non = [];

// password length
document.getElementById("generate").addEventListener("click", function(event) {
    event.preventDefault();
    var length = prompt("How many characters do you want in your password? 1-15");
        
        
// }
    // lowercase?
    var lowerCase = confirm("Do you want lower case letters?");
   
        
    

    //uppercase?
    var uppercase = confirm("Do you want upper case letters?");


    //numbers?
    var number = confirm("Do you want numbers?");


    //symbols?
    var symbols = confirm("Do you want symbols?");
});



