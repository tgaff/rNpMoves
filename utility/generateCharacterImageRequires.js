var output = "var pokemon=[]\n"



for (let i=1; i<152; i++) {
  output+=`pokemon[${i}] = require('../Images/characters/${i}.png')\n`
}




output += "\n\nexport default pokemon"

var fs = require('fs');

fs.writeFile("../App/Themes/CharacterImages.js", output, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

