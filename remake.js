//canvases and contexts
const statsCvs = document.getElementById('canvas1');
const statsCtx = statsCvs.getContext('2d');
const fieldCvs = document.getElementById('canvas2');
const fieldCtx = fieldCvs.getContext('2d');
const pviewCvs = document.getElementById('canvas3');
const pviewCtx = pviewCvs.getContext('2d');

//score, level, line counts
const currentLevel = document.getElementById('lvl');
currentLevel.style.font = "bold 25px helvetica,serif";
const lineCount = document.getElementById('lines');
lineCount.style.font = "bold 25px helvetica,serif";
const playerScore = document.getElementById('score');
playerScore.style.font = "bold 25px helvetica,serif";

//piece counts 
const tCount = document.getElementById('tStat');
tCount.style.font = "bold 25px helvetica,serif";
tCount.style.color = "#FFFFFF";
const jCount = document.getElementById('jStat');
jCount.style.font = "bold 25px helvetica,serif";
jCount.style.color = "#FFFFFF";
const zCount = document.getElementById('zStat');
zCount.style.font = "bold 25px helvetica,serif";
zCount.style.color = "#FFFFFF";
const oCount = document.getElementById('oStat');
oCount.style.font = "bold 25px helvetica,serif";
oCount.style.color = "#FFFFFF";
const sCount = document.getElementById('sStat');
sCount.style.font = "bold 25px helvetica,serif";
sCount.style.color = "#FFFFFF";
const lCount = document.getElementById('lStat');
lCount.style.font = "bold 25px helvetica,serif";
lCount.style.color = "#FFFFFF";
const iCount = document.getElementById('iStat');
iCount.style.font = "bold 25px helvetica,serif";
iCount.style.color = "#FFFFFF";

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
    * 
    *  1 line:
    *       (level + 1) * 40
    *  2 lines:
    *       (level + 1) * 100
    *  3 lines:
    *       (level + 1) * 300
    *  4 lines:
    *       (level + 1) * 1200
    */


    let count = 0;
    for(let y = arena.length -1; y > 0; y--){
        if(!arena[y].includes(0)){
            const row = arena.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            count++;
            ++y;
        }
    }
    count /= 10;
    if(count === 1){
        score += (level + 1) * 40;
    }
    if(count === 2){
        score += (level + 1) * 100;
    }
    if(count === 3){
        score += (level + 1) * 300;
    }
    if(count === 4){
        score += (level + 1) * 1200;
    }
    linesCleared += count;
    level = linesCleared / 10 | 0;
    previewDraw();
    statsDraw();
    updateScores();
}

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

function initializeGame(){
    linesCleared = 0;
    level = 0;
    arena.forEach(row => row.fill(0));
    score = 0;
    updateScores();
    statsClear();
    statsDraw();
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
        updateScores();
    }
    elapsed = 0;
}

var holder = '';

function playerInit(){
    player.piece = preview.piece;

    updateStats(holder);
    previewInit();
    previewDraw();

    player.pos.y = 0;
    player.pos.x = 50;

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
    player.orientation += dir;
    while(collide(arena, player)){
        player.pos.x += offset;
        offset = -(offset +(offset > 0 ? 1: -1));
        if(offset > player.piece[0].length){
            rotate(player.piece, -dir);
            player.orientation -= dir;
            player.pos.x = pos;
            return;
        }
    }
    /*
        0
     3     1
        2
    */
    if(player.orientation === 4){
        player.orientation = 0;
    }else if(player.orientation === -1){
        player.orientation = 3;
    }
}

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

    //there are piece matrices of 2, 3 and 4 width
    //the next lines ensure the previewed piece is centered in the pane
    drawMatrix(preview.piece, 
        {x: 25 - 5 * preview.piece.length / 10, 
         y: 25 - 5 * preview.piece.length / 10}, pviewCtx);
}

function previewInit(){
    const choice = 'IJLOSTZ';
    let rand = choice.length * Math.random() | 0;
    holder = choice[rand];
    preview.piece = newPiece(holder);
    //preview.piece = newPiece('I');
}

function refresh(){
    fieldCtx.fillStyle = '#000';
    fieldCtx.fillRect(0, 0, fieldCvs.width, fieldCvs.height);

    drawMatrix(arena, {x: 0, y:0}, fieldCtx);
    drawMatrix(player.piece, player.pos, fieldCtx);
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

let ref = 0;
let elapsed = 0;
let oneSec = 1000;

function run(time = 0){
    elapsed += time - ref;
    ref = time;
    if(elapsed > oneSec - (level > 12 ? 930 : level * 75)){
        playerDrop();
    }
    refresh();
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

function statsDraw(){
    statsCtx.fillStyle = '#000';
    statsCtx.fillRect(0, 0, statsCvs.width, statsCvs.height);
 
    drawMatrix(newPiece('T'), {x: 20, y: 30}, statsCtx);
    drawMatrix(newPiece('J'), {x: 20, y: 60}, statsCtx);
    drawMatrix(newPiece('Z'), {x: 20, y: 90}, statsCtx);
    drawMatrix(newPiece('O'), {x: 30, y: 130}, statsCtx);
    drawMatrix(newPiece('S'), {x: 20, y: 150}, statsCtx);
    drawMatrix(newPiece('L'), {x: 20, y: 180}, statsCtx);
    drawMatrix(newPiece('I'), {x: 10, y: 200}, statsCtx);
}

function updateScores(){
    playerScore.innerText = score;
    lineCount.innerText = linesCleared;
    currentLevel.innerText = level;
}

var t = 0;
var j = 0;
var z = 0;
var o = 0;
var s = 0;
var l = 0;
var i = 0;

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
