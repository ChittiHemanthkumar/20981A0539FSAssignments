let Id:number=539; 
let Name:string="Hemanthkumar";  
let Bool:boolean=true; 
let Arr:number[]=[1,2,3];  
console.log("Basic types: ");
console.log(`${Id}\n${Name}\n${Bool}\n${Arr}`);


let Tuple:[string,number]=["Hemanth",539];  
console.log(" ");
console.log("Tuple:");
console.log(Tuple);


enum Size{small=1,medium=2,large=3}; 
let mysize:Size=Size.medium;   
console.log(" ");
console.log("enum:");
console.log(mysize);

function Add(num1:number,num2:number){

    return num1+num2;
}
let num1:number=1; 
let num2:number=2;
console.log("Function: ");
console.log(num1,"+",num2,"=",Add(num1,num2));
 
function capitalize(str:string=""):string{
    return str.charAt(0).toUpperCase()+str.slice(1);
}
console.log("  ")
console.log("capitalize function:");
console.log(capitalize("hemanth"));

interface Person{
    name:string, 
    age:number, 
    email:string
}
 let user:Person={
    name:"Hemanth", 
    age:21, 
    email:"20981a0539@raghuenggcollege.in"
 }
 console.log("  ")
 console.log("Interfaces: "); 
 console.log(user.name) 
 console.log(user.age) 
 console.log(user.email)
class Car{
    make:string; 
    model:string; 
    year:number;
    constructor(make,model,year){
        this.make=make; 
        this.model=model; 
        this.year=year;
    }
    display()
    {
     console.log(`year ${this.year}`);
    }
} 
console.log("  ")
console.log("Class: ");
const car= new Car("car1","TATA",2020);
console.log(`${car.model}`);
car.display();
 
console.log(" ")  
console.log("Generics") 
 
function reversed<Type>(arr:Array<Type>):Array<Type>{
    return arr.reverse();
} 
console.log(reversed([1,2,3,4,5]));