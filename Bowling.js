class Bowling {
    points

    constructor() {
        this.points = 0;
    }

    score() {
        return this.points;
    }

    roll(n) {
        this.points += n;
    }
}


module.exports = Bowling