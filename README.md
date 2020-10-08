# Welcome to Tetris


This is a Tetris remake written in JavaScript using functional programming.
The intention was to stay as true as possible to the original NES version of the game.
Below you'll find a list of features written into the game, and instruction on how to run it.
Thanks for visiting!

# Features

### Colors
![colors](https://user-images.githubusercontent.com/43157092/95473533-366ccb80-0952-11eb-8423-b93021e78f23.jpg)

Now featuring your favorite original color schemes!


### Preview Pane
![image](https://user-images.githubusercontent.com/43157092/49668248-76f91680-fa55-11e8-85a9-fcf663fcb544.png)

### Level Difficulty
Each subsequent 10 lines cleared will level up the game by 1.  Each level increases the rate at which the pieces fall.
Each level The formula that determines rate of falling is as follows:

```javascript
    //higher level = higher speed, no faster after 13
    if(elapsed > oneSec - (level > 12 ? 930 : level * 75)){
        playerDrop();
    }
```
<br><br>
# How to play
You can simply [clone this repository](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository "Clone Repository Tutorial") and double click "index.html".

Here's the URL for the repository: https://github.com/peteparkinson/Tetris.git

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

