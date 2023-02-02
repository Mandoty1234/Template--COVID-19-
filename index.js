
const menuBtn = document.querySelector(".menu-icon span");
const cancelBtn = document.querySelector(".cancel-icon");
const item = document.querySelector(".nav-item");
const nav = document.querySelector("nav");

menuBtn.onclick = ()=>{
    item.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    menuBtn.style.color="#ff1d20";
}
cancelBtn.onclick = ()=>{
    cancelBtn.style.color="#ff3d00";
    item.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
}

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 40){
        nav.classList.add("sticky");
        
    }
    else{
        nav.classList.remove("sticky");
        
    }
    
});

window.addEventListener("scroll",function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
    
});




