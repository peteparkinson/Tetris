# Welcome to Tetris

This is a Tetris remake written in JavaScript using functional programming.
The intention was to stay as true as possible to the original NES version of the game.
Below you'll find instructions for how to play the game, a list of features written into the game and some technical explanations of those features.
Thanks for visiting!


![image](https://user-images.githubusercontent.com/43157092/49668248-76f91680-fa55-11e8-85a9-fcf663fcb544.png)

# Features

#### Colors
![colors](https://user-images.githubusercontent.com/43157092/95473533-366ccb80-0952-11eb-8423-b93021e78f23.jpg)

Now featuring your favorite original color schemes!

#### Level Difficulty
Each subsequent 10 lines cleared will level up the game by 1.  Each level increases the rate at which the pieces fall.
Each level The formula that determines rate of falling is as follows:

```javascript
    //higher level = higher speed, no faster after 13
    if(elapsed > oneSec - (level > 12 ? 930 : level * 75)){
        playerDrop();
    }
```

#### Scoring

Each time the players piece drops, the "clearLines" function is called.  This function (seen below) zeros any lines that are full, then calculates score using the following formula:

(level + 1) * x  * line count
    
This is [the scoring system found in the original NES version of Tetris](https://tetris.wiki/Scoring "Tetris Wiki - Scoring").

| Level | Points for 1 Line  | Points for 2 Lines   | Points for 3 Lines   | Points for 4 Lines   |       
| ------|:------------------:| --------------------:|---------------------:|---------------------:|
| 0     | 40                 | 100                  | 300                  | 1200                 |
| 1     | 80                 | 200                  | 600                  | 1400                 |
| 2     | 120                | 300                  | 900                  | 3600                 |
| ...   | ...                | ...                  | ...                  | ...                  |
| 9     | 400                | 1000                 | 3000                 | 12000                |
| n     | 40 * (n + 1)       | 100 * (n + 1)        | 300 * (n + 1)        | 1200 * (n + 1)       |



Level	Points for
1 line	Points for
2 lines	Points for
3 lines	Points for
4 lines
    
```javascript
function clearLines(){

    const tier = [0, 40, 50, 100, 300];
    let count = 0;

    //zeros any full row, shifts to top of the arena
    for(let y = arena.length -1; y > 0; y--){
        if(!arena[y].includes(0)){
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
```
<br><br>
# How to play
You can simply [clone this repository](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository "Clone Repository Tutorial") and double click "index.html".

Here's the URL for the repository: https://github.com/peteparkinson/Tetris.git

 ![tetris](https://user-images.githubusercontent.com/43157092/95485981-6f13a180-0960-11eb-8cf6-88b8e6d57994.jpg)
<br><br>

# Technical Aspects

### File Structure
index.html<br>
  -executes:<br>
    remake.js<br>
    pieces.js<br>
    colors.js<br><br>
    
remake.js<br>
  -contains the logic and declarations for the game itself.<br><br>
  
pieces.js<br>
  -contains 1 function "newPiece()" that returns the matrix for 1 of 7 shapes<br>
   it's long and i was tired of scrolling past it so i gave it its own file<br><br>
  
colors.js<br>
  -contains a long list of hex coded colors as true as possible to the NES original<br>
  -each level %10 has a unique color scheme<br><br>

ignore folder<br>
  -contains .txt copies of the above files, a scratch pad and some hijacked templates<br>
   for future expansion<br><br>
   
the first 4 files are needed to run the game.


### Context

![image](https://user-images.githubusercontent.com/43157092/49668352-baec1b80-fa55-11e8-89a0-861f134662ec.png)

