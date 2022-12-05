import { crates } from "./creates.ts";
const input = await Deno.readTextFile("Day_5/input.txt");

const myCrates = crates;
const moves = input.split("\r\n");
let topCrates= "";

moves.forEach(m => {
    const move = m.split(" ");
    for (let index = 0; index < +move[1]; index++) {
        myCrates[+move[move.length-1]-1].push(myCrates[+move[3]-1]?.pop()!);
    }
});

myCrates.forEach(m => {
    topCrates = topCrates.concat(m.pop()!);
});

console.log(topCrates);