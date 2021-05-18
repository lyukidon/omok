const canvas = document.querySelector("canvas#pan");
const ctx = canvas.getContext('2d');
const edge = 20;
const canvasSize = 700 + edge*2;
const row = 13;
const spaceSize = 30;
const rowSize = 700/row;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,0,canvasSize,canvasSize);
for (let i=0;i<row;i++){
  for (let j=0; j<row; j++){
    let widthSize = (canvasSize - edge*2) / row;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.strokeRect(widthSize * i + edge, widthSize * j + edge, widthSize, widthSize);
  }
}