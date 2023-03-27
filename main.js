


let h =document.querySelectorAll(".h .tabs li")
let hArray =Array.from(h);
let ul =document.querySelectorAll(".content > ul")
let ulArray=Array.from(ul)

var mybtn=document.getElementById("d"),
myul=document.getElementById("t");
mybtn.onclick=function (){
    if( myul.style.display =="flex")

{
    myul.style.display="none";
}else{myul.style.display ="flex";


}
}
let l =document.querySelectorAll(".l .tabs li")
let lArray =Array.from(l);
let ol =document.querySelectorAll(".gh > ol")
let olArray=Array.from(ol)

var mybtn=document.getElementById("o"),
myol=document.getElementById("p");
mybtn.onclick=function (){
    if( myol.style.display =="flex")

{
    myol.style.display="none";
}else{myol.style.display ="flex";


}
}


let y =document.querySelectorAll(".y .tabs li")
let yArray =Array.from(y);
let lp =document.querySelectorAll(".gh > lp")
let lpArray=Array.from(lp)

var mybtn=document.getElementById("q"),
mylp=document.getElementById("w");
mybtn.onclick=function (){
    if( mylp.style.display =="flex")

{
    mylp.style.display="none";
}else{mylp.style.display ="flex";


}
}


   








let c =document.querySelectorAll(".c .ta li")
let cArray =Array.from(c);
let lt =document.querySelectorAll(".g > lp")
let ltArray=Array.from(lt)

var mybtn=document.getElementById("a"),
mylt=document.getElementById("s");
mybtn.onclick=function (){
    if( mylt.style.display =="flex")

{
    mylt.style.display="none";
}else{mylt.style.display ="flex";


}
}
   



let z =document.querySelectorAll(".z .tf li")
let zArray =Array.from(z);
let ly =document.querySelectorAll(".x > ly")
let lyArray=Array.from(ly)

var mybtn=document.getElementById("b"),
myly=document.getElementById("n");
mybtn.onclick=function (){
    if( myly.style.display =="flex")

{
    myly.style.display="none";
}else{myly.style.display ="flex";


}
}







let m =document.querySelectorAll(".m .tl li")
let mArray =Array.from(m);
let uk =document.querySelectorAll(".v > uk")
let ukArray=Array.from(uk)

var mybtn=document.getElementById("k"),
myuk=document.getElementById("l");
mybtn.onclick=function (){
    if( myuk.style.display =="flex")

{
    myuk.style.display="none";
}else{myuk.style.display ="flex";


}
}



let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
