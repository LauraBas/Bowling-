class Bowling {
    countRolls
    turns

    constructor() {
        this.countRolls = 0;
        this.turns = [];
    }

    score() {
        let counter = 0;
        for (let i = 0; i < this.turns.length; i += 2) {
            let firstTurn = this.turns[i];
            let secondTurn = this.turns[i + 1];
            let thirdTurn = this.turns[i + 2];
            counter += this.frame(firstTurn, secondTurn, thirdTurn);
        }
        return counter;
    }

    roll(n) {
        this.countRolls++;
        this.turns.push(n);
    }

    isGameOver() {
        return this.countRolls >= 20
    }

    frame(a = 0, b = 0, c = 0) {
        if (this.isSpare(a, b)) {
            return 10 + c
        } else {
            return a + b;
        }
    }

    isSpare(a, b) {
        return a + b === 10;
    }
}


module.exports = Bowling