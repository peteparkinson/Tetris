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

    //0,
    //1: offwhite
    //2: light
    //3: dark
    //4: black
    //5: white


    if(level % 10 === 0){ //white-blue, light-blue, dark-blue
        colors = [
            null,
            '#E0E0FF',  //off-white
            '#3EBEFF',  //light
            '#0057F6',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 1){  //white-green, light-green, dark-green
        colors = [
            null,
            '#E0FFE0',  //off-white
            '#80D010',  //light
            '#00A800',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 2){  //white, light-pink, pink
        colors = [
            null,
            '#E0FFFF',  //off-white
            '#F878F8',  //light
            '#D800CD',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 3){  //white-blue, green-teal, dark-blue-teal
        colors = [
            null,
            '#FFFFE0',  //off-white
            '#5BDB57',  //light
            '#0058F8',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 4){  //white-pink, teal, dark-pink
        colors = [
            null,
            '#F17EAB',  //off-white
            '#58F898',  //light
            '#E7005B',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 5){  //white-green, lavender, green-teal
        colors = [
            null,
            '#AAFACA',  //off-white
            '#6B88FF',  //light
            '#58F898',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 6){  //white-orange, gray, dark-orange
        colors = [
            null,
            '#E0E0FF',  //off-white
            '#7F7F7F',  //light
            '#F83800',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 7){  //white-purple, maroon, purple
        colors = [
            null,
            '#E0FFE0',  //off-white
            '#6B47FF',  //light
            '#AB0023',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 8){  //white-blue, orange, blue
        colors = [
            null,
            '#E0E0FF',  //off-white
            '#F83800',  //light
            '#0058F8',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 9){  //white-orange, light-orange, orange
        colors = [
            null,
            '#E0FFFF',  //off-white
            '#FFA347',  //light
            '#F83800',  //dark
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    };
    return colors[letter];
}
