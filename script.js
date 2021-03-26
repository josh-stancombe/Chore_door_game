let currentlyPlaying = true;

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let startButton = document.getElementById("start");
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;

const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";


doorImage1.onclick = () => {
  if (currentlyPlaying == true && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  };
};

doorImage2.onclick = () => {
    if (currentlyPlaying == true && !isClicked(doorImage2)){
      doorImage2.src = openDoor2;
      playDoor(doorImage2);
    };
};

doorImage3.onclick = () => {
    if (currentlyPlaying == true && !isClicked(doorImage3)){
      doorImage3.src = openDoor3;
      playDoor(doorImage3);
    };
};

startButton.onclick = () => {
  if (currentlyPlaying == false) {
    startRound();
  };
};

gameOver = (status) => {
  if (status == 'win'){
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game Over! Play again?"
  };
  currentlyPlaying = false;
};

isBot = (door) => {
  if (door.src == botDoorPath){
    return true
  } else {
    return false
  };
}

isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

playDoor = (door) => {
  numClosedDoors-=1;
  if (numClosedDoors == 0){
    gameOver('win');
  } else if (isBot(door)){
    gameOver();
  }
};

startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor == 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor == 1 ) {
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  } 
  else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
};

startRound();