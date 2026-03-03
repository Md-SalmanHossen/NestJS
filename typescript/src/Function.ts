

//Parameter and return type
function multiply(a:number,b:number):number{
   return a*b;
}

//Arrow function
const add=(a:number,b:number)=>{
   return a+b;
}

//Optional parameters
const greet=(name:string,greeting?:string):string=>{
   return `${greeting|| 'Hello'}, ${name}`
}

//Default Parameters
const greetWith=(name:string,greeting='Hello'):string=>{
   return `${greeting}, ${name}`
}
