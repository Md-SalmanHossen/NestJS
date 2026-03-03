
//Object
type UserObj={
   name:string,
   age:number,
   gender:'male'|'female'
}

//Interface
interface User{
   name:string,
   age:number,
   gender:'male'|'female'
}

interface Admin extends User{
   role:'admin' |'superadmin'
   permission:string[]
}

interface Customer extends User{
   purchaseHistory:string[]
}