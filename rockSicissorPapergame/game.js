let player = document.querySelector(".PLAYER");
let Computer = document.querySelector(".COMPUTER");
let Result = document.querySelector(".RESULT");
let resultplayerscore = document.querySelector(".pscore")
let resultcomputerscore = document.querySelector(".cscore")
let playerscore = 0;
let Computerscore = 0;

function handleClick(user) {
  const roboat = computerpaly();
  if (user === roboat) {
    showResult("game draw");
  }
 else if(
    (user === "ROCK" && roboat === "SCISSORS")||
    (user === "PAPER" && roboat === "ROCK")||
    (user ==="SCISSORS"&& roboat ==="PAPER")
    ){
    showResult(" CONGRATULATION You win player2  lose ");
    gameEnd()
    playerscore++;
    resultplayerscore.textContent= "YOU"+playerscore
    console.log(playerscore+"playerscore")
     }else{

       showResult("you los better luck next time");
       gameEnd()
       Computerscore++
       resultcomputerscore.textContent="player"+Computerscore

       console.log(Computerscore+"Computerscore")
  }
  function showResult(whowin) {
    Result.textContent = whowin;
    player.textContent = "PLAYER---- " + user;
    Computer.textContent = "COMPUTER---- " + roboat;
  }

}

function gameEnd() {
  if (playerscore >= 3) {
    alert("CONGRATULATIONS YOU WIN");

 }
 else if(Computerscore >= 3){
    alert(" YOU LOSE PLAYER WIN");
 }
 else if (Computerscore===3 && 3===playerscore){
    alert(" MATCH DRAW");
 }

}



function computerpaly() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const randomindex = Math.floor(Math.random() * options.length);
  return options[randomindex];
}
