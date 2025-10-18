


//toggle - menu
const menu = document.querySelector(".span");

menu.addEventListener("click",()=>{
    const k = document.querySelector('.bi-list')
    const l = document.querySelector('.bi-x-lg')
    const nav = document.getElementById("nav-links")

    k.classList.toggle("ativar")
    l.classList.toggle("ativar")
    nav.classList.toggle("ativar")
})

const animate = document.querySelectorAll(".animate-fade");
const animateUp = document.querySelectorAll(".animate-up");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("ativar");
        }else{
            entry.target.classList.remove('ativar');
        }
    });
});

animate.forEach(el =>{
    observer.observe(el);
})
animateUp.forEach(el =>{
    observer.observe(el);
})



