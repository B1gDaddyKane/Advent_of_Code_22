/**
 * A, X = Rock
 * Rock = 1
 * B, Y = Paper
 * Paper = 2
 * C, Z = Scissor
 * Scissor = 3
 * 
 * Win = 6
 * Draw = 3
 * Lose = 0
 */
const input = await Deno.readTextFile("Day_2/input.txt");
const brackets = input.split("\r\n");
let points = 0;

interface Results {
    [result: string]: number
}
const results: Results = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,
  };

brackets.forEach(b => {
    points += results[b];
})
console.log(points);