export default (snake, createSquare) => {
    let length = snake.body.length;
    let snakeTail = snake.body[length - 1];
    snake.body.push(createSquare(snakeTail.x, snakeTail.y, snakeTail.width, snakeTail.height));
}