/********************************************************
 * Each level % 10 has a unique color theme in accordance
 * with the original NES version of Tetris.
 * 
 * The following block sets always share colors.
 * 
 * sets:
 * 1.   I, O, T
 * 2.   L, Z
 * 3.   J, S
 * 
 * with an increasing level of boldness in that order
 * so 'I' always has the least saturated color,
 * 'J' always has the most saturated color
 * 
 * these colors are listed beside each condition statement
 * 
 * original retro colors added as future easter egg  
 */
function getColor(letter, level){
    let colors = [];
    /*
    if(level === retro){
        colors = [
            null,
            '#00FFFF',  //I
            '#0000CD',  //J
            '#FF4500',  //L
            '#FFD700',  //O
            '#00FF00',  //S
            '#9400D3',  //T
            '#FF0000',  //Z
        ];
    }else 
    */if(level % 10 === 0){ //white-blue, light-blue, dark-blue
        colors = [
            null,
            '#E0E0FF',  //I
            '#0057F6',  //J
            '#3EBEFF',  //L
            '#E0E0FF',  //O
            '#0057F6',  //S
            '#E0E0FF',  //T
            '#3EBEFF',  //Z
        ];
    }else if(level % 10 === 1){  //white-green, light-green, dark-green
        colors = [
            null,
            '#E0FFE0',  //I
            '#00A800',  //J
            '#80D010',  //L
            '#E0FFE0',  //O
            '#00A800',  //S
            '#E0FFE0',  //T
            '#80D010',  //Z
        ];
    }else if(level % 10 === 2){  //white, light-pink, pink
        colors = [
            null,
            '#E0FFFF',  //I
            '#D800CD',  //J
            '#F878F8',  //L
            '#E0FFFF',  //O
            '#D800CD',  //S
            '#E0FFFF',  //T
            '#F878F8',  //Z
        ];
    }else if(level % 10 === 3){  //white-blue, green-teal, dark-blue-teal
        colors = [
            null,
            '#FFFFE0',  //I
            '#0058F8',  //J
            '#5BDB57',  //L
            '#FFFFE0',  //O
            '#0058F8',  //S
            '#FFFFE0',  //T
            '#5BDB57',  //Z
        ];
    }else if(level % 10 === 4){  //white-pink, teal, dark-pink
        colors = [
            null,
            '#F17EAB',  //I
            '#E7005B',  //J
            '#58F898',  //L
            '#F17EAB',  //O
            '#E7005B',  //S
            '#F17EAB',  //T
            '#58F898',  //Z
        ];
    }else if(level % 10 === 5){  //white-green, lavender, green-teal
        colors = [
            null,
            '#AAFACA',  //I
            '#58F898',  //J
            '#6B88FF',  //L
            '#AAFACA',  //O
            '#58F898',  //S
            '#AAFACA',  //T
            '#6B88FF',  //Z
        ];
    }else if(level % 10 === 6){  //white-orange, gray, dark-orange
        colors = [
            null,
            '#E0E0FF',  //I
            '#F83800',  //J
            '#7F7F7F',  //L
            '#E0E0FF',  //O
            '#F83800',  //S
            '#E0E0FF',  //T
            '#7F7F7F',  //Z
        ];
    }else if(level % 10 === 7){  //white-purple, maroon, purple
        colors = [
            null,
            '#E0FFE0',  //I
            '#AB0023',  //J
            '#6B47FF',  //L
            '#E0FFE0',  //O
            '#AB0023',  //S
            '#E0FFE0',  //T
            '#6B47FF',  //Z
        ];
    }else if(level % 10 === 8){  //white-blue, orange, blue
        colors = [
            null,
            '#E0E0FF',  //I
            '#0058F8',  //J
            '#F83800',  //L
            '#E0E0FF',  //O
            '#0058F8',  //S
            '#E0E0FF',  //T
            '#F83800',  //Z
        ];
    }else if(level % 10 === 9){  //white-orange, light-orange, orange
        colors = [
            null,
            '#E0FFFF',  //I
            '#F83800',  //J
            '#FFA347',  //L
            '#E0FFFF',  //O
            '#F83800',  //S
            '#E0FFFF',  //T
            '#FFA347',  //Z
        ];
    };
    return colors[letter];
}