var price=45;
var yearProduction=[
{"period":"January","production":1876,"days":31},
{"period":"Febuary","production":1876,"days":28},
{"period":"March","production":1876,"days":31},
{"period":"April","production":1876,"days":30},
{"period":"May","production":1876,"days":31},
{"period":"June","production":1876,"days":30},
{"period":"July","production":1876,"days":31},
{"period":"August","production":1876,"days":31},
{"period":"September","production":1876,"days":30},
{"period":"October","production":1876,"days":31},
{"period":"November","production":1876,"days":30},
{"period":"December","production":1876,"days":31},
    
];{"period":"July","production":1876,"days":31},
{"period":"August","production":1876,"days":31},
{"period":"September","production":1876,"days":30},
{"period":"October","production":1876,"days":31},
{"period":"November","production":1876,"days":30},
{"period":"December","production":1876,"days":31},
    
];
function getPrice(){
    document.getElementById("price").style.display="block";
    document.getElementById('addform').style.display='none';
    document.getElementById("summaryholder").style.display="none";
}
function getShed(){
    document.getElementById("headholder").innerHTML="Production per shed";
    document.getElementById("addform").style.display="none";
    document.getElementById("price").style.display="none"
    document.getElementById("summaryholder").style.display="none";
    var table = document.getElementById("data");
    table.innerHTML="";
    var tr="";
    dailyProduction.forEach(x=>{
       tr+='<tr>';
       tr+='<td>'+'Your production from '+x.name+'</td>'+'<td>'+x.amount+' liters per day'+'</td>';
       tr+='</tr>'
    })
    var sum = dailyProduction.reduce(function (total, currentValue) {
        return total + currentValue.amount;
    }, 0);
    tr+="<tr style='font-weight:bold';><td> Total</td><td>"+sum +" litres per day</td><td></td></tr>";
    table.innerHTML+=tr;
}
function addData(){
    document.getElementById('addform').style.display='block';
    document.getElementById('price').style.display="none";
    document.getElementById("summaryholder").style.display="none";
    
}
    
