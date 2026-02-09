let rockimg=document.getElementById("rock")
let paperimg=document.getElementById("paper")
let scissorimg=document.getElementById("scissor")
let winDisp=document.getElementById("winDispaly")
let score=document.getElementById("score")
let resetbtn=document.getElementById("resetbtn")

let playScore=0
let computScore=0
function computer(event)
{
let items=["rock","paper","scissor"]
let guess=items[Math.floor(Math.random()*items.length)]
    if((guess=="rock" && event.name=="paper") || (guess=="paper" && event.name=="scissor") || (guess=="scissor" && event.name=="rock"))
    {
        playScore++
        winDisp.textContent="You Win"
        winDisp.style.backgroundColor="Green"
        winDisp.style.color="white"
        score.textContent=`${computScore} - ${playScore}`
        
    }
    else if(event.name=="rock" && guess=="paper" || event.name=="paper" && guess=="scissor" || event.name=="scissor" && guess=="rock")
    {
        computScore++
        winDisp.textContent="Computer Win"
        winDisp.style.backgroundColor="red"
        winDisp.style.color="white"
        score.textContent=`${computScore} - ${playScore}`
       
    }
    else
    {
        winDisp.style.backgroundColor="grey"
        winDisp.textContent="Tie!"
        score.textContent=`${computScore} - ${playScore}`
     
    }
}

rockimg.addEventListener("click",()=>computer(rockimg))
paperimg.addEventListener("click",()=>computer(paperimg))
scissorimg.addEventListener("click",()=>computer(scissorimg))
resetbtn.addEventListener("click",()=>
{
   let result= confirm("Are you sure you want to reset")
    if(result)
    {
        location.reload()
    }
})

