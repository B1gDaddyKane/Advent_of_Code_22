const input = await Deno.readTextFile("Day_16/test.txt");

type Valves = {
    name: string;
    flowRate: number;
    tunnels: string[];
}

const createValves = (input: string): Valves => {
    const valve: Valves = {} as Valves;
    valve.flowRate = +input.split("").filter(i => +i).join("");
    valve.name = input.split(" ")[1];
    valve.tunnels = input.split(" ").filter(i => i.match(/\b[A-Z]{2}\b/)).filter(i => i !== valve.name).map(i => i.replace(",", ""));
    return valve;
}

const valves = input.split("\r\n").map(i => createValves(i) as Valves)

let totalPressureReleased = 0;
const openedValves: Valves[] = [];
let currentValve: Valves = valves[0];

for (let index = 30; index >= 0; index--) {
    let nextValve: Valves = {flowRate: 0} as Valves;

    openedValves.forEach(o => {
        totalPressureReleased += o.flowRate;
    });

    if(currentValve.flowRate != 0 && !openedValves.includes(currentValve)) {
        index--;

        openedValves.push(currentValve);

        currentValve.tunnels.forEach(t => {
            nextValve =  valves.filter(v => v.name === t)[0].flowRate >= nextValve.flowRate 
            && !openedValves.includes(valves.filter(v => v.name === t)[0]) 
            ? valves.filter(v => v.name === t)[0] 
            : nextValve;
        });

        currentValve = nextValve;
        continue;
    }

    currentValve.tunnels.forEach(t => {
        nextValve =  valves.filter(v => v.name === t)[0].flowRate >= nextValve.flowRate 
        && !openedValves.includes(valves.filter(v => v.name === t)[0])
        ? valves.filter(v => v.name === t)[0] 
        : nextValve;
    });

    currentValve = nextValve;
    continue
}
console.log(totalPressureReleased);