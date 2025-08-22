// let div=document.querySelector("div");
// console.log(div);
// div.style.backgroundColor="green";
// div.innerText="why"; //hi text in the div box changes to why
// div.style.visibility="hidden";//hiddes the box

//**********DOM Manipulation************8(insert/delete element)

//first create new element then add or delete
//SYNTAX: let ele=document.createElement("div")

//****INSERT ELEMENT****
//1)node.append(el): adds at the end of node(inside)
//2)node.prepend(el):adds at the start of node(inside)
//3)node.before(el);adds before the node(outside)
//4)node.after():adds after the node(outside)

//******DELETE ELEMENT*******
//1)node.remove():remove the node


// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// console.log(newbtn);
 
// let div=document.querySelector("div");
// div.append(newbtn);//button will come at the end of the div but inside the div box
// div.prepend(newbtn);//sabse phele aa gya button
// div.before(newbtn);//button div ke upar aa gya(div ke bhi upar above box means outside)
// div.after(newbtn);//div box ke bhar sabse niche aa gya



// if we want ki button div ke bhi baad aur if usme paragragh hai div ke bhar uske bhi niche aaye button  to queryselector me paragraph le lenge
// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// console.log(newbtn);
 
// let p=document.querySelector("p");
// p.after(newbtn);//like this :)


//creating some heading and adding on the top
// let newheading=document.createElement("h1");
// newheading.innerHTML= "<i>hi,doing something new :)</i>";

// document.querySelector("body").prepend(newheading);


//deleting the existing paragragh
// let para=document.querySelector("p");
// console.log(para);
// para.remove();


//Q)create a new button element.give it a text "click me", background color red and text color of white(use JS only (no html))
//then insert the button as the first element inside body tag

// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
 
// document.querySelector("body").prepend(newbtn);


//Q) Crete a <p> tag in html, give it a class and some styling. Now create a new class in css and try to append this classto the <p> element. 
//Did you notice,how you overwrite the class name when you add a new one? solve this problem using classList

// let para=document.querySelector("p");
// para.classList.add("newclass");
// para.classList.remove("newclass")


//***********EVENTS************
// let button=document.querySelector("button");
// button.onclick=()=>{  //arrow function
//     console.log("button was clicked");
//     let a=25;
//     a++;
//     console.log(a)
// }

// let box=document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("hiiiiii");
// }

//inline handling in html has less priority than the javascript handling

//****Event Object****: it is a special object that has details about the event
//All event handlers have access to the event object's properties and methods.
//syntax:
//node.event=(e)=>{}
//e is event object(its a variable, we can write evnt or event or ev anthing in the bracket)

// let box=document.querySelector("div");
// box.onmouseover=(e)=>{
//     console.log(e);
//     console.log(e.type);//mouseover
//     console.log(e.target);//<div>this is a box</div>
//     console.log(e.clientX,e.clientY);//87 134
// }
//output:Mouse event and bla bla bla.......


//******eVENT lISTERNERS*******(BETTER than JS event handling because in JS event handling we can handle only one function at a time)
//SYNTAX:node.addEventListener(event,callback)   callback(event handler):dusre function me argument ke jagah jata hai
//node.removeEventListener(event,callback)


// let btn=document.querySelector("button");
// btn.addEventListener("click",(evt)=>{
//     console.log("button was clicked");
//     console.log(evt);
// });

// let div=document.querySelector("div");
// div.addEventListener("click",()=>{
//     console.log("inside the box")
// });



//************hmmmmmm***************
// div.removeEventListener("click",()=>{
//     console.log("inside the box");
// });
// //remove nhi hua :(


// let div=document.querySelector("div");


// div.addEventListener("click",()=>{
//     console.log("inside the box-handler1")
// });

// div.addEventListener("click",()=>{
//     console.log("inside the box-handler2")
// });

// const handler3=()=>{
//      console.log("inside the box-handler3")
// };
// div.addEventListener("click",handler3);


// div.addEventListener("click",()=>{
//     console.log("inside the box-handler4")
// });
//suppose i want to remove handler3
//to mujhe uske callback function ko alag variable banana padega(so agar kabhi lage ki is event ko remove karunga zarurat aane pe to uske callback function ko variable le lo baad me esay rahega)
//NOWWWWWWWWW

// div.removeEventListener("click",handler3);

//Q) Create a toggle button that changes the screen to dark-mode wehn clicked and light-mode when clicked again.
// let modebtn=document.querySelector("#mode");
// let currmode="light";
// modebtn.addEventListener("click",()=>{
//     if(currmode =="light"){
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currmode="light";
//          document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currmode);
// }); 