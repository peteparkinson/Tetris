
let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1],
];

for(let y = matrix.length -1; y > 0; y--){
    if(!matrix[y].includes(0)){
        const row = matrix.splice(y, 1)[0];
        console.log(row);
        matrix.unshift(row);
        ++y;
    }
}