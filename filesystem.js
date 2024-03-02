// fs means filesystem.By this, we can add, copy, delete anything to the existing file.

// existing file:- filesystem.txt

const fs = require('fs');

fs.copyFileSync("filesystem.txt" , "filesystem2.txt")   // copyFieSync means that it copies the data from existing file and adds it to the another file.