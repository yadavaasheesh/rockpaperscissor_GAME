let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara= document.querySelector("#user-score");
const compScorepara= document.querySelector("#computer-score");

const generateComputerchoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame=()=>{
    // console.log("game was draw");
    msg.innerText="GAME DRAW";
    msg.style.backgroundColor="dimgray";
}

const showWinner=(userwin, Userchoice, comChoice)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText= userscore;
        console.log("you win :)");
        msg.innerText=`YOU WIN! Your ${Userchoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorepara.innerText= compscore;
        // console.log("you lose :(");
        msg.innerText=`YOU LOSE! Comp ${comChoice} beats your ${Userchoice}`;
        msg.style.backgroundColor="red";
    }

};  

const playgame=(Userchoice)=>{
    console.log("user choice=",Userchoice);
    const comChoice= generateComputerchoice();
    console.log("comp choice=", comChoice);

    if(Userchoice === comChoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(Userchoice==="rock"){
            //compchoice=scissor,paper because at rock it will be a draw
            userwin=comChoice==="scissor"? true:false;
        }
        else if(Userchoice==="paper"){
            //rock,scissor
            userwin=comChoice==="rock"? true:false;
        }
        else{
            //rock,paper
            userwin=comChoice==="paper"? true:false;
        }
        showWinner(userwin, Userchoice, comChoice);

    }
};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const Userchoice=choice.getAttribute("id");
    
        playgame(Userchoice);
    });
});