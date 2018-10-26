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
 * with an increasing level of saturation in that order
 * so 'I' always has the least saturated color,
 * 'J' always has the most saturated color
 */

function getColor(index, level){
    let colors = [];

    if(level % 10 === 0){ 
        colors = [
            null,
            '#E0E0FF',  //white-blue
            '#3EBEFF',  //light blue
            '#0057F6',  //dark blue
            '#000000',  //black
            '#FFFFFF',  //white
        ];
    }else if(level % 10 === 1){
        colors = [
            null,
            '#E0FFE0',  //white-green
            '#80D010',  //light-green
            '#00A800',  //dark- green
            '#000000',
            '#FFFFFF',
        ];
    }else if(level % 10 === 2){
        colors = [
            null,
            '#E0FFFF',  //white
            '#F878F8',  //light-pink
            '#D800CD',  //pink
            '#000000',
            '#FFFFFF',
        ];
    }else if(level % 10 === 3){
        colors = [
            null,
            '#FFFFE0',  //white-blue
            '#5BDB57',  //green-teal
            '#0058F8',  //dark-blue-teal
            '#000000',
            '#FFFFFF',
        ];
    }else if(level % 10 === 4){
        colors = [
            null,
            '#E0FFFF',  //white-pink
            '#58F898',  //teal
            '#E7005B',  //dark-pink
            '#000000',
            '#FFFFFF',
        ];
    }else if(level % 10 === 5){
        colors = [
            null,
            '#AAFACA',  //white-green
            '#6B88FF',  //lavender
            '#58F898',  //green-teal
            '#000000',
            '#FFFFFF',
        ];
    }else if(level % 10 === 6){
        colors = [
            null,
            '#E0E0FF',  //light-orange
            '#7F7F7F',  //gray
            '#F83800',  //dark-orange
            '#000000',
            '#FFFFFF',
        ];
    }else if(level % 10 === 7){
        colors = [
            null,
            '#E0FFE0',  //white-purple
            '#6B47FF',  //maroon
            '#AB0023',  //purple
            '#000000',
            '#FFFFFF',
        ];
    }else if(level % 10 === 8){
        colors = [
            null,
            '#E0E0FF',  //white-blue
            '#F83800',  //orange
            '#0058F8',  //blue
            '#000000',
            '#FFFFFF',
        ];
    }else if(level % 10 === 9){
        colors = [
            null,
            '#E0FFFF',  //white-orange
            '#FFA347',  //light-orange
            '#F83800',  //orange
            '#000000',
            '#FFFFFF',
        ];
    };
    return colors[index];
}
