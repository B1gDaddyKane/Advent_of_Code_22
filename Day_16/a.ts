const input = await Deno.readTextFile("Day_16/test.txt");

type Valves = {
    name: string;
    flowRate: number;
    tunnels: Valves[];
}

const createValves = (input: string): Valves => {
    const valve: Valves = {} as Valves;
    valve.flowRate = +input.split("").filter(i => +i)[0];
    valve.name = input.split(" ")[1];
    console.log(input.match(/\b\w{2}\b/))
    valve.tunnels = input.match(/\b[A-Z]{2}\b/)?.filter(i => i !== valve.name).map(i => createValves(i) as Valves)!;
    return valve;
}

const valves = input.split("\r\n").map(i => createValves(i) as Valves)

let time = 30;
let totalPressureReleased = 0;
const openedValves: Valves[] = [];

console.log(valves);