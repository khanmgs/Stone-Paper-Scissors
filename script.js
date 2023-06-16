function getComputerChoice() {
  valuedp = Math.random()*3
  value = Math.floor(valuedp)
  if (value === 0) {
    return 'Rock'
  }else if (value === 1) {
    return 'Paper'
  }else {
    return 'Scissors'
  }
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    score = 0
    return score
  }else if ((playerChoice==='Rock' && computerChoice==='Scissors') || (playerChoice==='Paper' && computerChoice==='Rock') || (playerChoice==='Scissors' && computerChoice==='Paper')) {
    score = 1
    return score
  }else {
    score = -1
    return score
  }
}
function showResult(score, playerChoice, computerChoice) {
  
  let result = document.getElementById('result')
  let hands = document.getElementById('hands')
  let playerscore = document.getElementById('player-score')
  if (score === -1) {
    result.innerText = 'You Lose'
    
  }else if (score === 0) {
    result.innerText = "It's a Draw"
    
  }else {
    result.innerText = "You Win"
    
  }
  playerscore.innerText = Number(playerscore.innerText) + score
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score, playerChoice.value, computerChoice) 
}