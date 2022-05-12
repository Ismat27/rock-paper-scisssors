const rulesToggler = document.querySelectorAll('.toggle-rules');
const rulesSection = document.querySelector('.rules');
const imageOptions = document.querySelectorAll('.user-option');
const gameOptions = ['rock', 'paper', 'scissors'];

const scoreElement = document.querySelector('.score')
let score = 0;

const playAgainBtn = document.querySelector('.play-again-btn')
const game = document.querySelector('.game')
const winner = document.querySelector('.declare-winner')
const userAnswer = document.getElementById('user-answer')
const computerAnswer = document.getElementById('computer-answer')
const decision = document.getElementById('decision')

rulesToggler.forEach(button => {
    button.addEventListener('click', (e)=>{
        const action = e.target.dataset.action;
        if (action === 'show') {
            rulesSection.classList.add('see-rules')
        } else {
            rulesSection.classList.remove('see-rules')
        }
    })
})
function computerOption(gameOptions) {
    let n = Math.floor(Math.random() * gameOptions.length)
    return gameOptions[n]
}
function abc() {
    imageOptions.forEach(button => {
        button.addEventListener('click', (e) => {
            const playerOption = e.target.dataset.option;
            const computer = computerOption(gameOptions)
            judgeWin(computer, playerOption);
            game.classList.add('hide-game');
            userAnswer.innerHTML = demo('you', playerOption)
            computerAnswer.innerHTML = demo('house', computer)
            winner.classList.remove('hide-winner')
        })
    })
}
playAgainBtn.addEventListener('click', ()=>{
    game.classList.remove('hide-game')
    winner.classList.add('hide-winner')
})
document.addEventListener("DOMContentLoaded", abc);

function judgeWin(computerOption, userOption) {
    if (computerOption === userOption) {
        decision.textContent = 'it\'s a tie'
    }
    else {
        switch (computerOption) {
            case 'rock':
                if (userOption !== 'paper') {
                    score -= 1
                    decision.textContent = 'you lose'
                }
                else {
                    score+= 1
                    decision.textContent = 'you won'
                }
                break;

            case 'paper':
                if (userOption !== 'scissors') {
                    score -= 1
                    decision.textContent = 'you lose'
                }
                else {
                    score+= 1
                    decision.textContent = 'you won'
                }
                break;

            case 'scissors':
            if (userOption !== 'rock') {
                score -= 1
                decision.textContent = 'you lose'
            }
            else {
                score+= 1
                decision.textContent = 'you won'
            }
            break;
            
        }
    }
    scoreElement.textContent = score
}

function demo(picker, choice) {
    return `
            <p class="picked">${picker} picked</p>
            <button class="rps rps1 ${choice}" data-option="${choice}">
                <img class="" src="/images/icon-${choice}.svg" alt="" data-option="${choice}">
            </button>`
}