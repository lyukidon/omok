window.onload = function() {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')

  function vertical(x, width) {
    ctx.beginPath()
    for (let i = x; i < width; i += width / 18) {
      ctx.moveTo(i, x)
      ctx.lineTo(i, width + x)
    }
    ctx.stroke()
  }
  
  function horizontal(y, height) {
    ctx.beginPath()
    for(let i = y; i < height; i += height / 18) {
      ctx.moveTo(y, i)
      ctx.lineTo(height + y, i)
    }
    ctx.stroke()
  }

  ctx.strokeRect(10, 10, 630, 630)
  vertical(10, 630)
  horizontal(10, 630)
}