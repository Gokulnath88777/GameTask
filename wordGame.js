let words = ["sun","Watch","river","shadow","candle", "moon", "star", "mountain", "book", "rain", "clock", "fire", "tree", "mirror", "pencil"];

let gameClues = {
    sun: "Rises in the east and gives us light",
    Watch: "Shows time but never speaks",
    river: "Flows but never walks",
    shadow: "Follows you but has no body",
    candle: "Melts while giving light",
    moon: "Appears at night and changes shape",
    star: "Twinkles in the night sky",
    mountain: "Tall and rocky, touching the sky",
    book: "Contains stories or knowledge inside",
    rain: "Falls from clouds as water droplets",
    clock: "Tells time without speaking",
    fire: "Burns and gives warmth and light",
    tree: "Has leaves, branches, and grows from the ground",
    mirror: "Reflects whatever stands in front of me",
    pencil: "Used to write but can be erased"
};


let inputContainer=document.getElementById("inputContainer")
let guessmsg=document.getElementById("guessMsg")
let msg=document.getElementById("msg")
let userInput=document.getElementById("userInput")
let inputs=document.getElementsByClassName("inputs")
let guessbtn=document.getElementById("guessbtn")
let exitbtn=document.getElementById("exitbtn")
let resetbtn=document.getElementById("resetbtn")
let clue=document.getElementById("clue")

let checkWord

document.addEventListener("DOMContentLoaded",letterChange)

function letterChange()
{  
    let randomNumber=Math.floor(Math.random()*10)
    clue.innerHTML=gameClues[words[randomNumber]]

    let splitWords=words[randomNumber].split("")  

    checkWord=words[randomNumber]
    
    let hideIndexes = [];
    while (hideIndexes.length < 2) {
      let rand = Math.floor(Math.random() * splitWords.length);
      if (!hideIndexes.includes(rand)) hideIndexes.push(rand);
    }
  
        for (let i=0;i<splitWords.length;i++)
        {
            let input=document.createElement("input")
            input.type="text"
            input.className="inputs"
            input.setAttribute("disabled",true)

            if (hideIndexes.includes(i))
            { input.value=""}
            else
            {input.value=splitWords[i]}
            inputContainer.appendChild(input)
            console.log("page loaded")   
        }      
    }
let count=4
guessbtn.addEventListener("click",()=>
    {
        
        guessmsg.innerHTML=`you have ${count} remaining`
        
        
            if(checkWord.toLowerCase()==userInput.value.toLowerCase())
                {
               
                msg.textContent=`Good guess! The word has the letter ${checkWord}`
                msg.style.color="green";                
                }
            else if (count ==0)
                {
                    msg.style.color="red";
                    msg.textContent=`Sorry, you've run out of guesses. The word was ${checkWord}`   
                    userInput.value=""
                }
            else if(checkWord.toLowerCase()!=userInput.value.toLowerCase())
                {
                    console.log(checkWord)
                    msg.style.color="red";
                    msg.textContent=`Wrong guess! You have ${count} guesses left.`
                    count--;
                    userInput.value=""
                }
          
    })

resetbtn.addEventListener("click",()=>
{
  location.reload()
    
})









