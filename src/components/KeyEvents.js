// set arrow key listener events
export default (snake) => {
    window.addEventListener('keydown', e => {
        const key = e.key;
        if (key === 'ArrowRight' || key === 'ArrowLeft' || key === 'ArrowUp' || key === 'ArrowDown') {
            if (key !== snake.direction && snake.moving) {
                // if snake is going left or right, only move snake up or down
                if (key === 'ArrowLeft' || key === 'ArrowRight') {
                    if (snake.direction !== 'ArrowLeft' && snake.direction !== 'ArrowRight') {
                        // call ArrowUp or ArrowDown method on snake object
                        snake[key]();
                        //set direction to continue moving snake
                        snake.direction = key;
                        // prevent interval from moving snake again
                        snake.moveAgain = false;
                    }
                } // end if for left and right

                // if snake is going up or down, only move snake left or right
                if (key === 'ArrowDown' || key === 'ArrowUp') {
                    if (snake.direction !== 'ArrowUp' && snake.direction !== 'ArrowDown') {
                        // call ArrowLeft or ArrowRight method on snake object
                        snake[key]();
                        //set direction to continue moving snake
                        snake.direction = key;
                        // prevent interval from moving snake again
                        snake.moveAgain = false;
                    }
                } // end if for up and down
            }
        }
    })
}