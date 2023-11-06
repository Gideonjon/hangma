const menu=document.querySelector(".menu");
const sideBar=document.querySelector(".sidebar")
const closeBtn=document.querySelector(".close")

menu.addEventListener("click",()=>{
    sideBar.classList.add("active")
})

closeBtn.addEventListener("click",()=>{
    sideBar.classList.remove("active")
})