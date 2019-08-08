export default (snake, canvas) => {
    const snakeHead = snake.body[0];
    const wallDetection = (snakeHead.x + snakeHead.width <= canvas.width && snakeHead.x >= 0) && (snakeHead.y + snakeHead.height <= canvas.height && snakeHead.y >= 0);
    const itselfDetection = snake.body.every((snakePiece, index) => {
        if (index !== 0) {
            return (snakePiece.x !== snakeHead.x || snakePiece.y !== snakeHead.y);
        }
        return true;
    });
    return (wallDetection && itselfDetection);
}