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
    
];
let dailyProduction=[
    shed1={"name":"Shed A","amount": 510},
    shed2={"name":"Shed B","amount": 308}, 
    shed3={"name":"Shed C","amount":486}, 
    shed4={"name":"Shed D", "amount":572}
];

function getPrice(){
    document.getElementById("price").style.display="block";
    document.getElementById('addform').style.display='none';
}
function getShed(){
    document.getElementById("headholder").innerHTML="Production per shed";
    document.getElementById("addform").style.display="none";
    document.getElementById("price").style.display="none"
    var table = document.getElementById("data");
    table.innerHTML="";
    var tr="";
    dailyProduction.forEach(x=>{
       tr+='<tr>';
       tr+='<td>'+'Your production from '+x.name+'</td>'+'<td>'+x.amount+' liters per day'+'</td>';
       tr+='</tr>'
  
    })
    table.innerHTML+=tr;
}
function addData(){
    document.getElementById('addform').style.display='block';
    document.getElementById('price').style.display="none";
    
}
function getOut() {
    window.location.replace("index.html");
}
function getTotal(){
    document.getElementById("headholder").innerHTML="Production per Year";
    document.getElementById("addform").style.display="none";
    document.getElementById("price").style.display="none"
    var table = document.getElementById("data");
    table.innerHTML="";
    var tr="";
    yearProduction.forEach(x=>{
       tr+='<tr>';
       tr+='<td>'+'Your production from '+x.period+'</td>'+'<td>'+'Ksh '+x.production*x.days+' '+'</td>';
       tr+='</tr>'
  
    })
    table.innerHTML+=tr;
}
function getSummary(){
    document.getElementById("price").style.display="none";
    document.getElementById("addform").style.display="none";
    document.getElementById('price').style.display="block";
}
function incomeOvertime(currentprice) {
    let b=document.getElementById("cprice").value;
    let diff=b-price;
    var table = document.getElementById("tdata");
    table.innerHTML="";
    var n="";
    yearProduction.forEach(x=>{
       n+='<tr>';
       n+='<td>'+'Your income for '+x.period +'</td><td>'+x.production*x.days*price+'</td><td>'+
       x.production*x.days*b+'</td><td>'+x.days*x.production*diff+"</td>";
  
    });
    table.innerHTML+=n;
    
}