const input = await Deno.readTextFile("Day_10/input.txt");

const instructions = input.split("\r\n")
let X = 1;
let cycle = 0;
let sum = 0;

const checkCycle = () => {
    if(cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220) {
        console.log("X and cycle at interresting cycle is: ", cycle, X);
        sum += cycle * X;
    }
}

instructions.forEach(i => {
    checkCycle()
    if(i.includes("addx")) {
        cycle++;
        checkCycle();
        cycle++;
        X += +i.split(" ").pop()!;
        return;
    }
    cycle++;
});

console.log("The total sum of signal strength of interesting cycles is: ",sum);