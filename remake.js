//canvases and contexts
const statsCvs = document.getElementById('canvas1');
const statsCtx = statsCvs.getContext('2d');
const fieldCvs = document.getElementById('canvas2');
const fieldCtx = fieldCvs.getContext('2d');
const pviewCvs = document.getElementById('canvas3');
const pviewCtx = pviewCvs.getContext('2d');

//score, level, line counts
const currentLevel = document.getElementById('lvl');
const lineCount    = document.getElementById('lines');
const playerScore  = document.getElementById('score');
currentLevel.style.font = "bold 25px helvetica,serif";
lineCount.style.font    = "bold 25px helvetica,serif";
playerScore.style.font  = "bold 25px helvetica,serif";

//elements for piece counts
//there's got to be a better way to do this
const tCount = document.getElementById('tStat');
const jCount = document.getElementById('jStat');
const zCount = document.getElementById('zStat');
const oCount = document.getElementById('oStat');
const sCount = document.getElementById('sStat');
const lCount = document.getElementById('lStat');
const iCount = document.getElementById('iStat');

tCount.style.font = "bold 25px helvetica,serif";
jCount.style.font = "bold 25px helvetica,serif";
zCount.style.font = "bold 25px helvetica,serif";
oCount.style.font = "bold 25px helvetica,serif";
sCount.style.font = "bold 25px helvetica,serif";
lCount.style.font = "bold 25px helvetica,serif";
iCount.style.font = "bold 25px helvetica,serif";

tCount.style.color = "#FFFFFF";
jCount.style.color = "#FFFFFF";
zCount.style.color = "#FFFFFF";
oCount.style.color = "#FFFFFF";
sCount.style.color = "#FFFFFF";
lCount.style.color = "#FFFFFF";
iCount.style.color = "#FFFFFF";

//piece counts themselves
var t = 0;
var j = 0;
var z = 0;
var o = 0;
var s = 0;
var l = 0;
var i = 0;

//10 pixes per square
statsCtx.scale(1.4, 1.4);
fieldCtx.scale(2, 2);
pviewCtx.scale(2, 2);

const arena = arenaInit(120, 200);

const player = {
    pos: {x: 0, y: 0},
    piece: null,
};

const preview = {
    pos: {x: 0, y: 0},
    piece: null,
};

var level = 0;
var linesCleared = 0;
var score = 0;

function arenaInit(w, h){
    const matrix = [];
    while(h--){
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function clearLines(){

    /**************************
    *  Scoring
    *  (level + 1) * x  * line count
    * 
    *  1 line:       x = 40
    *  2 lines:      x = 50
    *  3 lines:      x = 100
    *  4 lines:      x = 300
    */

    const tier = [0, 40, 50, 100, 300];
    let count = 0;

    for(let y = arena.length -1; y > 0; y--){
        if(!arena[y].includes(0)){
            //zeros any full row, shifts to top of the arena
            const row = arena.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            count++;
            y++;
        }
    }

    //calculate and update scores
    count /= 10;
    score += (level + 1) * tier[count] * count;
    linesCleared += count;
    level = linesCleared / 10 | 0;
    updateScores();

    //in case of level change, redraw preview and stats pane
    previewDraw();
    statsDraw();
}

//returns if arena and player share coordinates containing non-zero values
function collide(arena, player){
    const p = player.piece;
    const o = player.pos;
    for(let y = 0; y < p.length; y++){
        for(let x = 0; x < p[y].length; x++){
            if(p[y][x] !== 0 &&
               (arena[y + o.y] &&
                arena[y + o.y][x + o.x]) !== 0){
                return true;
            }
        }   
    }
    return false;
}

//used to draw piece and arena.
function drawMatrix(matrix, pos, ctx){
    matrix.forEach((row, y) =>{
        row.forEach((value, x) => {
            if(value !== 0){
                ctx.fillStyle = getColor(value ,level);
                ctx.fillRect(x + pos.x, y + pos.y, 1, 1);
            }
        });
    });
}

//zero and redraw all screen elements
function initializeGame(){
    linesCleared = 0;
    level = 0;
    score = 0;
    updateScores();

    statsClear();
    statsDraw();

    arena.forEach(row => row.fill(0));
    previewInit();
    playerInit();
}

function playerDrop(){
    player.pos.y += 10;
    if(collide(arena, player)){
        player.pos.y -= 10;
        playerSet();
        playerInit();
        clearLines();

        //for debug
        updateScores();
    }
    elapsed = 0;
}

function playerInit(){
    //grab piece from preview pane, make new preview piece
    player.piece = preview.piece;

    updateStats(holder);
    previewInit();
    previewDraw();

    player.pos.y = 0;
    player.pos.x = 50;

    //loser
    if(collide(arena, player)){
        initializeGame();
    }
}

function playerMove(dir){
    player.pos.x += dir;
    if(collide(arena, player)){
        player.pos.x -= dir;
    }
}

function playerRotate(dir){
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.piece, dir);
    //prevents rotating outside of arena
    while(collide(arena, player)){
        player.pos.x += offset;
        //bumps piece into available space
        offset = -(offset +(offset > 0 ? 1: -1));
        //if impossible to rotate, return
        if(offset > player.piece[0].length){
            rotate(player.piece, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

//draws current piece into the arena upon landing
function playerSet(){
    player.piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0){
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function previewDraw(){
    pviewCtx.fillStyle = '#000';
    pviewCtx.fillRect(0, 0, pviewCvs.width, pviewCvs.height);

    //matricies of varying width get centered in preview pane
    drawMatrix(preview.piece, 
        {x: 25 - 5 * preview.piece.length / 10, 
         y: 25 - 5 * preview.piece.length / 10}, pviewCtx);
}

//place holder to sync playerinit and stats
var holder = '';

function previewInit(){
    const choice = 'IJLOSTZ';
    let rand = choice.length * Math.random() | 0;
    holder = choice[rand];
    preview.piece = newPiece(holder);
    //preview.piece = newPiece('I');
}

function rotate(matrix, dir){
    //wipes reflections
    for(let y = matrix.length - 1; y > 0; y--){
        for(let x = matrix[0].length - 1; x > 0; x--){
            if(matrix[y][x] === 5){
                matrix[y][x] = matrix[y][x + 1];
            }
        }
    }
    //rotate
    for(let  y = 0; y < matrix.length; y++){
        for(let x = 0; x < y; x++){
            [
                matrix[x][y],
                matrix[y][x],
            ]=[
                matrix[y][x],
                matrix[x][y],
            ]
        }
    }
    if(dir > 0){
        matrix.forEach(row => row.reverse());
    }else{
        matrix.reverse();
    }

    //sets new reflections (AWESOME)
    let coords = [
        [1, 1],
        [2, 2],
        [2, 3],
        [3, 2],
    ];

    for(let i = 0; i < matrix.length; i+= 10){
        for(let j = 0; j < matrix[0].length; j+= 10){
            for(let y = 0; y < coords.length; y++){
                if(matrix[ (coords[y][0]) + i][ (coords[y][1]) + j] !== 0){
                    matrix[ (coords[y][0]) + i][ (coords[y][1]) + j] = 5;
                }
            }
        }
    }
}

//timer variables
let ref = 0;
let elapsed = 0;
let oneSec = 1000;

function run(time = 0){
    elapsed += time - ref;
    ref = time;
    //higher level = higher speed, no faster after 13
    if(elapsed > oneSec - (level > 12 ? 930 : level * 75)){
        playerDrop();
    }
    
    fieldCtx.fillStyle = '#000';
    fieldCtx.fillRect(0, 0, fieldCvs.width, fieldCvs.height);

    drawMatrix(arena, {x: 0, y:0}, fieldCtx);
    drawMatrix(player.piece, player.pos, fieldCtx);

    requestAnimationFrame(run);
}

function statsClear(){
        
    t = 0;
    j = 0;
    z = 0;
    o = 0;
    s = 0;
    l = 0;
    i = 0;

    tCount.innerText = 0;
    jCount.innerText = 0;
    zCount.innerText = 0;
    oCount.innerText = 0;
    sCount.innerText = 0;
    lCount.innerText = 0;
    iCount.innerText = 0;
}

//stats pane layout
function statsDraw(){
    statsCtx.fillStyle = '#000';
    statsCtx.fillRect(0, 0, statsCvs.width, statsCvs.height);
 
    drawMatrix(newPiece('T'), {x: 20, y: 30}, statsCtx);
    drawMatrix(newPiece('J'), {x: 20, y: 60}, statsCtx);
    drawMatrix(newPiece('Z'), {x: 20, y: 90}, statsCtx);
    drawMatrix(newPiece('O'), {x: 25, y: 130}, statsCtx);
    drawMatrix(newPiece('S'), {x: 20, y: 150}, statsCtx);
    drawMatrix(newPiece('L'), {x: 20, y: 180}, statsCtx);
    drawMatrix(newPiece('I'), {x: 15, y: 200}, statsCtx);
}

function updateScores(){
    playerScore.innerText = score;
    lineCount.innerText = linesCleared;
    currentLevel.innerText = level;
}

function updateStats(letter){
    if(letter === 'T'){
        t++;
        tCount.innerText = t;
    }else if(letter === 'J'){
        j++;
        jCount.innerText = j;
    }else if(letter === 'Z'){
        z++;
        zCount.innerText = z;
    }else if(letter === 'O'){
        o++;
        oCount.innerText = o;
    }else if(letter === 'S'){
        s++;
        sCount.innerText = s;
    }else if(letter === 'L'){
        l++;
        lCount.innerText = l;
    }else if(letter === 'I'){
        i++;
        iCount.innerText = i;
    }
}

document.addEventListener('keydown', event =>{
    if(event.keyCode === 37){
        playerMove(-10);
    }else if(event.keyCode === 39){
        playerMove(10);
    }else if(event.keyCode === 40){
        playerDrop();
    }else if(event.keyCode === 81){
        playerRotate(-1);
    }else if(event.keyCode === 87){
        playerRotate(1);
    }
});

initializeGame();
run();
