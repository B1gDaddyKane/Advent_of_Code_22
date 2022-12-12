import { makeMonkey, monkeys } from "./monkeyCreater.ts";
const input = await Deno.readTextFile("Day_11/input.txt");
const lines = input.split("Monkey").map(x => x.split("\r\n")).map(x => x.filter(x => x != "")).filter(x => x.length);

let activeMonkeys: number[] = [0,0,0,0,0,0,0,0];

lines.forEach(monkey => {
    makeMonkey(monkey);
});

for(let i = 0; i < 10000; i++) {
    for(let h = 0; h < monkeys.length; h++) {
        for(let j = 0; 0 < monkeys[h].StartingItems.length; j++) {
            let worryLevel = monkeys[h].StartingItems.reverse().pop()!;
            worryLevel = monkeys[h].Operation(worryLevel);
            worryLevel %= 9699690;
            activeMonkeys[h] += 1;
            if(monkeys[h].Test(worryLevel)) monkeys[monkeys[h].ifTrue].StartingItems.push(worryLevel)
            else monkeys[monkeys[h].ifFalse].StartingItems.push(worryLevel);
        }
    }
}
activeMonkeys.forEach((m, index) => {
    console.log(`Monkey ${index} inspected items ${m} times.`)
});

activeMonkeys = activeMonkeys.sort((a, b) => (b - a))
console.log(activeMonkeys[0] * activeMonkeys[1]);