let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10)
const absoluteGuess= (target, guess) => Math.abs(target - guess)
const compareGuesses = (humanGuess,  computerGuess, targetNumber ) => absoluteGuess(targetNumber, computerGuess) < absoluteGuess(targetNumber, humanGuess) ? false : true
const updateScore = (winner) => winner === 'human' ? humanScore++ : computerScore++
const advanceRound = () => currentRoundNumber++