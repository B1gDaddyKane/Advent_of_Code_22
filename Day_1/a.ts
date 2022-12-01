const input = await Deno.readTextFile("Day_1/input.txt");
const brackets = input.split("\r\n");

let largestCal = 0;
let tempCal = 0;

brackets.forEach((b, i)  => {
    const nextWord = brackets[i + 1] == null ? brackets[i] : brackets[i + 1];
    tempCal = tempCal + +b;
    if (!nextWord.length || nextWord == brackets[i]) {
        largestCal = tempCal > largestCal ? tempCal : largestCal;
        tempCal = 0;
    }
})
console.log("largestCal: ", largestCal)