+//******Prototypes in JS***** 
//A javaScript object ia an entity having state and behavior(properties and method).
//JS objects have a special property called prototype
//we can set prototype using __proto__
//*IF object and prototype have same method,object's method will be used.

// const student={
//     fullname: "AASHEESH",
//     marks:90,
//     printMarks: function(){
//         console.log("marks=",this.marks);
//     }
// };


// const employee={
//     calcTax(){
//         console.log("tax rate is 15%");
//     },
// };

// const karan={
//     salary:50000,
//      calcTax(){
//         console.log("tax rate is 20%");
//     },
// }

// karan.__proto__=employee; 

//Classes in JS
//class is a program code template for creating objects.
//those objects will have some state(variables) and some behaviour(functions) inside it.


// class TATAcar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brandName=brand;
//     }
// }

// let punch= new TATAcar();//class se object banaya hai(punch is object)
// punch.setBrand("punch");
// let nexon= new TATAcar();
// punch.setBrand("nexon");


//*******constructor********
//IT IS A MEHTOD THAT automatically invoked by when new object is created and it is used to initialize object

// class TATAcar{
//     constructor(brand,mileage){
//         console.log("CREATING NEW OBJECT");
//         this.brand=brand;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
   

// let punch= new TATAcar("punch",10);//constructor call
// console.log(punch);
// let nexon= new TATAcar("nexon",7);
// console.log(nexon);



//****Inheritance****
// inheritance is passing down properties and method from parent class to child class

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{}
//     let obj= new Child();



// class person{
//     constructor(){
//         this.Species= "homosapiens";
//     }
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("SOLVE PROBLEM, build something")
//     }
// }
// class doctor extends person{
//     work(){
//         console.log("treats patients");
//     }
// }
// let aasheesh=new engineer();

//If THE child and parent have same methid,child's method will be used.[this is METHOD OVERRIDING]

//****SUPER keyword*****
//the super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
//super(args) this calls parent's constructor
//super.parentMethod(args)

// class person{
//     constructor(){
//         console.log("enter parent constructor");
//         this.Species= "homosapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
// }
// //child class me constructor hai to vo constructor super keyword ka use karke parent class ke const ko phele call karega
// class engineer extends person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super();//to invoke parent class constructor
//         this.branch=branch;
//         console.log("exit child constructor");
//     }
//     work(){
//         console.log("SOLVE PROBLEM, build something")
//     }
// }
// let enggObj=new engineer("chemical engineer");

//OUTPUT will be in this order 
// enter child constructor
// enter parent constructor  (super() invokes parent constructor)
// exit child constructor  



// class person1{
//     constructor(name){
//         this.Species= "homosapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class engineer extends person1 {
//     constructor(name){
        
//         super(name); 
//     }
//     work(){
//         console.log("SOLVE PROBLEM, build something")
//     }
// }
// let enggObj=new engineer("AASHEESH");

// Q) you are creating a website for you college. create a class User with 2 peoperties,name and email. it also has a method called viewData() that allows user to view website data.
//correct code hai niche but chl nhi rha
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;   
//     }
//     viewData(){
//         console.log(`Name: ${this.name}, Email: ${this.email}`);
//     }

// }
// let user1=new User("Aasheesh","abc@gmail.com");
// let user2=new User("ashu","abcde@gmail.com");

//Q)Create a new class called Admin which inheritsfrom User. Add a new method called editData to Admin that allows the admin to edit website data.

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;   
//     }
//     viewData(){
//         console.log(`Name: ${this.name}, Email: ${this.email}`);
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(newName,newEmail){
//         this.name=newName;
//         this.email=newEmail;
//         console.log(`Updated Name: ${this.name}, Updated Email: ${this.email}`);
//     }
// }

// let student1=new User("Aasheesh","abd@email.com");

//********error handling*************
// let a=2;
// let b=3;
// console.log("a=",a);
// console.log("b=",b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+c);
// console.log("a+b=",a-b);
// console.log("a+b=",a+b);
//if we run thid 3 console.log statement will not give error,but in 4th one it will give error that c is not defined.
//to the rest of the code will not execute whether they are right or wrong.
//to handle this we use try and catch block


// let a=2;
// let b=3;
// console.log("a=",a);
// console.log("b=",b);
// console.log("a+b=",a+b);
// try{
//     console.log("a+b=",a+c); //c is not defined 
// }
// catch(error){
//     console.log("An error occurred:", error.message);
// }
// console.log("a+b=",a-b);
// console.log("a+b=",a+b);
//In this case, the code will not stop executing after the error, and the catch block will handle the error gracefully.
//The catch block will log the error message, and the program will continue to execute the remaining code.
//This is useful for debugging and ensuring that your program can handle unexpected situations without crashing.
//You can also use the finally block to execute code that should run regardless of whether an error occurred or not.
//finally block will always execute
 
theEnd