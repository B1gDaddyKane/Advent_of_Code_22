import { prioPoints } from "./prioPoints.ts";

const input = await Deno.readTextFile("Day_3/input.txt");

const items = input.split("\r\n");
let totalPrio = 0;

items.forEach(i => {
    const compartmentF = i.slice(0, i.length/2);
    const compartmentS = i.slice(i.length/2, i.length);
    const sameItemType = compartmentF.split("").filter(i => compartmentS.split("").find(j => i == j)).pop();
    totalPrio += prioPoints[sameItemType!];
})
console.log(totalPrio);