const statsCanvas = document.getElementById('statsPane');
const stats = statsCanvas.getContext('2d');
const canvas = document.getElementById('centerPane');
const context = canvas.getContext('2d');
const rightCanvas = document.getElementById('previewPane');
const preview = rightCanvas.getContext('2d');

stats.scale(14, 14);
context.scale(20, 20);
preview.scale(20, 20);

const arena = arenaInit(12, 20);

const player = {
    pos: {x: 0, y: 0},
    piece: null,
    score: 0,
};

var level = 0;
var linesCleared = 0;

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
            player.score += rowCount * 10;
            rowCount *= 2;
        }
    }
    level = linesCleared / 10 | 0;
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

function drawMatrix(matrix, pos, cont){
    matrix.forEach((row, y) =>{
        row.forEach((value, x) => {
            if(value !== 0){
                cont.fillStyle = getColor(value ,level);
                cont.fillRect(x + pos.x, y + pos.y, 1, 1);
            }
        });
    });
}

function lose(){
    linesCleared = 0;
    level = 0;
    arena.forEach(row => row.fill(0));
    player.score = 0;
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
    const choice = 'ILOSTZ';
    let rand = choice.length * Math.random() | 0;
    player.piece = newPiece(choice[rand]);
    //player.piece = newPiece('I');
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

function refresh(){
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    preview.fillStyle = '#000';
    preview.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(arena, {x: 0, y:0}, context);
    drawMatrix(player.piece, player.pos, context);
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
    stats.fillStyle = '#000';
    stats.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(newPiece('T'), {x: 2, y: 3}, stats);
    drawMatrix(newPiece('J'), {x: 2, y: 6}, stats);
    drawMatrix(newPiece('Z'), {x: 2, y: 9}, stats);
    drawMatrix(newPiece('O'), {x: 3, y: 13}, stats);
    drawMatrix(newPiece('S'), {x: 2, y: 15}, stats);
    drawMatrix(newPiece('L'), {x: 2, y: 18}, stats);
    drawMatrix(newPiece('I'), {x: 1, y: 20}, stats);

}

function updateScore(){
    document.getElementById('score').innerText = player.score;
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
playerInit();
updateScore();
run();