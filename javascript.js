var newPass = document.querySelector("#newPass");
var generateEl = document.querySelector("#generate");
var copy = document.querySelector("#copy");
var lowBox = document.getElementById("#low");
var upBox = document.getElementById("#up");
var numBox = document.getElementById("#num");
var symBox = document.getElementById("#sym");

//var lowbox = document.querySelector("#")

var length = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","<",">"];






// password length
generateEl.addEventListener("click", function(event) {
    event.preventDefault();
   
    var length = prompt("How many characters do you want in your password? 1-15");
    var userLength = parseInt(length);
    
    var lowBox = document.querySelector("#low").checked;
    var upBox = document.querySelector("#up").checked;
    var numBox = document.querySelector("#num").checked;
    var symBox = document.querySelector("#sym").checked;
    

    var master = [];
    var password =[];
    // 
    // lowercase?
    if (lowBox === true) {
        for (var i = 0; i <= lowerCase.length; i++) {
            master.push(lowerCase[i])

        }
    
    }

    //uppercase?
    if (upBox === true) {
        for (var i = 0; i <= upperCase.length; i++) {
            master.push(upperCase[i])
        }
    }
    //numbers?
    if (numBox === true) {
        for (var i = 0; i <= number.length; i++) {
            master.push(number[i])
        }
    }
    //symbols?
    if (symBox === true) {
        for (var i = 0; i < symbols.length; i++) {
            master.push(symbols[i])
        }
    }
    for (var i = 0; i <= userLength; i++) {

        password.push(master[Math.floor(Math.random() * master.length)])
    }   
        newPass.textContent = password.join('');
        console.log(password);
        //password = password + master[randomIndex];
        
       
        

    console.log(master);
    console.log(password);
});


