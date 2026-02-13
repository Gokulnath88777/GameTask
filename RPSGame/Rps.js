let rockimg=document.querySelectorAll(".rock")
let paperimg=document.querySelectorAll(".paper")
let scissorimg=document.querySelectorAll(".scissor")
let winDisp=document.getElementById("winDispaly")
let score=document.getElementById("score")
let resetbtn=document.getElementById("resetbtn")
let clashAnimate=document.getElementById("clashAnimate")
console.log(rockimg)
let playScore=0
let computScore=0



function computer(event)
{
    let items=["rock","paper","scissor"]
    let guess=items[Math.floor(Math.random()*items.length)]
    if((guess=="rock" && event.className=="paper") || (guess=="paper" && event.className=="scissor") || (guess=="scissor" && event.className=="rock"))
    {
        playScore++
        winDisp.textContent="You Win"
        winDisp.style.backgroundColor="Green"
        winDisp.style.color="white"
        score.textContent=`${computScore} - ${playScore}`
        console.log(guess)
        
    }
    else if(event.className=="rock" && guess=="paper" || event.className=="paper" && guess=="scissor" || event.className=="scissor" && guess=="rock")
    {
        computScore++
        winDisp.textContent="Computer Win"
        winDisp.style.backgroundColor="red"
        winDisp.style.color="white"
        score.textContent=`${computScore} - ${playScore}`
        console.log(guess)
       
    }
    else
    {
        winDisp.style.backgroundColor="grey"
        winDisp.textContent="Tie!"
        score.textContent=`${computScore} - ${playScore}`
     
    }
     
    hideAll()
   clashAnimate.style.visibility="visible"
  
   rockimg[1].style.visibility="hidden"
   paperimg[1].style.visibility="hidden"
   scissorimg[1].style.visibility="hidden"

   if(event.className=="rock")
   {
       rockimg[1].style.visibility="visible"
      
   }
   if(event.className=="paper")
   {
       paperimg[1].style.visibility="visible"
      
   }
   if(event.className=="scissor")
   {
       scissorimg[1].style.visibility="visible"
      
   }

   let computerImg = {
    rock: rockimg[1],
    paper: paperimg[1],
    scissor: scissorimg[1]
  };

  computerImg[guess].style.visibility = "visible";

  
 
  setTimeout(() => {
   
    rockimg[1].style.visibility="hidden"
    paperimg[1].style.visibility="hidden"
    scissorimg[1].style.visibility="hidden"
    clashAnimate.style.visibility = "hidden";

  }, 900);
 

  

}
function hideAll() {
    document.querySelectorAll(".choice").forEach(img => {
      img.classList.remove("to-center");
    });
  }
  

rockimg[0].addEventListener("click",()=>
{   computer(rockimg[0])   
})
paperimg[0].addEventListener("click",()=>
{
computer(paperimg[0])
})
scissorimg[0].addEventListener("click",()=>
{
    computer(scissorimg[0])

})



resetbtn.addEventListener("click",()=>
{
   let result= confirm("Are you sure you want to reset")
    if(result)
    {
        location.reload()
    } 
})

