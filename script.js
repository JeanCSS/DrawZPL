// Obtém o elemento canvas e seu contexto
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Desenha um retângulo vermelho
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);

// Desenha um círculo azul
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.closePath();