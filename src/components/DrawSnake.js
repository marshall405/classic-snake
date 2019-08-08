const DrawItem = (item, ctx) => {
    ctx.strokeStyle = item.strokeColor;
    ctx.fillStyle = item.fillColor;
    item.body.forEach(sec => {
        ctx.strokeRect(sec.x, sec.y, sec.width, sec.height);
        ctx.fillRect(sec.x, sec.y, sec.width, sec.height);
    });
}

export default DrawItem;