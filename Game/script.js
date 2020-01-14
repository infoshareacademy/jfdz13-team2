/*** Team_2_Game ***/

/*** World ***/
const world = document.querySelector('#world');
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
let playerMaxJump = 600;

let playerPositionX = parseInt(window.getComputedStyle(player).left);
let playerPositionY = parseInt(window.getComputedStyle(player).top);
let playerStartPosition = playerPositionY;

/*** Player Animation ***/

window.addEventListener('keydown', event => {
    console.log('event: ', event.code);
   
    if (event.code === run) {
        document.getElementById('player-movement').className = 'player-movement player-run';
        if (playerPositionX + playerWidth + playerSpeedX <= worldWidth) {
            playerPositionX += playerSpeedX;
            player.style.left = `${playerPositionX}px`;   
        }else{
            player.style.left = `${playerPositionX}px`;
        } 
    }
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
    if (event.code === jump) {
        document.getElementById('player-movement').className = 'player-movement player-jump';
            //player.style.top = `${playerMaxJump}px`;

            playerPositionY = playerMaxJump;
            player.style.top = `${playerPositionY}px`

        // if (playerPositionY >= playerSpeedY) {
        //     playerPositionY -= playerSpeedY;
        //     player.style.top = `${playerPositionY}px`;
        // }else{
        //     player.style.top = `${playerPositionY}px`;
        // }
    }
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

window.addEventListener('keyup', event => {
    
    if ((event.code === run) || (event.code === walk) || (event.code === jump) || (event.code === kick)) {
        
        player.style.top = `${playerStartPosition}px`
        document.getElementById('player-movement').className = 'player-movement player-run';

    }
    if (event.code === walk) {
        player.style.transform = '';
    }
});
