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
     "A X": 3,
     "A Y": 4,
     "A Z": 8,
     "B X": 1,
     "B Y": 5,
     "B Z": 9,
     "C X": 2,
     "C Y": 6,
     "C Z": 7,
   };
 
 brackets.forEach(b => {
     points += results[b];
 })
 console.log(points);