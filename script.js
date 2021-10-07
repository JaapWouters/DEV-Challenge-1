// document.addEventListener("DOMContentLoaded",()=>{
// const script=[2000,2000,500,2000,1500,1000,1500,2000,2000,2000,500,2000,2000,1000,1000,1000,1000,2000,2000,2000,5800,2000,4500];
// let script_index=0;

let zoom = 50;
let zoomStep = 4;

document.getElementById("button").addEventListener("click",function(){
zoom += zoomStep; document.getElementById("sony").style.transform = "scale("+zoom+")";});

  
// const background_music=new Audio("img/song.mp3");

// const start_button=document.querySelector("header .start");
// const stop_button=document.querySelector("footer .stop");


// start_button.addEventListener("click",()=>{
//     replace_names();
//     body.classList.add("running");
//     background_music.play();
//     start_next_scene();        
//     background_music.volume=0.2;
//     console.log(background_music.volume);
// });

// stop_button.addEventListener("click",()=>{
//     body.classList.remove("running");
//     background_music.pause();
//     background_music.currentTime = 0;    
//     script_index=0;
// });