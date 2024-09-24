let userScore=0;
let compuerScore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userScorepara=document.querySelector("#user_score")
const computerScorepara=document.querySelector("#computer_score")
const genComuterChoice =()=>{
    //randomly chosed rock paper sessior
    const options=["rock","paper","sessior"];
    const randIdx=Math.floor( Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Was Draw,playagain!"
    msg.style.backgroundColor="pink"
   
}
const showWinner = (userWin,userChoice,computerChoice)=>{
    if (userWin) {
        userScore++;
        userScorepara.innerText=userScore
        console.log("you win")
        msg.innerText=`you win! ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compuerScore++;
        computerScorepara.innerText=compuerScore;
        console.log("you loss")
        msg.innerText=`you lost! ${computerChoice} beats ${userChoice}`
        msg.style.backgroundColor="red"
    }

}
const playGame=(userChoice)=>{
    console.log("user choice is =",userChoice)
    //generate computer choice ->modular
    const computerChoice = genComuterChoice();
    console.log("computer choice is =",computerChoice)
    if(userChoice===computerChoice){
        //game draw
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //sessior,paper
            userWin=computerChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //sessior,rock
            userWin=computerChoice==="sessior"?false:true;
        }else{
            // if(userChoice==="sessior"){
            //paper,rock
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
      
    }
   

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        // console.log("choice was clicked",userChoice)
        playGame(userChoice);
    })
})