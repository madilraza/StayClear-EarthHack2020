
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("validationCustom01").value;
var password = document.getElementById("validationCustom02").value;
if ( username == "John123" && password == "snow456"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

const request = require('request');
let apiKey = '6587b886-157b-40c0-955a-c60949470856';
let city = 'Los Angeles';
let url = ``

request(url, function (err, response, body) {
    if(err) {
        console.log('error:', error)
    } else {
        console.log('body:', body);
    }
});

