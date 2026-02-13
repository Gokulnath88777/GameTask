let navIcon=document.getElementById("navIcon")
let navsidebar=document.getElementById("navsidebar")
let navSpan=document.querySelectorAll(".navSpan")

function sideBar()
{
    navsidebar.classList.toggle("navSidebarToggle")
    navIcon.classList.toggle("iconPosition")
    navSpan.forEach((navSpan)=>{navSpan.classList.toggle("navSpanToggle");
    console.log("clicked")})
   
  
}
navIcon.addEventListener("click",sideBar)

