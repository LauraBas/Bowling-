const Bowling = require("./Bowling")

test("score starts at 0", () => {
    let bowling = new Bowling()
    expect(bowling.score()).toBe(0)
})

test("roll updates score", () => {
    let bowling = new Bowling()
    bowling.roll(1)
    expect(bowling.score()).toBe(1)
    bowling.roll(5)
    expect(bowling.score()).toBe(6)
})

test("is game over?", () => {
    let bowling = new Bowling()
    expect(bowling.isGameOver()).toBeFalsy()
    for (let i = 0; i < 20; i++) {
        bowling.roll(1)
    }
    expect(bowling.isGameOver()).toBeTruthy()
})

test("is this a spare?", () => {
    let bowling = new Bowling()
    bowling.roll(1)
    bowling.roll(9)
    expect(bowling.score()).toBe(10)
    bowling.roll(4)
    expect(bowling.score()).toBe(18)
})


