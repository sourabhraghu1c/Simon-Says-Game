let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btn=["yellow","purple","green","maroon"];
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});

function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}


function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`Level:${level}`; // h3 updated
    //choose random btn
    let rndindex=Math.floor(Math.random()*4);
    let rndmclr=btn[rndindex];
    let rndbtn=document.querySelector(`.${rndmclr}`);
    gameSeq.push(rndmclr);
    //flash that button
    flashbtn(rndbtn);
}


function matchAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        flashExit();
        h3.innerHTML=`Game Over! <b> your score was:${level}</b> <br> press any key from keyboard to Restart the Game:`
        resetGame();
        
    }
}

function buttonclick(){
    let clickedbtn=this; // this refers to the btn of the event
    flashbtn(clickedbtn);
    let btnclr=clickedbtn.getAttribute("id");
    userSeq.push(btnclr);
    matchAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btns of allBtns){
    btns.addEventListener("click",buttonclick);
}


function flashExit(){
    let bdy=document.querySelector("body");
    bdy.classList.add("flashExit");
    setTimeout(function(){
        bdy.classList.remove("flashExit");
    },100);
}

function resetGame(){
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];
}