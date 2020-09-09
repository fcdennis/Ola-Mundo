const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");

const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

const startButton = document.querySelector('#start');

const currentStreak = document.querySelector('#currentStreake');
const bestStreake = document.querySelector('#bestStreake');
const overallStreake = document.querySelector('#overallStreake');

let currentStreakScore = 0;
let bestStreakeScore = 0;
let overallStreakeScore = 0;


let currentlyPlaying = true;

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const playDoor = (door) => {
    if (playDoor){
        numClosedDoors --;
    };
    if(numClosedDoors === 0){
        gameOver('win');
    } else if (isBot(door) == true){
        gameOver();
    }
}

const isBot = (door) => {
    if(door.src == botDoorPath){
        return true
    }
    return false
}

const isClicked = (door) => {
    if(door.src !== closedDoorPath ){
        return false
    }
    return true
}

const gameOver = (status) =>{
    if ( status == 'win'){
        if (currentStreakScore === bestStreakeScore){
            bestStreakeScore++;
        }
        currentStreakScore++;
        overallStreakeScore++;
        startButton.innerHTML = 'You win! Play again?';
        currentlyPlaying = false;
    } else {
        startButton.innerHTML = 'Game over! Play again?'
        currentlyPlaying = false;
        currentStreakScore = 0;
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * 6);

    switch(choreDoor){
        case 0:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 1:
            openDoor1 = botDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = beachDoorPath;
            break;
        case 2:
            openDoor1 = beachDoorPath;
            openDoor2= botDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 3:
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = botDoorPath;
            break;
        case 4:
            openDoor1 = spaceDoorPath;
            openDoor2 = botDoorPath;
            openDoor3 = beachDoorPath;
            break;
        default:
            openDoor1 = spaceDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = botDoorPath;
    }
}

doorImage1.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage1)){
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage2)){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage3)){
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    currentStreak.innerHTML = currentStreakScore;
    bestStreake.innerHTML = bestStreakeScore;
    overallStreake.innerHTML = overallStreakeScore;
    randomChoreDoorGenerator();
}

startButton.onclick = () =>{
    if (!currentlyPlaying) {
        startRound();
    }
}

startRound();