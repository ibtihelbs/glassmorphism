const btn_item=document.querySelectorAll(".btn-item");
const tab_content=document.querySelectorAll(".tab-content");
const tab_about=document.querySelector(".tab-about");

//console.log(btn_item,tab_content);
const get_sibling=(tab,key)=>{
    let count;
    tab.forEach((item,index)=>{
        console.log(index);
        if(index !== key){
            count = tab[index];
            console.log(count);
        }
    })
    console.log(count);
    return count;
}
//get_sibling(tab_content,1);

//addEventListener("click",(event)=>{})
let section_=(e)=>{
    const link=e.target.closest("a");
    if(!link)return;
    let current=document.querySelector("section.active")
    
    let _id=link.getAttribute("href");
    
    current.classList.remove('active');
    document.querySelector(_id).classList.toggle("active");
}
let toggle_btn=document.querySelector(".nav-toggle");
let nav_inner=document.querySelector(".nav");
toggle_btn.addEventListener("click",(event)=>{
    nav_inner.classList.toggle("active");
   // const span=toggle_btn.querySelector("span");
   // const _after=window.getComputedStyle(span ,'::after');
   // const _before=window.getComputedStyle(span ,'::before');
   toggle_btn.style.setProperty('--trans-after','rotate(45deg)');
   toggle_btn.style.setProperty('--trans-before','rotate(-45deg)');
   toggle_btn.querySelector("span").style.backgroundColor="transparent";
    nav_inner.addEventListener("click",(e)=>{
        section_(e);
    })
})
let hero_link=document.querySelector(".hero-links");
console.log(hero_link);
hero_link.addEventListener("click",(e)=>{
    section_(e);
})
