const input = await Deno.readTextFile("Day_1/input.txt");
const brackets = input.split("\r\n");

let largestCal = 0;
let tempCal = 0;
const totalCals: number[] = [];

brackets.forEach((b, i)  => {
    const nextWord = brackets[i + 1] == null ? brackets[i] : brackets[i + 1];
    tempCal = tempCal + +b;
    if (!nextWord.length || nextWord == brackets[i]) {
        totalCals.push(tempCal);
        tempCal = 0;
    }
})
totalCals.sort((a, b) => a - b).reverse().slice(0,3).forEach(c => largestCal += c);

console.log(largestCal);