/*** Team_2_Game ***/

/*** World ***/
const world = document.querySelector('#world');
const backgroundWorld = document.querySelector('#background-container');
const worldWidth = parseInt(window.getComputedStyle(world).width);
const worldHeight = parseInt(window.getComputedStyle(world).height);

/*** Player ***/
const player = document.querySelector('#player');
const jump = 'ArrowUp';
const playerWidth = parseInt(window.getComputedStyle(player).width);
const playerHeight = parseInt(window.getComputedStyle(player).height);

let playerSpeedX = 0;
let playerSpeedY = 0;
let playerMaxJump = -200;

let playerPositionX = parseInt(window.getComputedStyle(player).left);
let playerPositionY = parseInt(window.getComputedStyle(player).top);
let playerStartPosition = playerPositionY;
let playerLife = 100;

let isOnTheGround = true;
let gameEnd = false;

// const stopGame = () => {
//     if (gameEnd = true) {
//         clearInterval(initializeInterval);
//         clearInterval(moveInterval);
//         clearInterval(scoreInterval);
//         window.location = "gameover.html"
//     } 
// }

console.log(playerPositionY);
/*** Player Animation ***/


const jumpDown = () => {
    player.style.top = `${playerStartPosition}px`
    document.getElementById('player-movement').className = 'player-movement player-run';
    
   
       isOnTheGround = true
    
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
        setTimeout(jumpDown, 1000);

    }

});




// Obstacles animation //


const obstaclesType = ['mushroom1', 'mushroom2', 'mushroom3', 'mushroom4', 'mushroom5', 'mushroom6']

const generateRandomObstacleType = () => {

    return Math.floor(Math.random() * 6);

}


// let mushroomStartPosition = obstacle.style.left = `${worldWidth - 100}px`;
class Mushroom {
    position = worldWidth - 100;
    domElement = null;

    initilize = () => {
        const obstacle = document.createElement('div');
        obstacle.classList.add(obstaclesType[generateRandomObstacleType()]);
        obstacle.style.left = `${this.position}px`;
        obstacle.style.top = `${playerPositionY + (playerHeight / 2)}px`;

        backgroundWorld.appendChild(obstacle);

        this.domElement = obstacle;
    }

    move = () => {
        this.position = this.position - 5;
        this.domElement.style.left = `${this.position}px`;


    }

    checkCollision = () => {
        if (this.position <= playerPositionX && isOnTheGround) {
            console.log('trafiony', isOnTheGround)

            
            document.querySelector('#progres').value -= 20;
            playerLife -= 20;
            this.domElement.remove();





            if (playerLife <= 0) {
                clearInterval(initializeInterval);
                window.location = 'gameover.html?score=' + score;
            }
            return true
        }

        return false
    }
}
let intervalSpeed = 10;

const lvlHarder = () => {
}




const initializeInterval = setInterval(() => {
    const mushroom = new Mushroom();
    mushroom.initilize()

    if (score >= 1000 && score < 3000) {
        intervalSpeed = 8;
    } else if (score >= 3000 && score < 5000) {
        intervalSpeed = 6;
    } else if (score >= 5000 && score < 7000) {
        intervalSpeed = 4;
    } else if (score >= 7000 && score < 9000) {
        intervalSpeed = 2;
    }

    const moveInterval = setInterval(() => {
        mushroom.move();

        if (mushroom.checkCollision() || mushroom.position <= 0 || playerLife <= 0) {
            clearInterval(moveInterval);
            mushroom.domElement.remove();
        }

        if (playerLife <= 0) {
            clearInterval(moveInterval);
        }

    }, intervalSpeed )

    
},
    2000);


// addNewObstacle();

const movingMushroom = () => {

}



/*** Score ***/

let score = 0;
const scoreElement = document.createElement('h1');
scoreElement.innerText = score;
document.querySelector('.score-container').appendChild(scoreElement);


const increaseScore = () => {
    let seconds = 0;
    const scoreInterval = setInterval(function () {
        if (playerLife <= 0) {
            clearInterval(scoreInterval)
        } else {
            seconds++;
            score += 50;
            scoreElement.innerText = score;
        }
    }, 1000)
};

increaseScore();

