var $ = function (id) {
    "use strict";
    return document.getElementById(id); 
};

var  subtotal=document.getElementById('subtotal');
var  taxrate=document.getElementById('tax_rate');
var  tax=document.getElementById('sales_tax');
var  total=document.getElementById('total');


var processEntries= function(){
   "use strict";
  subtotal=$('subtotal').value;
  taxrate=$('tax_rate').value
 if (isNaN(subtotal) || isNaN(taxrate)) {
    alert("Both entries must be numeric");
  } 
    else if(subtotal <=0 || subtotal >10000)
    {
        alert("subtotal must be greater than 0 and less than 10000");   
  }
    else if(taxrate <=0 || taxrate >12)
        {
            alert("TaxRate must be greater than 0 and less than 12");
        }
    else{
        var salesTax = calculateTax(subtotal, taxrate);
        $("sales_tax").value = tax;
        var total = calculatetotal(subtotal, tax);    
        $("total").value = total;
  }
};

var calculateTax=function( subtotal, taxrate){
        tax = (subtotal*taxrate)/100;
        tax=tax.toFixed(2);
        return tax;
    };
    
var calculatetotal=function(subtotal,tax){
         total = (subtotal+tax);  
        return total;
    };


var clear = function()
{
    subtotal=$('subtotal').value="";
    subtotal=$('tax_rate').value="";
    subtotal=$('sales_tax').value="";
    subtotal=$('total').value="";
};
window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clear;
};
