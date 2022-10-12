/* console.log("Test"); */

let string="";
let buttons=document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

try{
if(e.target.innerHTML=="Back")
{
    string=""
    document.getElementById("display").innerHTML=string
}

else if(e.target.innerHTML=="Clear"){
  string=""
  document.getElementById("display").innerHTML=string
}

else if(e.target.innerHTML=="="){
        string=eval(string);        
        document.getElementById("display").innerHTML=string
        console.log(string)
    }
    else{
        string+=e.target.innerHTML;
        document.getElementById("display").innerHTML=string
    }
}
catch{
    string="Error, Please try again"
    document.getElementById("display").innerHTML=string
}

    })
    
    })


/* console.log(buttons) */