/*** Team_2_Game ***/

/*** World ***/
const world = document.querySelector('#world');
const backgroundWorld = document.querySelector('#background-container');
const worldWidth = parseInt(window.getComputedStyle(world).width);
const worldHeight = parseInt(window.getComputedStyle(world).height);

/*** Player ***/
const player = document.querySelector('#player');
const run = 'ArrowRight';
const walk = 'ArrowLeft';
const jump = 'ArrowUp';
const down = 'ArrowDown';
const kick = 'Space';
const fast = 'KeyF';
const playerWidth = parseInt(window.getComputedStyle(player).width);
const playerHeight = parseInt(window.getComputedStyle(player).height);

let playerSpeedX = 0;
let playerSpeedY = 0;
let playerMaxJump = -100;

let playerPositionX = parseInt(window.getComputedStyle(player).left);
let playerPositionY = parseInt(window.getComputedStyle(player).top);
let playerStartPosition = playerPositionY;
let isOnTheGround = true;
console.log(playerPositionY);
/*** Player Animation ***/


const jumpDown = () => {
    player.style.top = `${playerStartPosition}px`
    document.getElementById('player-movement').className = 'player-movement player-run';
    isOnTheGround = true;
}


window.addEventListener('keydown', event => {
    console.log('event: ', event.code);

    if (event.code === jump) {
        document.getElementById('player-movement').className = 'player-movement player-jump';

            playerPositionY = playerPositionY + playerMaxJump;
            player.style.top = `${playerPositionY}px`
            playerPositionY = playerPositionY - playerMaxJump;
            isOnTheGround = false;
            console.log(playerPositionY)
            setTimeout(jumpDown, 600);

}
        
    // if (event.code === run) {
    //     document.getElementById('player-movement').className = 'player-movement player-run';
    //     if (playerPositionX + playerWidth + playerSpeedX <= worldWidth) {
    //         playerPositionX += playerSpeedX;
    //         player.style.left = `${playerPositionX}px`;   
    //     }else{
    //         player.style.left = `${playerPositionX}px`;
    //     } 
    // }
    /*Plynna animacja*/
    /*if (event.code === 'KeyN') {
        let start = Date.now();
        let playerPossition = parseInt(window.getComputedStyle(player).left);
        player.style.left = playerPossition;
        let timer2 = setInterval(function() {
            let timePassed2 = Date.now() - start;
            mummy.style.left = (mummyPossitionAnimationback - (timePassed2 / 5)) + 'px';
            if (timePassed2 > 500) clearInterval(timer2);
        }, 10);
    }*/

    // if (event.code === walk) {
    //     document.getElementById('player-movement').className = 'player-movement player-walk';
    //     player.style.transform = 'scaleX(-1)';
    //     if (playerPositionX >= playerSpeedX) {
    //         playerPositionX -= playerSpeedX;
    //         player.style.left = `${playerPositionX}px`;   
    //     }else{
    //         player.style.left = `${playerPositionX}px`;
    //     } 
    // }
    

        // if (playerPositionY >= playerSpeedY) {
        //     playerPositionY -= playerSpeedY;
        //     player.style.top = `${playerPositionY}px`;
        // }else{
        //     player.style.top = `${playerPositionY}px`;
        // }
    
    // if (event.code === down) {
    //     document.getElementById('player-movement').className = 'player-movement player-down';
    //     if (playerPositionY + playerHeight + playerSpeedY <= worldHeight) {
    //         playerPositionY += playerSpeedY;
    //         player.style.top = `${playerPositionY}px`;
    //     }else{
    //         player.style.top = `${playerPositionY}px`;
    //     }
    // }
    // if (event.code === kick) {
    //     document.getElementById('player-movement').className = 'player-movement player-jump';
    // }
});

// window.addEventListener('keyup', event => {
    
//     // if ((event.code === run) || (event.code === walk) || (event.code === jump) || (event.code === kick)) {
        
//         player.style.top = `${playerStartPosition}px`
//         document.getElementById('player-movement').className = 'player-movement player-run';

//     // }
//     // if (event.code === walk) {
//     //     player.style.transform = '';
//     // }
// });


// Obstacles animation //


const obstaclesType = ['mushroom1', 'mushroom2', 'mushroom3', 'mushroom4']

const generateRandomObstacleType = () => {
  
    return Math.floor(Math.random() *4);
    
}

// intervalId = setInterval(() => {
//     addNewObstacle();
//   }, 1500);

// let mushroomStartPosition = obstacle.style.left = `${worldWidth - 100}px`;
class Mushroom {
    position = worldWidth - 100;
    domElement = null;

    initilize = () => {
        const obstacle = document.createElement('div');
        obstacle.classList.add(obstaclesType[generateRandomObstacleType()]);
        obstacle.style.left = `${this.position}px`;

        backgroundWorld.appendChild(obstacle);

        this.domElement = obstacle;
    }

    move = () => {
        this.position = this.position - 5;
        this.domElement.style.left = `${this.position}px`;

        if (this.position === playerStartPosition && isOnTheGround) { 
            console.log('trafiony')
        }
    }
}

setInterval(() => {
    const mushroom = new Mushroom();
    mushroom.initilize()
    
    const intervalId = setInterval(() => {
        mushroom.move();

        if (mushroom.position <= 0) {
            clearInterval(intervalId);
            mushroom.domElement.remove();
        }

    }, 10)}, 
2000);


// const addNewObstacle = () => {
//     const obstacle = document.createElement('div');

//     obstacle.classList.add(obstaclesType[generateRandomObstacleType()]);

//     obstacle.style.left = `${MUSHROOM_POSITION}px`

//     backgroundWorld.appendChild(obstacle);

//     setInterval(() => {
//         MUSHROOM_POSITION = MUSHROOM_POSITION - 1;
//         obstacle.style.left = `${MUSHROOM_POSITION}px`
//     }, 1)
// }

// addNewObstacle();

const movingMushroom = () => {

}

// setTimeout(() => {
//     obstacle.remove();
//   }, 8000)
// };


/*** Score ***/

let score = 0;
const scoreElement = document.createElement('h2');
scoreElement.innerText = score;
document.querySelector('.score-container').appendChild(scoreElement);


const increaseScore = () => {
    let seconds = 59;
    const intervalId = setInterval(function() {
        if (seconds === 0) {
            clearInterval(intervalId);
        }
        seconds--;
        score += 50;
        scoreElement.innerText = score;
        
  
    }, 1000)
};

increaseScore();

