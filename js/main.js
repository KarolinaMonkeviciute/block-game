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

        const block = document.getElementById('block');
        setInterval(() => {
            const randomColor = Math.random().toString(16).slice(2, 8);
            block.style.backgroundColor = '#' + randomColor;
            block.style.left = getRandom(0, 1200 - 50)+'px';
            block.style.top = getRandom(0, 500 - 50)+'px';
        }, 1000)
    }

    timer();

    let playerScore = 0;
    let computerScore = 0;
    let clicked = false;

    block.addEventListener('click', () => {
        playerScore++;
        clicked = true;
        document.getElementById('player-score').textContent = playerScore;
    })
    document.addEventListener('click', (ev) =>{
        if (ev.target.id !== 'block' && clicked === false)
        computerScore++;
        document.getElementById('computer-score').textContent = computerScore;
    })
    clicked = false;
}

function timer(){
     const timerElement = document.getElementById('timer');
     let time = 30;   

     function countSeconds(){
        if (time === 0){
            clearTimeout(countdown);
            //add results
        } else {
            timerElement.innerHTML = time;
            time--;
        }
      }
      const countdown = setInterval(countSeconds, 1000);
    }
