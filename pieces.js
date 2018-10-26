function newPiece(type){
    //IJLOSTZ
    if(type === 'I'){
        return [

            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8],
            [8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8],
            [8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8],
            [8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8],
            [8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8],
            [8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8,  8, 2, 1, 1, 1, 1, 1, 1, 2, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            /*
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            */
        ];
    }else if(type === 'J'){
        return [

            
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8],
            [8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8],
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],

            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 2, 2, 2, 2, 2, 2, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],

            /*
            [0, 0, 0],
            [2, 2, 2],
            [0, 0, 2],
            */
        ];
    }else if(type === 'L'){
        return [

            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  8, 2, 3, 3, 3, 3, 3, 3, 2, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],

            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 3, 3, 3, 3, 3, 3, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            /*
            [0, 0, 0],
            [3, 3, 3],
            [0, 0, 3],
            */
        ];
    }else if(type === 'O'){
        return [

            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],

            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 4, 4, 4, 4, 4, 4, 2, 8,  8, 2, 4, 4, 4, 4, 4, 4, 2, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],

            /*
            [4, 4],
            [4, 4],
            */
        ];
    }else if(type === 'S'){
        return [

            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],

            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  8, 3, 5, 5, 5, 5, 5, 5, 3, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  8, 3, 3, 3, 3, 3, 3, 3, 3, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            /*
            [0, 0, 0],
            [0, 5, 5],
            [5, 5, 0],
            */
        ];
    }else if(type === 'T'){
        return [

            
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8],
            [8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8],
            [8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8],
            [8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8],
            [8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8],
            [8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],

            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 6, 6, 6, 6, 6, 6, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            /*
            [0, 0, 0],
            [6, 6, 6],
            [0, 6, 0],
            */
        ];
    }else if(type === 'Z'){
        return [

            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8,  8, 2, 7, 7, 7, 7, 7, 7, 2, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8,  8, 2, 2, 2, 2, 2, 2, 2, 2, 8],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,  8, 8, 8, 8, 8, 8, 8, 8, 8, 8],

            /*
            [0, 0, 0],
            [7, 7, 0],
            [0, 7, 7],
            */
        ];
    }
}