var $ = function(id) {
    return document.getElementById(id);
};

var processEntry= function(){
    var cents = $('cents').value;
    var q = $('quarters').value;
            var d = $('dimes').value;
            var n = $('nickels').value;
            var p = $('pennies').value;
    if (isNaN(cents)){
        alert("Entry is not valid!");
    }
    else if(cents<=0 || cents >99)
        {
            alert("Number must be between 0 to 99");
        }
    else if(cents >0 && cents<99)
        {   
            makeChange(cents);
        }
};
var  makeChange = function(cents){
   if ($("cents").value > 24)
   {
    if (cents > 24){
     q = Math.floor(cents/25); 
        var a1=cents%25;
    $("quarters").value = q
    }
    if (cents > 9){
    d = Math.floor(a1/10); 
        var a2=a1%10;
    $("dimes").value = d
    }
    if (cents > 4){
    n = Math.floor(a2/05); 
        var a3=a2%5;
    $("nickels").value = n
    }
    if (cents > 0) {
     p = Math.floor(a3/1);
    $("pennies").value = p
    }
    }

};

window.onload = function() {
    $("calculate").onclick = processEntry;
};