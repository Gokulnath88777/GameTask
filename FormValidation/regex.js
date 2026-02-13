let userName=document.getElementById("name")
let errorMsg=document.querySelectorAll(".errorMsg")

let userNameReges=/^[a-zA-Z._ ]+$/

function userNameCheck()
{
    if(userName.value)
    {

    
    if(!userNameReges.test(userName.value.trim()))
    {
        errorMsg[0].style.visibility="visible"
        errorMsg[0].textContent="The user Name is invalid"
    }
    else
    {
        errorMsg[0].style.visibility="hidden"
        errorMsg[0].textContent=""
    }
    }
    else
    {
        errorMsg[0].style.visibility="visible"
        errorMsg[0].textContent="The Field is Empty"
    }
}




let password=document.getElementById("password")
let PasserrorMsg=document.querySelectorAll(".PasserrorMsg")

function passCheck()
{
    if(password.value)
    {
    PasserrorMsg[3].style.visibility="hidden"
    PasserrorMsg[3].textContent=""
    if(!/[A-Z]/.test(password.value))
    {
        PasserrorMsg[0].style.visibility="visible"
        PasserrorMsg[0].textContent="At least 1 uppercase letter (A–Z)"
    }
    else
    {
     PasserrorMsg[0].style.visibility="hidden"  
     PasserrorMsg[0].textContent=""
     
    }
    if(!/\d/.test(password.value))
    {
        PasserrorMsg[1].style.visibility="visible"
        PasserrorMsg[1].textContent="At least 1 number (0-9)"
    }
    else{
        PasserrorMsg[1].style.visibility="hidden"
        PasserrorMsg[1].textContent=""
    }
    if(password.value.length<8)
    {
        PasserrorMsg[2].style.visibility="visible"
        PasserrorMsg[2].textContent="Minimum 8 characters"
    }
    else
    {
     
        PasserrorMsg[2].style.visibility="hidden"
        PasserrorMsg[2].textContent=""   
    }

    }  
    else
    {
        PasserrorMsg[3].style.visibility="visible"
        PasserrorMsg[3].textContent="The Field is Empty"
    }

}
password.addEventListener("input",passCheck)

let phone=document.getElementById("phone")
let phoneRegex=/^[6-9]\d{9}$/

function phoneCheck()
{
    if(phone.value)
    {
    if(!phoneRegex.test(phone.value.trim()))
    {
        errorMsg[1].style.visibility="visible";
        errorMsg[1].textContent="The Phone Number is invalid"
    }
    else{
        errorMsg[1].style.visibility="hidden";
        errorMsg[1].textContent=""
    }

}
else
{
    errorMsg[1].style.visibility="visible"
    errorMsg[1].textContent="The Field is Empty"
}

}
let email=document.getElementById("email")
emailRegex=/^[a-zA-Z0-9.+_]+\@gmail\.com$/

function emailCheck()
{
   if(email.value)
   {
    if(!emailRegex.test(email.value.trim()))
    {
        errorMsg[2].style.visibility="visible"
        errorMsg[2].textContent="The email is invalid"
    }
    else
    {
        errorMsg[2].style.visibility="hidden"
        errorMsg[2].textContent=""
    }
}
else
{
    errorMsg[2].style.visibility="visible"
    errorMsg[2].textContent="The Field is Empty"
}
}

let submitbtn=document.getElementById("submitbtn")
console.log(submitbtn)
submitbtn.addEventListener("click",(event)=>
{
    event.preventDefault()
    userNameCheck()
    passCheck()
    phoneCheck()
    emailCheck()
   
})



