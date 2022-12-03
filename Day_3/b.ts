import { prioPoints } from "./prioPoints.ts";

const input = await Deno.readTextFile("Day_3/input.txt");

const items = input.split("\r\n");
let totalPrio = 0;
let teamRucksack: string[][] = [];

items.forEach((i, index) => {
    index++;
    teamRucksack.push(i.split(""));
    if(index % 3 == 0 && index != 0) {
        let type = teamRucksack[0].filter(i => teamRucksack[1].find(j => j == i));
        type = teamRucksack[2].filter(i => type.find(j => j == i));
        totalPrio += prioPoints[type.pop()!]
        teamRucksack = [];
    }
})
console.log(totalPrio);