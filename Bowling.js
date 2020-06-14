class Bowling {
    countRolls
    turns

    constructor() {
        this.countRolls = 0;
        this.turns = [];
    }

    score() {
        let total = 0;
        for (let i = 0; i < this.turns.length; i += 2) {
            let firstTurn = this.turns[i];
            let secondTurn = this.turns[i + 1];
            let thirdTurn = this.turns[i + 2];
            let fourthTurn = this.turns[i + 3];
            total += this.frame(firstTurn, secondTurn, thirdTurn, fourthTurn);
        }
        return total;
    }

    roll(n) {
        this.turns.push(n);
        if (this.countRolls % 2 === 0 && this.isStrike(n)) {
            this.turns.push(0)
        }
        this.countRolls++;

    }

    isGameOver() {
        return this.countRolls >= 20
    }

    frame(firstTurn = 0, secondTurn = 0, thirdTurn = 0, fourthTurn = 0) {

        if (this.isStrike(firstTurn)) {
            return 10 + thirdTurn + fourthTurn;
        } else if (this.isSpare(firstTurn, secondTurn)) {
            return 10 + thirdTurn
        } else {
            return firstTurn + secondTurn;
        }
    }

    isStrike(firstTurn) {
        return firstTurn === 10;
    }

    isSpare(firstTurn, secondTurn) {
        return firstTurn + secondTurn === 10;
    }



}


module.exports = Bowling