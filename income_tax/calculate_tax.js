"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var processEntry = function() {
  var income = parseInt($("income").value);
    if (isNaN(income)){
        alert("Entry must be numeric");
    }
    else if(income <= 0 ){
        alert("The value of income must be greater than 0");
    }
    else{
        var tax = calculateTax(income); 
        $("tax").value = tax.toFixed(2);
        $("income").focus();
    }
};

function calculateTax(amount){
    var tax;

    if(amount > 0 && amount <= 9275)
    {
        tax = amount * 0.10;
    }
    else if(amount > 9275 && amount <= 37650)
    {
        amount = amount - 9275;
        tax = amount * 0.15;
        tax = tax + 927.50;
    }
    else if(amount > 91150 && amount <= 190150)
    {
        amount = amount - 91150;
        tax = amount * 0.28;
        tax = tax + 18558.75;
    }
    else if(amount > 190150 && amount <= 413350)
    {
        amount = amount - 190150;
        tax = amount * 0.33;
        tax = tax + 46278.75;
    }
    else if(amount > 413350 && amount <= 415050)
    {
        amount = amount - 413350;
        tax = amount * 0.35;
        tax = tax + 119934.75;
    }
    else if(amount > 415050){
        amount = amount - 415050;
        tax = amount * 0.396;
        tax = tax + 120529.75;
    }
   
    return tax;
    
};

window.onload = function () {
    $("calculate").onclick = processEntry;
    $("income").focus();
};
