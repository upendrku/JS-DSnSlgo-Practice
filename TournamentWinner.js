/*
There's an algorithms tournament taking place in which teams of programmers compete against each other to solve 
algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams.
Only two teams compete against each other at a time, and for each competition, one team is designated the home team,
while the other team is the away team. In each competition there's always one winner and one loser; there are no ties.
A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives
the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing
the results of each competition, write a function that returns the winner of the tournament.
The input arrays are named competitions and results, respectively. The competitions array has elements in the form of 
[homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. 
The results array contains information about the winner of each corresponding competition in the competitions array. 
Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home 
team in the corresponding competition won and a 0 means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will compete against all other 
teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

Sample Input
competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]
results = [0, 0, 1]
Sample Output
"Python"
// C# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0 points 
// C# -  3 points
// Python -  6 points
*/

// function tournamentWinner(competitions, results) {
//     let winner
//     let teamsAndTheirWins = {}
//     for(i = 0, j = 0; i < competitions.length, j < results.length; i++, j++) {
//         competition = competitions[i]
//         if (results[j] === 0) {
//             teamsAndTheirWins[competition[0]] = teamsAndTheirWins[competition[0]] ? teamsAndTheirWins[competition[0]] : 0
//             teamsAndTheirWins[competition[1]] = teamsAndTheirWins[competition[1]] ? teamsAndTheirWins[competition[1]] + 3 : 3
//         } else {
//             teamsAndTheirWins[competition[0]] = teamsAndTheirWins[competition[0]] ? teamsAndTheirWins[competition[0]] + 3 : 3
//             teamsAndTheirWins[competition[1]] = teamsAndTheirWins[competition[1]] ? teamsAndTheirWins[competition[1]] : 0
//         }
//     }
//     const winningScore = Object.values(teamsAndTheirWins).sort((a, b) => b - a)[0]
//     winner = Object.keys(teamsAndTheirWins).find((team) => teamsAndTheirWins[team] === winningScore)
//     return winner
// }

function tournamentWinner(competitions, results) {
    let currentBestTeam = ''
    let scores = {'' : 0}
    for(i = 0; i < competitions.length; i++) {
        let currentWinningTeam
        let competition = competitions[i]
        if (results[i] === 0) {
            currentWinningTeam = competition[1]
            scores[competition[1]] = scores[competition[1]] ? scores[competition[1]] + 3 : 3
        } else {
            currentWinningTeam = competition[0]
            scores[competition[0]] = scores[competition[0]] ? scores[competition[0]] + 3 : 3
        }
        if (scores[currentWinningTeam] > scores[currentBestTeam]) {
            currentBestTeam = currentWinningTeam
        }
    }
    return currentBestTeam
}

const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
]

const results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))