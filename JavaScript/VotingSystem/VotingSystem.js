const poll = new Map();
poll.set('malaysia', new Set())
poll.set('china', new Set())
poll.set('belanda', new Set())
function addOption(option) {
  if (poll.has(option) == false) {
    if (option == '') {
      return('Option cannot be empty.')
    }
    poll.set(option, new Set())
    return(`Option "${option}" added to the poll.`)
  } else {
    return(`Option "${option}" already exists.`)
  }
}
function vote(option, voterId) {
  if (poll.has(option) == false) {
    return(`Option "${option}" does not exist.`)
  } else {
    if (poll.get(option).has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`
    } else {
      poll.get(option).add(voterId)
      return `Voter ${voterId} voted for "${option}".`
    }
  }
}
function displayResults() {
  const rekap = []
  for (const [option, voters] of poll) {
    rekap.push(`${option}: ${voters.size} votes`)
  }
  return "Poll Results:\n" + rekap.join("\n")
}
const voter1 = vote('malaysia', "traveler1")
const voter2 = vote('malaysia', "traveler2")
const voter3 = vote('belanda', "traveler3")
console.log(addOption("Egypt"))
console.log(vote("Nigeria", "traveler2"))
console.log(displayResults())