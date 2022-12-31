let hov = document.querySelectorAll(".col")
let pics = document.querySelectorAll(".card-img-top")

hov.forEach((oneE,index)=>{

oneE.addEventListener("mouseover",(event)=>{

pics[index].style.transform ="scale(1.2)"
})

oneE.addEventListener("mouseleave",(event)=>{

pics[index].style.transform ="scale(1)"
})

})

