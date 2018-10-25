const statsCvs = document.getElementById('canvas1');
const statsCtx = statsCvs.getContext('2d');
const fieldCvs = document.getElementById('canvas2');
const fieldCtx = fieldCvs.getContext('2d');
const pviewCvs = document.getElementById('canvas3');
const pviewCtx = pviewCvs.getContext('2d');

const playerScore = document.getElementById('score')
//playerScore.style.fontSize = "30";
playerScore.style.font = "bold 25px helvetica,serif";;

statsCtx.scale(14, 14);
fieldCtx.scale(20, 20);
pviewCtx.scale(20, 20);

const arena = arenaInit(12, 20);

const player = {
    pos: {x: 0, y: 0},
    piece: null,
};

const preview = {
    pos: {x: 0, y: 0},
    piece: null,
};

var t = 0;
var J = 0;
var z = 0;
var o = 0;
var s = 0;
var l = 0;
var i = 0;
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
    let rowCount = 1;
    for(let y = arena.length -1; y > 0; y--){
        if(!arena[y].includes(0)){
            const row = arena.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            ++y;

            linesCleared += rowCount;
            score += rowCount * 10;
            rowCount *= 2;
        }
    }
    level = linesCleared / 10 | 0;
    statsInit();
    previewDraw();
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

function lose(){
    linesCleared = 0;
    level = 0;
    arena.forEach(row => row.fill(0));
    score = 0;
    updateScore();
}

function playerDrop(){
    player.pos.y++;
    if(collide(arena, player)){
        player.pos.y--;
        playerSet();
        playerInit();
        clearLines();
        updateScore();
    }
    elapsed = 0;
}

function playerInit(){
    player.piece = preview.piece;

    previewInit();
    previewDraw();

    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
                   (player.piece[0].length / 2 | 0);
    if(collide(arena, player)){
       lose();
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
    while(collide(arena, player)){
        player.pos.x += offset;
        offset = -(offset +(offset > 0 ? 1: -1));
        if(offset > player.piece[0].length){
            rotate(player.piece, -dir);
            player.pos.x = pos;
            return;
        }
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
        {x: 2.5 - .5 * preview.piece.length, 
         y: 2.5 - .5 * preview.piece.length}, pviewCtx);
}

function previewInit(){
    const choice = 'ILOSTZ';
    let rand = choice.length * Math.random() | 0;
    preview.piece = newPiece(choice[rand]);
}

function refresh(){
    fieldCtx.fillStyle = '#000';
    fieldCtx.fillRect(0, 0, fieldCvs.width, fieldCvs.height);

    drawMatrix(arena, {x: 0, y:0}, fieldCtx);
    drawMatrix(player.piece, player.pos, fieldCtx);
}

function rotate(matrix, dir){
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

function statsInit(){
    statsCtx.fillStyle = '#000';
    statsCtx.fillRect(0, 0, statsCvs.width, statsCvs.height);

    drawMatrix(newPiece('T'), {x: 2, y: 3}, statsCtx);
    drawMatrix(newPiece('J'), {x: 2, y: 6}, statsCtx);
    drawMatrix(newPiece('Z'), {x: 2, y: 9}, statsCtx);
    drawMatrix(newPiece('O'), {x: 3, y: 13}, statsCtx);
    drawMatrix(newPiece('S'), {x: 2, y: 15}, statsCtx);
    drawMatrix(newPiece('L'), {x: 2, y: 18}, statsCtx);
    drawMatrix(newPiece('I'), {x: 1, y: 20}, statsCtx);

}

function updateScore(){
    playerScore.innerText = score;
}

document.addEventListener('keydown', event =>{
    if(event.keyCode === 37){
        playerMove(-1);
    }else if(event.keyCode === 39){
        playerMove(1);
    }else if(event.keyCode === 40){
        playerDrop();
    }else if(event.keyCode === 81){
        playerRotate(-1);
    }else if(event.keyCode === 87){
        playerRotate(1);
    }
});

statsInit();
previewInit();
playerInit();
updateScore();
run();