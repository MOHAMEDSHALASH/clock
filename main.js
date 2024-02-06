
let hours=document.getElementById('hours');
let min=document.getElementById('minutes');
let sec=document.getElementById('seconds');
let ampm=document.getElementById('ampm');

let ball1=document.getElementById('ball1');
let ball2=document.getElementById('ball2');
let ball3=document.getElementById('ball3');
const clock =setInterval(()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    //Hours
    if(h > 12){
        h =`${h-12}`;
        ampm.innerHTML="PM"
    }
    else{
        h = `${h}`;
        ampm.innerHTML="AM"
    }
    if(h < 10){
        h = `0${h}`; 
    }
    if(h == 0){
        h = "12";
    }
    hours.innerHTML=`${h}`;
    //Minutes
    if(m < 10){
        m =`0${m}`
    }
    min.innerHTML=`${m}`;
    // seconds
    if(s < 10){
        s =`0${s}`
    }
    sec.innerHTML=`${s}`;
    
    ball3.style.transform=`rotate(${s * 6}deg)`
    ball2.style.transform=`rotate(${m * 6}deg)`
    ball1.style.transform=`rotate(${h * 6}deg)`

})
