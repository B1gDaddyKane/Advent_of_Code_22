const input = await Deno.readTextFile("Day_10/input.txt");

const instructions = input.split("\r\n");
let X = 1;
let cycle = 0;
let index = 0;
let row = 0;
const CRT: string[][] = [[],[],[],[],[],[]] as string[][];

const checkCycle = () => {
    if(cycle == 40 || cycle == 80 || cycle == 120 || cycle == 160 || cycle == 200 || cycle == 240) {
        row++;
        index = 0;
    }
    CRT[row][index] = (index == X || index == X + 1 || index == X - 1) ? "#" : ".";
    index++;
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

CRT.forEach(l => {
    console.log(l.join(""))
})