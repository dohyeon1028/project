// frame

const frame = document.querySelector("#frame");
const panel = frame.querySelector(".panel");
const panel_lis = panel.querySelectorAll("li");
const interval = 3000;
let len = panel_lis.length;
// console.log(len)

init();
setInterval(() => {
    nextSlide();
}, interval);


function nextSlide(){

    const duration = 500;
    const initialValue = parseInt(panel.style.left);

    const targetValue = -200;
    const unit = "vw";

    const startTime = performance.now();

    function animate(time){
        const timeReal = time - startTime;
        const progress = timeReal / duration;
        const currentValue = initialValue + (targetValue - initialValue) * progress;
        panel.style.left = `${currentValue}${unit}`;

        if(progress < 1){
            requestAnimationFrame(animate);
        }else if(progress >= 1){
            panel.style.left = "-100vw";
            panel.append(panel.firstElementChild);
            enableClick = true;
        }

    }
    requestAnimationFrame(animate);
}

function init(){
    panel.style.left = "-100vw";
    panel.prepend(panel.lastElementChild);
}

//banner
const banner_item_wrap = document.querySelector("#banner .item_wrap");
const banner_slide_ul = banner_item_wrap.querySelector(".imgBox .banner_slide");
const banner_slide_ul_lis = banner_slide_ul.querySelectorAll("li");
const imgBox_btns = banner_item_wrap.querySelectorAll(".btns li");

imgBox_btns.forEach((el, index) => {
    banner_slide_ul.style.left = `0%`
    banner_slide_ul_lis[index].style.left = `${index * 100}%`
    // 1번째 : 0%, 2번째 : 100%, 3번째 : 200%, 4번째 : 300%
    el.addEventListener("click", ()=>{
        for (const el of imgBox_btns) {
            el.classList.remove("on");
        }
        el.classList.add("on");
        banner_slide_ul.style.left = `${index * -100}%`
    })
});


// recommend

const items_wrap = document.querySelector(".items_wrap");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", ()=>{
    items_wrap.prepend(items_wrap.lastElementChild);
})
nextBtn.addEventListener("click", ()=>{
    items_wrap.append(items_wrap.firstElementChild);
})

// full banner

const sections = document.querySelectorAll("#full_banner section");

window.addEventListener("scroll", ()=>{
    const scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    console.log(scroll);

    const section_Y = [1800, 2600 , 3400, 4300];
    
    for(let i = 0; i < 4; i++){
        if(scroll >= section_Y[i]){
            (i % 2 == 0) ? sections[i].style.left = "0" : sections[i].style.right = "0";
            sections[i].style.opacity = "1";
        }else{
            (i % 2 == 0) ? sections[i].style.left = "-100%" : sections[i].style.right = "-100%";
            sections[i].style.opacity = "0";
        }
    }

    

    
})