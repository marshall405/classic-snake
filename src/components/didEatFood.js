export default (snake, food) => {
    return (snake[0].x === food[0].x) && (snake[0].y === food[0].y);
}