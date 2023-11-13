const playBtn = document.getElementById('play-btn');
const startContainer = document.getElementById('start-container');

const headerDOM = document.getElementById('header');
const nameValue = document.getElementById('name');

const blockArea = document.getElementById('block-area');
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);


if (playBtn){
    playBtn.addEventListener('click', (ev) => {
        startContainer.classList.add('hide');
        headerDOM.classList.add('show');
        renderHeader(headerDOM);
        renderBlock(blockArea);
        game();
        ev.preventDefault();
    })
}

function renderHeader(headerDOM){
    if(headerDOM){
        headerDOM.innerHTML = 
        `<div>
        <p class="player-name">${nameValue.value}</p>
        <p id="player-score" class="score"></p>
        </div>
        <div id="timer" class="timer"></div>
        <div>
        <p class="player-name">Computer</p>
        <p id="computer-score" class="score"></p>
        <p></p>
        </div>`;
    }
}
        function renderBlock(blockArea){

            if (blockArea){
             blockArea.innerHTML = `<div id="block" class="block"></div>`;
             
        }}

        function game(){
          const timerElement = document.getElementById('timer');
          let playerScore = 0;
          let computerScore = 0;
        let clicked = false;
        let time = 30;
        const block = document.getElementById('block');
        block.addEventListener('click', () => {
        clicked = true;
    })

    let intervalId = setInterval(() => {
        if (time > 0){
            time--;
            timerElement.innerHTML = time;
        } else {
            clearInterval(intervalId);
            return;
        }
        if (clicked === true){
            playerScore++;
        } else {
            computerScore++;
        }
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore; 
        const randomColor = Math.random().toString(16).slice(2, 8);
        block.style.backgroundColor = '#' + randomColor;
        block.style.left = getRandom(0, 1200 - 50)+'px';
        block.style.top = getRandom(0, 500 - 50)+'px';

        clicked = false;
        }, 1000)  
        }
    

