let boxes=document.querySelectorAll(".box");
let resetbstn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,0],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was Clicked");
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;

        }
        box.disabled="true";
        checkWinner();
    })
})
const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val == pos2val && pos2val==pos3val){
                console.log("WINNER",pos1val);

                showwinner(pos1val);

            }
        }
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();


}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);