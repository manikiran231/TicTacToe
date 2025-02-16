let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn0= true;
let winner= document.querySelector("#win");
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
reset.addEventListener("click",function(){
    turn0=true;
    boxes.forEach(function(box){
        box.textContent="";
    });
    winner.textContent="";
    enablebox();
});
const enablebox=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    });
};
const disablebox=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
};

boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        if(turn0){
            box.textContent="X";
            box.style.color="red";
            turn0=false;
        }
        else{
            box.textContent="O";
            turn0=true;
        }
        box.disabled=true;
        checkwin();
    });
});
const checkwin=() =>{
    let draw=true;
    for(let pat of win){
        let a=boxes[pat[0]].innerText;
        let b=boxes[pat[1]].innerText;
        let c=boxes[pat[2]].innerText;
        if(a==b && b==c && a!==""){
            winner.innerText="The winner is "+a;
            disablebox();
            draw=false;
        }
    }
    for(let bx of boxes){
        if(bx.innerText===""){
            draw=false;
        }
    }
    if(draw){
        winner.innerText="Oops its a Draw";
    }
}

