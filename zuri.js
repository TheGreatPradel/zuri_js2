function addition(firstnum,secondnum){
    return firstnum +  secondnum
}

function subtraction(firstnum,secondnum){
    return firstnum - secondnum
}

function division(firstnum,secondnum){
    return firstnum / secondnum
}

function multiplication(firstnum,secondnum){
    return firstnum * secondnum
}
while (true) { 
 var firstnum = prompt("input first number", "Number")
 var secondnum = prompt("input second number", "Number")
 var action = prompt("+,*,/,-", "action")
 let a = parseInt(firstnum, 10)
 let b = parseInt(secondnum, 10)

if (action == "+"){
 addition(a,b)
 let result = addition (a,b)
alert(result)
 
    }   
 

if (action == "-"){
    subtraction(a,b) 
 let result = subtraction (a,b)
 alert(result)
       }   
    
   

if  (action == "*"){
    multiplication(a,b) 
    let result = multiplication (a,b)
    alert(result)
       }   
    
  
   
if (action == "/"){
    division(a,b) 
    let result = division (a,b)
    alert(result)
       }   
    }

    
  
      

