let nav=document.getElementById("nav")
let navIcon=document.getElementById("navIcon")
let sideBar=document.getElementById("sideBar")

function sidebar()
{
    sideBar.classList.add("active")
}
function resized()
{
    if(window.innerWidth<700)
    {
        nav.style.visibility="hidden"
        navIcon.style.visibility="visible"
        navIcon.addEventListener("click",sidebar)
        
    }
    else
    {
        nav.style.visibility="visible"
        navIcon.style.visibility="hidden"
        sideBar.classList.remove("active")
    }
}

window.addEventListener("resize",resized)
