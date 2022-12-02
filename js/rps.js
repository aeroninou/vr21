function RPS(){

    function computer(num){
      if(num <= 3) return "r";
      else if(num <= 6) return "p";
      return "s";
    }
  
    let player = prompt("Choose A Letter. rock[R] / paper[P] or scissor[S]").toLowerCase();
    let computerChoice = computer(Math.floor(Math.random() * 10));
  
  
    let answers = ["r", "p", "s"];
  
    if(!player || answers.includes(player) === false){
      alert ("Please select a letter of valid option");
      RPS();
    }
  
    if(player === computer){ 
        alert ("Tie!")
        playAgain();
    } 
    if(player === "r" && computerChoice === "p") {
      alert("You lose, Paper beats Rock");
      playAgain();
    }
    if(player === "p" && computerChoice === "s") {
      alert("You lose, Scissors beats Paper");
      playAgain();
    }
    if(player === "s" && computerChoice === "r") {
      alert("You lose, Rock beats Scissor");
      playAgain();
    }
    alert ("You win! Computer picked " +  computerChoice);
    playAgain();
  }

  function playAgain(){
    let playPromt = prompt("Play Again? [Y] or [N]").toLowerCase();
    let validAnswers = ["y", "n"];
    if (!playPromt || validAnswers.includes(playPromt) === false){
        alert("Please select a letter of valid option");
        RPS();
    }
    if (playPromt === "y"){
        RPS();
    } else { 
        return;
    }
}

  RPS();