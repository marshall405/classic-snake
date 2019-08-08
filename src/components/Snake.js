import CreateSquare from './CreateSquare';
const Snake = (SnakeSettings, canvasHeight) => {
    const body = [];
    const { width, height, fillColor, strokeColor, speed, startLength } = SnakeSettings;
    let startYPos = (canvasHeight / 2);
    let startXPos = 0;
    // create initial snake with Snake.length (default 4)
    for (let i = 0; i < startLength; i++) {
        // add starting squares to snake body
        body.unshift(CreateSquare(startXPos, startYPos, width, height));
        startXPos += width;
    }
    return {
        body: body,
        direction: 'ArrowRight',
        moveAgain: false,
        moving: false,
        speed: speed,
        fillColor: fillColor,
        strokeColor: strokeColor,
        ArrowRight: function () {
            let popped = this.body.pop();
            popped.x = (this.body[0].x + popped.width);
            popped.y = this.body[0].y;
            this.body.unshift(popped);
        },
        ArrowLeft: function () {
            let popped = this.body.pop();
            popped.x = (this.body[0].x - popped.width);
            popped.y = this.body[0].y;
            this.body.unshift(popped);
        },
        ArrowUp: function () {
            let popped = this.body.pop();
            popped.y = (this.body[0].y - popped.width);
            popped.x = this.body[0].x;
            this.body.unshift(popped);
        },
        ArrowDown: function () {
            let popped = this.body.pop();
            popped.y = (this.body[0].y + popped.width);
            popped.x = this.body[0].x;
            this.body.unshift(popped);
        },
    }
}

export default Snake;