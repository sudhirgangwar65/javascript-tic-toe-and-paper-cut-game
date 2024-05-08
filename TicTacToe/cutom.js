let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;

// console.log(boxes);
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const resetGame = () =>{
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

const disableBoxes = () =>{
	for (let box of boxes) {
    box.disabled = true;
  }
}
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}
const gameDraw = () => {
	msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showWinner = (txtvalue) =>{
	msg.innerText = `Congratulations, Winner is ${txtvalue}`
	msgContainer.classList.remove("hide");
	disableBoxes();
} 

boxes.forEach((box)=>{
	//box.innerText = "Vivek";
	// console.log(box);
	 box.addEventListener("click", () => {
		if(turnO){
			box.innerText = "o";
			turnO = false;
		}else{
			box.innerText = "x";
			turnO = true;
		}
		box.disabled = true;
        count++;
		 let isWinner = checkWinner();
		 if (count === 9 && !isWinner) {
	      gameDraw();
	    }
	 })

});

const checkWinner = () =>{
	for(let pattern of winpattern){
		let pos1Val = boxes[pattern[0]].innerText;
		let pos2Val = boxes[pattern[1]].innerText;
		let pos3Val = boxes[pattern[2]].innerText;
		//console.log(pos2Val);
		if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
			if(pos1Val === pos2Val && pos2Val ===pos3Val){
				showWinner(pos1Val);
				return true;
			}
		}
	}
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);