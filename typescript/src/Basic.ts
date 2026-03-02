
//Primitive Types
let name:string='salman';
let age:number=24;
let isStudent: boolean=true;
let notSure:any='could be anything'

//Array Types
let numbers:number[]=[1,2,4]
let strings:Array <string> =["salman","hossen"];
let mixed:(number|boolean |string)[]=[1,2,3,"salman",true];

export{}

//Objects
let user:{
   name:string;
   age:number;
   gender:'male'|'female';
   isStudent?:boolean
}={
   name:"salman",
   age:22,
   gender:"male"
}

