// x=null;
// y=undefined
// // Console is not a reserevd word but console is 


// //possible
// let age=24;
// age=20;
// age=22;
// console.log(age);

// let a;
// console.log(a);
// const PI=3.14;
// console.log(PI);



// //not possible   const a;

// //1 block
// {
//     let c=10;
//     console.log(c);
// }

// //2nd block....both are diff
// {
//     let c=16;
//     console.log(c);
// }

// //data types in JS
// //primitive and non PrIMITIVE

// //PRIMITIVE
// // 1)Number
// // 2)String
// // 3)Boolean
// // 4)undefined
// // 5)null
// // 6)BigInt
// // 7)Symbol

// let age=34;
// let price=100.25;
// let fullName="aashu"; 
// isfollow=true;
// let x;
// let y= null;    
// let a= BigInt("52345");
// let b = Symbol("hello");


////non primitive(object)
// const Student= {
//     fullNAME:"aasheesh",
//     age: 20,
//     cgpa:8,
//     isPass: true,
//     branch: "Cse ai"   
// };

// Student["fullNAME"]= "Ansh";

// console.log(Student["fullNAME"]);
// console.log(Student.age);
// console.log(Student.branch);


////some amazon product

// const product={
//     title:"BALL PEN",
//     rating:4.1,
//     price: 99,
//     isOffer:true
// };
// console.log(product);

//insta info
// const profile={
//     username:"@ _aasheesh_yadav_",
//     followers:100,
//     following:110,
// };

// console.log(typeof profile["followers"]);

//arithmetic operators
// let a=5;
// let b=3;

// console.log("a=",a,"and b=",b);
// console.log("a+b=",a+b); //8
// console.log("a-b=",a-b); //2
// console.log("a*b=",a*b); //15
// console.log("a/b=",a/b); //1.666666666667
// console.log("a%b=",a%b); //2
// console.log("a**b=",a**b); //125

//unary operator(increment and decrement)
// let a=5;
// let b=3;

// console.log("a=",a,"& b=",b);
// a++;
// console.log("a=",a);
// console.log("a=",a++);
// console.log("a=",++a);
// console.log("a=",a);

//assignment operator
// let a=5;

// a*=4;
// console.log("a=",a);

//conditional operator

// let age=20;
// if(age>=18){
//     console.log("you can vote");
// }


// let mode="light";
// let color;
// if(mode=="dark"){
//     color="black";
// }
// if(mode=="light"){
//     color="white";
// }
// console.log(color);


// let age=17;
// if(age>=18){
//    console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");
// }


// let num=330;
// if(num%2==0){
//     console.log(num,"is even");
// }
// else(console.log(num,"is odd"));

//Ternary Operators
//*****condition?true output:false output****

// let age=20;
// let result= age>=18?"adult" : "not adult";
// console.log(result);
// //or
// let age=20;
// age>=18?console.log("adult"):console.log("not adult");

// alert("ggg"); //for pop up message on screen

//prompt is for input  
// let num= prompt("Enter a number:");
// if(num%5==0){
// console.log(num,"is a multiple of 5");
// }
// else{
//     console.log(num,"is not a multiple of 5"); 
// }

//Q) write a code which give grades to studnets according to their marks:

// let marks=prompt("enter marks of student");
// if (marks>=80 && marks<=100){
//     console.log("A grade");
// }
// else if(marks>=70 && marks<=79){
//     console.log("Grade B");
// }
// else if(marks>=60 && marks<=69){
//     console.log("Grade C");
// }
// else if(marks>=50 && marks<=59){
//     console.log("Grade D");
// }
// else if(marks>=0 && marks<=49){
//     console.log("Grade F");
// }
// else {
//     console.log("marks not valid");
// }

//another way
// let marks=prompt("enter marks of student");
// let Grade;
// if (marks>=80 && marks<=100){
//     Grade="A";
// }
// else if(marks>=70 && marks<=79){
//     Grade="B";
// }
// else if(marks>=60 && marks<=69){
//     Grade="C";
// }
// else if(marks>=50 && marks<=59){
//    Grade="D";
// }
// else if(marks>=0 && marks<=49){
//    Grade="F";
// }
// else {
//     Grade="NOT VALID";
// }
// console.log("Your grade is:"+Grade);

//LOOPS
//FOR LOOP printing name 5 times
//  for(let i=0;i<5;i++){
//     console.log("aasheesh");
//  }

//sum of 1 to 100
// let sum=0;
// let i=1;
// for(i=1;i<=100;i++){
//     sum+=i;
// }
// console.log("sum",sum);
// console.log("loop has ended");

//  let i=1
//  for(i=1;i<6;i++){
//     console.log("i=",i);
//  }
//  console.log("now the value of i after terminating the code is:",i);

// let i=20;
// while(i<15){
//     console.log("hello"); 
// i++
// }


// let i=22;
// do{
// console.log("woow");
// i++;
// }
// while(i<=10);

// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<5); 


//for-of Loop  
// Purpose: The for...of statement iterates over the values of iterable objects.
// Applicability: Designed for use with iterable objects such as:
// Arrays
// Strings
// Maps
// Sets
// NodeLists (in the DOM)
// Behavior: It directly provides the value of each element in the iterable during each iteration.
//eXaMpLe
    // const numbers = [1, 2, 3];
    // for (const num of numbers) {
    //     console.log(num); // Outputs: 1, 2, 3
    // }


    // const greeting = "Hello";
    // let size=0;
    // for (const char of greeting) {
    //     console.log(char); // Outputs: H, e, l, l, o
    //     size++;
    // }
    // console.log("string size=",size);

//     for...in Loop:
// Purpose:
// The for...in statement iterates over the enumerable string properties (keys) of an object.
// Applicability:
// Primarily intended for iterating over the properties of plain JavaScript objects.
// Behavior:
// It provides the key (property name) of each enumerable property in the object during each iteration. To access the corresponding value, you must use bracket notation (e.g., object[key]).
// Caution:
// While for...in can also iterate over array indices, it is generally discouraged for arrays as it can include inherited properties and may not iterate in numerical order, making for...of or forEach more suitable for arrays.

    // const person = { name: "Alice", age: 30 };
    // for (const key in person) {
    //     console.log(`${key}: ${person[key]}`); // Outputs: name: Alice, age: 30
    // }


//Another simple way
// let Student={
//     name:"aasheesh",
//     branch:"cse ai",
//     cgpa:8.5,
//     isPass:true
// };
// for(let key in Student){
//     console.log("key=",key, "value=",Student[key]);
// }

//     Key Differences Summarized:
// What they iterate over:
// for...of iterates over values of iterables; for...in iterates over keys (property names) of objects.
// Primary Use Case:
// for...of for arrays, strings, and other iterable collections; for...in for object properties.
// Accessing Values:
// for...of directly provides values; for...in requires using the key to access the value from the object. 

//0 to 30 numbers
// let i=0;
// for(i=0;i<=30;i++){
//     console.log(i);
// }

//0 to 30 even no.

// for(let i=0;i<=30;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let gamenum=25;
// let usernum=prompt("guess the gamenum: ");

// if(usernum ==gamenum){
//     console.log("Congratulations, you have entered the right number :)")
// }
// else{
//     console.log("Wrong! Try again:");
// }

//OR
// let gamenum=25;
// let usernum=Number(prompt("guess the gamenum: "));

// if(usernum===gamenum){
//     console.log("Congratulations, you have entered the right number :)")
// }
// else{
//     console.log("Wrong! Try again:");
// }

//OR
//****To show a popup repeatedly until the correct number is guessed****
// let gamenum = 25;
// let usernum = Number(prompt("Guess the game number:"));

// while (usernum !== gamenum) {
//   usernum = Number(prompt("Wrong! Try again:")); // prompt again
// }

// console.log("Congratulations, you have entered the right number :)");

//OR
// let gameNum=25;
// let userNum=prompt("Guess the game number:");

// while(userNum!=gameNum){
//     userNum=prompt("You entered wrong number. Guess again:");
// }
// console.log("Congratulations, you have entered the right number :)");



//Strings 
// let str="hello";
// str.length;//5
// str[0];//'h'
// console.log(str[3],str[4]);//l o

//Template Literals
//a way to have embedded expressions in strings
// `this is a template literal`   (``)this is backtick
//STRING Interpolation
//to create stings by doing substitution of placeholders
//`string text ${expression} string text`

// let sentence=`this is template literal`;
// console.log(typeof sentence);

// let obj={
//     item:"pen",
//     price:10
// };
// //bad way but for understanding
// console.log("the cost of",obj.item,"is",obj.price,"rupees");


// let obj={
//     item:"pen",
//     price:10
// };
// //better way
// let output=`the cost of ${obj.item} is ${obj.price} rupees`
// console.log(output);

//escape character(used for next line) \n=next line, \t=tab  (\n and \t)takes only 1 length
// let a="had\nsghfdv\tkf";
// console.log(a);
// console.log(typeof a);
// console.log(a.length);//13
// console.log(a.toUpperCase());//these type of methods doesn't change the original strins because we know that strings are immutable :)

// let str="aasheesh";
// str.toUpperCase();
// console.log(str);//no change :( because strings are immutable so all changes will come in the new atrings
//OUTPUT: aasheesh


//another way
// let str="aasheesh";
// newstr=str.toUpperCase();
// console.log(str);
// console.log(newstr);//now it workes :)
// //output 
// // aasheesh
// // AASHEESH


// let str="aasheesh";
// str=str.toUpperCase();
// console.log(str);
// //output: AASHEESH

// let str="          gsdgv  gfvhj gdyuyg      ";
// console.log(str.trim());//gsdgv  gfvhj gdyuyg (it removes the spaces that are present at starting and ending)

// let str="helloo hi bye bye";
// console.log(str.slice(2,8));//lloo h (8 is not included in it)so (2,8) means from index 2 to 7

// let str1="hi bye bye";
// let str2="sfdhyjefs";
// console.log(str1.concat(str2));//hi bye byesfdhyjefs


//or
// let str1="hi bye bye";
// let str2="sfdhyjefs";
// let res=str2+str1;
// console.log(res);//sfdhyjefshi bye bye


// let str1="hi bye bye";
// console.log(str1.replace("bye","hi"));//hi hi bye(1st bye is replaced with hi)

// let str1="hihdsaghf";
// console.log(str1.charAt(7));//h

// ****************wooow****************************
// let fullname=prompt("enter your full name");
// let username="@"+fullname+fullname.length;
// console.log(username);
//output when i entered aasheeshyadav is = @aasheeshyadav13



//*****ARRAYS IN JAVASCRIPT****** they are mutable
// let arr=[21,24,53,13,22];
// console.log(arr[0]);
// arr[2]=56;
// console.log(arr);//53 is replaced by 56

// let arr=[10,93,55,75,99];
// for(let i=0;i<5;i++){
// // console.log(arr);// 5 times this array will be printed
// console.log(arr[i]);
// }

//for of loop
// let arr=[10,93,55,75,99];
// for(let key of arr ){
//     console.log(key);
// }

// let cities=["delhi","mumbai","pune","jaipur"];
// for(let city of cities){
//     console.log(city);
//     console.log(city.toLocaleUpperCase());
// }
//output
// delhi
// DELHI
// mumbai
// MUMBAI
// pune
// PUNE
// jaipur
// JAIPUR

// let arr=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<6;i++){
//     sum+=arr[i];
// }
// console.log(sum);//399

//or
// let arr=[85,97,44,37,76,60];
// let sum=0;
// for(let value of arr ){
//     sum+=value;
// }
// console.log(sum);//399
// let avg=sum/arr.length;
// console.log(`avg marks of the class is ${avg}`);


// let arr=[250,645,300,900,50];
//displace value of each element of an array after 10% discount
// for(let i=0;i<5;i++){
//     let offer=arr[i]/10;
//     arr[i]=arr[i]-offer;
// }
// console.log(arr);

//*****array methods*****//PUSH,POP,TOSTRING
// let arr=[12,221,12,34];
// console.log(arr.toString( ));

// let arr1=[1,2,3];
// let arr2=[9,8,7,6];
// let arr3=arr1.concat(arr2);
// console.log(arr3);//(7) [1, 2, 3, 9, 8, 7, 6]

//unshift array(add to start)
// let arr1=[1,2,3];
// console.log(arr1.unshift());//(3) [1, 2, 3]
// console.log(arr1.unshift(32));//(4) [32, 1, 2, 3]


//shift():delete from start and returm
// let arr1=[1,2,3];
// let val=arr1.shift();
// console.log(val);//1 (1 is displaying because shift return the valuen that is deleted from the start)


//slice() method (doesn't change in the original array)
// let arr=[10,20,230,321];
// let a=arr.slice(1,3);
// console.log(a);  //[20, 230]

//splice(): change original array(add,remove,replace)
//syntax  splice(startingIndex,howMANYdelete,ADDnewelement(is you want otherwise 3rd condition is optional))
// let arr=[1,2,3,4,5,6,7];
// arr.splice(2,3,98);  //[1, 2, 98, 6, 7]
//starting from index 2 i.e.,3   and from element 3 we are replacing 3 element of an array with 98  and after that 6,7 are as it is

//if we only have to add
// let arr=[1,2,3,4,5,6,7];
// arr.splice(2,0,98);  //[1, 2, 98, 3, 4, 5, 6, 7]
//from index 2 we are deleting 0 element and adding 98 on that index then rest of them are same  

//want to delete only one number  for eg. index 3 i.e,number=4
// let arr=[1,2,3,4,5,6,7];
// arr.splice(3,1);  //[1, 2, 3, 5, 6, 7]
// arr.splice(3,3);  //[1, 2, 3, 7]


//***replacing***
// let arr=[1,2,3,4,5,6,7];
// arr.splice(0,1,9);  //[9, 2, 3, 4, 5, 6, 7] array is changed...at index 0 we deleted 1 element and added new element as number 9


//if we write only one index in slpice then it will work as slice...it will delete all the element that are present after that 
// let arr=[1,2,3,4,5,6,7];
// console.log(arr.splice(4));   //[5, 6, 7]//all the values after index 4 will be deleted and we are left with arr=[1,2,3,4]

//ONE QUESTION)
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(1,1,"Ola");
// companies.push("Amazon");
// console.log(companies);


//functions: block of code that performs a precific task,can be invoked whenever needed

// function functionName(){
//     console.log("hello, welcome");
//     console.log("we are learning Js");
// }
// functionName();//calling or invoking function



// function myFunction(msg){
//     //parameter(in function definition)-->input
//     console.log(msg);
// }
// myFunction("hello, how are you?");//argument(value pass in function call)



// function myFunction(msg,n){
   
//     console.log(msg*n);//NaN error: not a number
// }
// myFunction("hello, how are you?",100);


// function sum(a,b){
//     //these a and b are local variables...they only exists in this scope only
//     //if we write a or b outside the function then it showa that a or b are not defined
//     s=a+b;
//     return s;//returns only 1 value
//     console.log("hi");//after return nothing will be executed as we can see console.log is faded unlike the console.log(val)
// }
// let val=sum(3,4);
// console.log(val);

//**********arrow functions*****
// const arrowSum= (a,b)=>{
//     console.log(a+b);
// }

//or
// const arrowSum= (a,b)=> console.log(a+b);


// const arrowMul=(a,b)=>{
//     console.log(a*b);
// }

//Q) Create a function using "function " keyword that takes a Strings as an argument and return the number of vowels in the string.

// function countvowels(str){
//     let count=0;
//     for(const char of str){ //for of loop
//         if(
//             char==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }

// Q) Create an arrow function to perform the same task 
// const countvow=(str)=>{
//      let count=0;
//     for(const char of str){ //for of loop
//         if(
//             char==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }



//****forEach loop*****(used for arrays)
//***forEach loop is a HIGHER ORDER FUNCTION(that either take another function as a parameter insider OR they return another function as their own  )
//array.forEach(callbackFunction)
//CallbackFunction: it is a function to execute for each element in the array

// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(Val){
//     console.log(Val);
// });
//output
//1
//2
//3
//4
//5

// or

// let arr=[1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(val)
// });
//output
//1
//2
//3
//4
//5

// let arr=["delhi","mumbai","pune"];
// arr.forEach(element => {
//     console.log(element.toUpperCase())
// });

//more functions of foreach callback function

// let arr=["delhi","mumbai","pune"];
// arr.forEach((val,ind,arr) => {
//     console.log(val.toUpperCase(),ind,arr)
// });
//output
// DELHI 0 (3) ['delhi', 'mumbai', 'pune']
// MUMBAI 1 (3) ['delhi', 'mumbai', 'pune']
// PUNE 2 (3) ['delhi', 'mumbai', 'pune']

//square
// let nums=[2,3,4,5,6];
// nums.forEach((num)=>{
//     console.log(num*num);
// })

//or
// let nums=[2,3,4,5,6];
// let calSquare=(num)=>{
//     console.log(num*num);
// }
// nums.forEach(calSquare);


//Array Methods

//*****Map*******(similar to for each) but in map it creates a new array eith the result of some operation. The value its callback returns are used to form new array*****
// arr.map(callbackFnx(value,index,array))

// let nu=[1,2,3,4,5];
// nu.map((val)=>{
//     console.log(val);
// })


//new array of same value

// let num=[1,2,3,4,5];
// let newArr=num.map((val)=>{
//     return val;
// });
// console.log(newArr);
//output: (5) [1, 2, 3, 4, 5]

//square of the value
// let num=[1,2,3,4,5];
// let newArr=num.map((val)=>{
//     return val*val;
// });
// console.log(newArr);
//output: (5) [1, 4, 9, 16, 25]


//*******filter method:(creates a new array of element that gives true for a condition/filter. eg. all even elements)************

// let newArr=[1,2,3,4,5,6,7];
// let evenARR=newArr.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenARR);


//****Reduce method******
//it performs some operations and reduce the array to a single value(like avg,sum etc brcause these are single values). It returns that single value

// let arr=[1,2,3,4,5,6];
// const output=arr.reduce((pre,curr)=>{//pre=previous, curr=current
//     return pre+curr; //at starting 1 is pre and 2 is current
// ;})
// console.log(output);//21


// //finding the largest no.
// let arr=[1,2,3,4,5,6];
// const output=arr.reduce((pre,curr)=>{
//     return pre>curr?pre:curr;
// ;})
// console.log(output);//6


//Q) finding the smallest no.
// let arr=[1,2,3,4,5,6];
// const output=arr.reduce((pre,curr)=>{
//     return pre<curr?pre:curr;
// ;})
// console.log(output);

//OR
// let arr=[1,2,3,4,5,6];
// const output=arr.reduce((pre,curr)=>{
//     return pre>curr?curr:pre;
// ;})
// console.log(output);

//filter out 90+ score
// let arr=[20,38,66,95,85,73,99];
// let GG=arr.filter((val)=>{
//     return val>90;
// })
// console.log(GG);
//output:  (2) [95, 99]


// Q) take a number n as input from user. create an array of numbers from 1 to n
// let n=prompt("enter a nuber:");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);


// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log("sum=",sum);


// let factorial=arr.reduce((res,curr)=>{
//     return res*curr;
// });
// console.log("factotrial=",factorial);