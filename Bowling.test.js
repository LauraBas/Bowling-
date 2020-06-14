const Bowling = require("./Bowling")

// test("cubo returns cubed value", () => {
//     expect(cubo(3)).toBe(27)
//     expect(cubo(10)).toBe(1000)
// })
test("score is 0",() => {
    let bowling = new Bowling()
    expect(bowling.score()).toBe(0)
})

test("roll updates score",() => {
    let bowling = new Bowling()
    bowling.roll(1)
    expect(bowling.score()).toBe(1)
    bowling.roll(5)
    expect(bowling.score()).toBe(6)
})