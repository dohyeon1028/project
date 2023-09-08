const header = document.querySelector("header");
const headerBox = document.querySelector(".headerBox");
const a = document.querySelector("#gnb li a");



window.addEventListener("scroll", ()=>{
    const scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if(scroll < 10){
        header.classList.remove("on"); 
        headerBox.style.height = `${150 - scroll * 7.5}px`;

        header.style.height = "150px";
    } 
    else if(scroll > 10){
        header.classList.add("on");
        headerBox.style.height = "75px";

        header.style.height = "75px";
    }

    
})