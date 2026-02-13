    let foodCombo = [
        "🍎", 
        "🍌", 
        "🍕", 
        "🍔",
        "🍟", 
        "🍩", 
        "🍦", 
        "☕" , 
        "🍎", 
        "🍌", 
        "🍕", 
        "🍔",
        "🍟", 
        "🍩", 
        "🍦", 
        "☕"  
    ];
let resetbtn=document.getElementById("reset")
let innerdiv=document.querySelectorAll(".innerContainer")
let scoreTag=document.getElementById("score")
let moveTag=document.getElementById("move")
let finded=document.getElementById("finded")
let card=document.querySelector(".card")
let scoreDisp=document.getElementById("scoreDisplay")
console.log(finded)
let randomNum=[]
function randomIndices()
    {
        while(randomNum.length<16)
        {
            let values=Math.floor(Math.random()*16)
            if(!randomNum.includes(values))
            {
                randomNum.push(values)
            }
       
        }
 }
    randomIndices()
    let lock=false
    let first=null
    let second=null
    let score=0
    let move=0
    innerdiv.forEach((div,index)=>
    {
        div.addEventListener("click",function()
        {
            let ptag=this.querySelector("p")
            if(lock)
                return;
            if(ptag.textContent=="?")
            {
                ptag.textContent=foodCombo[randomNum[index]]
               
            }
            if(first==this)return;
            if (!first)
            {
                first=this
            }
            else
            {
                second=this
                move++
                moveTag.textContent=`Move:${move}`
                let firstValue=first.querySelector("p").textContent
                let secondValue=second.querySelector("p").textContent
                if(firstValue==secondValue )
                {
                   
                    score++
                    scoreTag.textContent=`Score:${score}`
                     first.classList.add("correct")
                    second.classList.add("correct")
                     setTimeout(()=>
                    {
                        first.style.backgroundColor="green"
                        second.style.backgroundColor="green"
                        first.classList.remove("correct")
                        second.classList.remove("correct")
                        card.style.visibility="visible"
                        let p1=document.createElement("p")
                        p1.setAttribute("class","innerContainer")
                        p1.textContent=firstValue
                        finded.appendChild(p1)
                        first=null
                        second=null
                    },1000)
                  
                
                }
                   
            else
            {
                console.log("No matach")
                lock=true
                first.classList.add("wrong-left");
                second.classList.add("wrong-left")
                setTimeout(() => {
                first.classList.remove("wrong-left");
                second.classList.remove("wrong-left")
                first.classList.add("wrong-right");
                }, 50);
                setTimeout(() => {
                first.classList.remove("wrong-right");
                second.classList.remove("wrong-right")
                }, 100);

                setTimeout(()=>
                {
                    first.querySelector("p").textContent="?"
                    second.querySelector("p").textContent="?"
                    first.classList.remove("wrong")
                    second.classList.remove("wrong")
                    first=null
                    second=null
                    lock=false
                },1000)
            }
        }


        })
    })
resetbtn.addEventListener("click",()=>location.reload())
