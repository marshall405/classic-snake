const GameSettings = {
    walls: true,
    speed: 50,
    CanvasSettings: {
        width: 600,
        height: 600,
        style: {
            background: '#fefefe',
            border: '1px solid black',
            backgroundColor: 'lightgreen'
        },
    },
    SnakeSettings: {
        width: 20,
        height: 20,

        fillColor: 'black',
        strokeColor: 'white',
        startLength: 4,
    },
    FoodSettings: {
        width: 20,
        height: 20,
        fillColor: 'red',
        strokeColor: 'white',
    },
}
export default GameSettings;