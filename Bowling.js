class Bowling {
    points
   countRolls

    constructor() {
        this.points = 0;
        this.countRolls = 0;
    }

    score() {
        return this.points;
    }

    roll(n) {
        this.points += n;
        this.countRolls++;
    }

    isGameOver(){
        return this.countRolls >= 20
    }
}


module.exports = Bowling