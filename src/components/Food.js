const Food = (FoodSettings, canvas) => {

    function random() {
        const random = Math.random() * canvas.width;
        return random - (random % 20);
    }
    const body = [];
    const { width, height, fillColor, strokeColor } = FoodSettings;

    // starting food (1)
    body.push({ x: random(), y: random(), width, height });

    return {
        body,
        fillColor,
        strokeColor,
        move: function () {
            this.body[0].x = random();
            this.body[0].y = random();
        }
    }
};

export default Food;