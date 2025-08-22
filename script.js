// console.log("hello");
// alert("how are you");

// //window object is a global object with lots of properties and methods.
// //it reprresents an open window in a browser. It is browser's object(not javascript's) and is automatically created by browser
// //console.log is a part of window object
// window.console.log("hellooooo");

//DOM:document object model
//console.log(used to print)
// console.dir(prints properties or method of document of special object)

//when the web page is loaded, the browser creates a DOM of the page

// console.dir(window.document);
// console.dir(document.body);

//DOM Manipulation

//*****methods of accessing elements*******
//1)SELECTING WITH ID.....IF id element is not existing like agar bracket me heading ke alawa kuch aur likha hota than null aaega likha
// let heading=document.getElementById("heading");//h1
// console.dir(heading);


//2)SELECTING WITH CLASS.....if class element is not existing then lrngth=0 aaega likha(empty html collection)
// let para=document.getElementsByClassName("para");
// console.dir(para);
// console.log(para);


//3)selecting with tag
 
// let abc=document.getElementsByTagName("p");
// console.dir(abc);


//4) Query selector:(it returns node list)isme id,class,tag tino likh sakte hai ye khud detect kar lega konsa element chaiye

// let element=document.querySelector("p");//1st element
// console.dir(element);
//output: p.para
 
// let abx=document.querySelectorAll("p");//all element
// console.dir(abx);
//output:NodeList(2)

// let abc=document.querySelectorAll(".para");//for class
// console.dir(abc);
//output:NodeList(2)

// let abc=document.querySelector("#heading");//for id
// console.dir(abc);
//h1#heading


//Properties

//1)tagName:returnstag for element nodes
//The tagName property returns the tag name (in uppercase) of an HTML element.
//syntax: element.tagName
//The tag name is always returned in UPPERCASE (even if written in lowercase in HTML).

// let el = document.getElementById("myDiv");
// console.log(el.tagName); // Output: "DIV"


//2)innerText / textContent: returnsthe text content of the element and all its children(only text aata aata hai)

// let div=document.querySelector("div");
// console.dir(div);

//3)innerHTML: returns the plain text or HTML contents in the elements(text + content dono aate hai)

//from 2nd and 3rd humne value get karli but hum value ko set bhi kar sakte hai like div.innertext="abcd"; then abcd value ho jaegi
// let xyz=document.querySelector("h3");
//after this above statement i wrote these things in console 
//xyz----->(this)
//<h3>​Fruits​</h3>​---->(this was printed after that)
//xyz.innerText="kya bolti public"---->(then i give this command)
//'kya bolti public'--->(this prints in h3 heading :)


//4) textContent:returns textual content even for hidden elements

// let heading=document.querySelector("h1");

//after this aisa kiya console me 
// heading(ye likha console me)
// <h1 style=visibility:​ hidden">​old heading​</h1>​(ye aaya likha)
// heading.innerText(then ye likha)
// ''(ye aaya means hide kiya hua hai usko nhi dikh rha hume usme kuch)
// heading.textContent(le likha)
// 'old heading'(ye aaya....ki ye chiz hidden hai)


//Q) Create a H2 heading element with text-"Hello JavaScript".Append "from MAIT student"to this text using JS.

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText="Abcde";//is se Abcde value ho jaegi uski but hume ye nhi chaiye
// h2.innerText=h2.innerText+" from MAIT student"

//Q) Create 3 divs with common class name-"box".Access them and add some unique text to each of them

// let divs= document.querySelectorAll(".box");
// // console.dir(divs[0]);
// for(let div of divs){
//     console.log(div);
//     console.log(div.innerText);
// }

// yaha pe har div ko alag value de rhe hai...100 div honge to 100 baar deni padegi value but loop me 2-3 line me hi kaam hi gya
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";



// let divs=document.querySelectorAll(".box");
//  let idx=1;
//  for(let div of divs){
//     div.innerText=`new unique value ${idx}`;
//     idx++;
//  }


//Attributes 
// 1. Get an Attribute

// element.getAttribute("attributeName");

// ✅ Example:
// let link = document.querySelector("a");
// console.log(link.getAttribute("href"));


// 🔸 2. Set an Attribute

// element.setAttribute("attributeName", "value");
// ✅ Example:
// link.setAttribute("href", "https://example.com");


// 🔸 3. Remove an Attribute

// element.removeAttribute("attributeName");
// ✅ Example:
// link.removeAttribute("target");


// 🔸 4. Check if Attribute Exists

// element.hasAttribute("attributeName");
// ✅ Example:
// if (link.hasAttribute("href")) {
//   console.log("Link has href");
// }


// 🔸 5. Direct Property Access (for some attributes)
// Some common attributes like id, className, value, etc., can be accessed/updated directly:


// element.id = "myDiv";
// element.className = "highlight";
// element.value = "Hello"; // for input elements


