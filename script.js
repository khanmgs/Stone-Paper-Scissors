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

