const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Error: invalid user input');
    }
  };
  
  const getComputerChoice = () => {
    randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        console.log('Error: invalid computer choice')
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    // console.log(`You: ${userChoice} | Comp: ${computerChoice}`);
    if (userChoice === computerChoice) {
      return 'The game was tied!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } else {
      console.log('Error: could not determine a winner');
    }
  }
  
  const playGame = (yourMove) => {
    const userChoice = getUserChoice(yourMove);
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame('rock');
  playGame('paper');
  playGame('scissors');