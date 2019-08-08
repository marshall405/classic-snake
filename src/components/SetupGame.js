// setup new game and wait for space bar input to begin
import DrawItem from './DrawSnake';

// Snake function returns new Snake object 
import Snake from './Snake';
// import game settings Snake and Food from GameSettings
import GameSettings from './GameSettings';
import KeyEvents from './KeyEvents';
import isValidMove from './isValidMove';
import CreateSquare from './CreateSquare';
import updateScore from './updateScore.js';
import addOne from './addOne';
import didEatFood from './didEatFood';
import Food from './Food';

const SetupGame = () => {
    const { SnakeSettings, FoodSettings } = GameSettings;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let score = 0;
    let snake = Snake(SnakeSettings, canvas.height);
    let food = Food(FoodSettings, canvas);

    // set event listeners to specific keys 
    KeyEvents(snake, ctx, DrawItem, canvas);

    // initial rendering of snake and food
    DrawItem(snake, ctx);
    DrawItem(food, ctx);
    // moveSnake will hold the interval
    let moveSnake;



    // spacebar starts or pauses game
    window.addEventListener('keydown', e => {
        if (e.key === " ") {
            if (snake.moving) {
                // pause snake
                snake.moving = false;
                clearInterval(moveSnake);
            } else {
                snake.moving = true;
                //start moving snake
                moveSnake = setInterval(() => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    if (snake.moveAgain) {
                        snake[snake.direction]();
                    }
                    if (isValidMove(snake, canvas)) {
                        if (didEatFood(snake.body, food.body)) {
                            score++;
                            updateScore(score);
                            addOne(snake, CreateSquare);
                            food.move();
                        }
                        snake.moveAgain = true;
                        DrawItem(snake, ctx);
                        DrawItem(food, ctx);
                    } else {
                        //Game Over 
                        console.log('game over???');
                        clearInterval(moveSnake);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        snake = Snake(SnakeSettings, canvas.height);
                        food = Food(FoodSettings, canvas)
                        DrawItem(snake, ctx);
                        DrawItem(food, ctx);
                        KeyEvents(snake);
                        score = 0;
                        updateScore(score);
                    }
                }, GameSettings.speed);
            }
        }
    })





    // add key listening events
    // everytime we hit a key, fire method in snake object and redraw canvas


}

export default SetupGame;