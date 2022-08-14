const fs = require('fs');
let quote = require('../quote-db.json');

var label = document.getElementById('quote');
label.innerText = quote;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function randint(from, to) {
  return Math.floor(Math.random() * (to - from) + from);
}

const COLOR = [randint(100, 200), randint(70, 130), randint(220, 255)]

WIDTH = document.documentElement.clientWidth;
HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

var gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
gradient.addColorStop(0.0,`rgb(${COLOR[0]}, ${COLOR[1]}, ${COLOR[2]})`);
gradient.addColorStop(0.6,`rgb(${COLOR[0] * 1.5}, ${COLOR[1]}, ${COLOR[2]})`);

var bubbles = document.getElementsByClassName('bubble');

for (let bubble of bubbles) {
  let radius = randint(80, 250);
  bubble.style.width = `${radius}px`;
  bubble.style.height = `${radius}px`;
  bubble.style.top = `${randint(radius, HEIGHT - radius)}px`;
  bubble.style.left = `${randint(radius, WIDTH - radius)}px`;
  bubble.style.backgroundImage =
    `linear-gradient(45deg, rgb(${COLOR[2]}, ${COLOR[0]}, ${COLOR[1]}),
                            rgb(${COLOR[1]}, ${COLOR[2]}, ${COLOR[0]}))`;
}

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, WIDTH, HEIGHT);
