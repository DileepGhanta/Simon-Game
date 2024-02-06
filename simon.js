let start=document.querySelector(".btnstart");
let h3=document.querySelector("h3");
let level=0;
let is_started=false;
let nav=document.querySelector(".highestlevel")
let highestlevel=level;
let icon=document.querySelector(".material-symbols-outlined");
let is_clicked=false;
let info=document.querySelector(".info-alt");
icon.addEventListener("click",()=>{
  if(!is_clicked){
  info.style.display="none";
  is_clicked=true;
  }
  else{
  info.style.display="initial";
  is_clicked=false;
  }
})
start.addEventListener("click",()=>{
    if(!is_started){
        is_started=true;
        h3.style.display="initial";
        start.innerText="Restart";
        levelIncrease();
    }
    else{
        is_started=false;
        level=0;
        currentPattern=[];
        start.innerText="Play";
        h3.style.display="none";
        exit(0);
    }
})
let userpattern=[];
let currentPattern=[];
let colors=[".red",".blue",".yellow",".green"];
function removeGlow(btn){
  btn.style.opacity=0.7;
}
let k = 1;
let selectedButton;
function levelIncrease(){
    level++;
    if(level>highestlevel)
    highestlevel=level;
    nav.innerText=`Highest Level : ${highestlevel}`;
    h3.innerText=`Level ${level}`;
    let index=Math.floor(Math.random()*4);
    currentPattern.push(colors[index]);
    for(let i=0;i<level;i++){
      setTimeout(()=>{
                selectedButton=document.querySelector(currentPattern[i]);
                selectedButton.style.opacity=1;
                setTimeout(()=>{
                    removeGlow(selectedButton);
                },600);
            },1000*(i+1));
        }
}
let inputcount = 0;
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let buttons = [];
buttons.push(yellow);
buttons.push(green);
buttons.push(blue);
buttons.push(red);
for (let button of buttons) {
  button.addEventListener("click", function () {
    userpattern.push(`.${this.className}`);
    let currentbutton=document.querySelector(`.${this.className}`);
    currentbutton.style.opacity=1;
    setTimeout(()=>{
      removeGlow(currentbutton)
    },300);
    inputcount++;
    for (let i = 0; i < userpattern.length; i++) {
      if (userpattern[i] != currentPattern[i]){
        k = 0;
        break;
      } 
    }
    if (k == 1 && inputcount == level) {
      inputcount = 0;
      userpattern = [];
      levelIncrease();
    } else if (k==0) {
      inputcount=0;
      userpattern=[];
      currentPattern=[];
      h3.innerText = "Oops!! You lost Try Again";
      }
    });
  }
