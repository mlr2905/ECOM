class Painter {
    constructor() {

    }
    draw_arc(ctx, new_point) {
        ctx.beginPath()
        ctx.arc(new_point.x, new_point.y, 5, 0, 2 * Math.PI)
        ctx.fillStyle = colors.getRandomColor()
        ctx.fill()
        ctx.closePath()
    }

    draw_line(ctx, previous_point, new_point) {
        ctx.beginPath()
        ctx.moveTo(previous_point.x, previous_point.y)
        ctx.lineTo(new_point.x, new_point.y)
        ctx.lineWidth = 2
        ctx.strokeStyle = colors.getRandomColor()
        ctx.stroke()
        ctx.closePath() 
    }
}