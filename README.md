# Tetris

WIP

want to stay true to original NES version.
as of initial file dump to github, the game works with levels, speed and colors.
i'm working next on the preview pane and the piece counters.

file structure:
index.html
  -executes:
    remake.js
    pieces.js
    colors.js
    
remake.js
  -contains the logic and declarations for the game itself.
  
pieces.js
  -contains 1 function "newPiece()" that returns the matrix for 1 of 7 shapes
   it's long and i was tired of scrolling past it so i gave it its own file
  
colors.js
  -contains a long list of hex coded colors as true as possible to the NES original
  -each level %10 has a unique color scheme

ignore folder
  -contains .txt copies of the above files, a scratch pad and some hijacked templates
   for future expansion
   
the first 4 files are needed to run the game.
