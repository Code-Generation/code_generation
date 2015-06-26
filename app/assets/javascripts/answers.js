var answer1 = ["<h1>Smiley Game</h1>", "<p id='score'>0</p>",
               "<img id='smiley' src='http://bit.ly/1erPIoe'>",
               "<img id='rabbit' src='http://bit.ly/1Ingp4K'>"];

var answer2 = ["h1 {", "\tcolor: orange;", "}", "p {", "\tcolor: blue;", "}",
               "img {", "\tposition: absolute", "}"];

var answer3 = addToAnswer(answer2, ["#smiley {", "\ttop: 200px;", "\tleft: 50px;",
              "}", "#rabbit {", "\ttop: 100px;", "\tleft: 300px;", "}"]);

var answer4 = ["var smiley = document.getElementById('smiley');",
               "var smileyTop = 200;",
               "var smileyLeft = 50;",
               "document.onkeydown = function(event) {",
               "\t// UP",
               "\tif(event.keyCode == 38) {",
               "\t\tsmileyTop = smileyTop - 10;",
               "\t\tsmiley.style.top = smileyTop + 'px';",
               "\t}",
               "\t// DOWN",
               "\tif(event.keyCode == 40) {",
               "\t\tsmileyTop = smileyTop + 10;",
               "\t\tsmiley.style.top = smileyTop + 'px';",
               "\t}",
               "\t// LEFT",
               "\tif(event.keyCode == 37) {",
               "\t\tsmileyLeft = smileyLeft - 10;",
               "\t\tsmiley.style.left = smileyLeft + 'px';",
               "\t}",
               "\t// RIGHT",
               "\tif(event.keyCode == 39) {",
               "\t\tsmileyLeft = smileyLeft + 10;",
               "\t\tsmiley.style.left = smileyLeft + 'px';",
               "\t}",
               "}"];

var answer5 = addToAnswer(answer4, [
              "var rabbit = document.getElementById('rabbit');",
              "var rabbitTop = 100;",
              "var rabbitLeft = 300;",
              "function moveRabbit() {",
              "\trabbitTop = rabbitTop + (Math.random() * 30 - 15);",
              "\trabbitLeft = rabbitLeft + (Math.random() * 30 - 15);",
              "\trabbit.style.top = rabbitTop + 'px';",
              "\trabbit.style.left = rabbitLeft + 'px';",
              "}",
              "setInterval(moveRabbit, 50);"
              ]);

var answer6 = addToAnswer(answer5, []);
answer6.pop();
answer6 = addToAnswer(answer6, [
          "function detectCollision() {",
          "\tif(rabbitTop - 100 < smileyTop && rabbitTop + 190 > smileyTop && rabbitLeft - 100 < smileyLeft && rabbitLeft + 100 > smileyLeft) {",
          "\t\tvar score = document.getElementById('score');",
          "\t\tscore.innerHTML = parseInt(score.innerHTML) + 10;",
          "\t\trabbitTop = Math.random() * 300;",
          "\t\trabbitLeft = Math.random() * 300;",
          "\t\trabbit.style.top = rabbitTop + 'px';",
          "\t\trabbit.style.left = rabbitLeft + 'px';",
          "\t}",
          "}",
          "function gameLoop() {",
          "\tdetectCollision();",
          "}",
          "setInterval(gameLoop, 50);"
          ]);

var answer7 = addToAnswer(answer6, []);
answer7.pop();
answer7.pop();
answer7.pop();
answer7 = addToAnswer(answer7, [
          "\tmoveRabbit();",
          "\tdetectCollision();",
          "}",
          "setInterval(gameLoop, 50);"
          ]);

function addToAnswer(oldAnswer, arr) {
  var newAnswer = [];
  newAnswer = newAnswer.concat.apply(newAnswer, oldAnswer);
  for(var i = 0; i < arr.length; i++) {
    newAnswer.push(arr[i]);
  }
  return newAnswer;
}

function showAnswer(num) {
  if(num == 1) {
    html_editor.setValue(answer1.join("\n"));
  }

  if(num == 2) {
    css_editor.setValue(answer2.join("\n"));
  }

  if(num == 3) {
    css_editor.setValue(answer3.join("\n"));
  }

  if(num == 4) {
    js_editor.setValue(answer4.join("\n"));
  }

  if(num == 5) {
    js_editor.setValue(answer5.join("\n"));
  }

  if(num == 6) {
    js_editor.setValue(answer6.join("\n"));
  }

  if(num == 7) {
    js_editor.setValue(answer7.join("\n"));
  }
}
