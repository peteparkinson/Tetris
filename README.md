# Tetris

![image](https://user-images.githubusercontent.com/43157092/49668248-76f91680-fa55-11e8-85a9-fcf663fcb544.png)


want to stay true to original NES version.
as of initial file dump to github, the game works with levels, speed and colors.
i'm working next on the preview pane and the piece counters.

file structure:<br>
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
