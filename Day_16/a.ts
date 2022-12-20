const input = await Deno.readTextFile("Day_16/test.txt");

type Valves = {
    flowRate: number;
    tunnelsDistances: ValveDistances;
    name: string
}

type ValveDistances = {
    [name: string]: number
}

const createValves = (input: string): Valves => {
    const valve: Valves = {} as Valves;
    const inputSplit = input.replace(/,/g,"").split(" ");
    valve.name = inputSplit[1];
    valve.flowRate = parseInt(inputSplit[4].replace(";","").split("=")[1]);
    valve.tunnelsDistances = {} as ValveDistances;
    inputSplit.slice(9).forEach(i => {
        valve.tunnelsDistances[i] = 0;
    });
    return valve;
}

const valves = input.split("\r\n").map(i => createValves(i) as Valves)

const bfs = (start: string, end: string) : string[] => {
    const queue: string[][] = [];
    const visited: string[] = [start];

    if (start == end) return [start];
    queue.push([start]);
    
    while(queue.length > 0) {
        const path: string[] = queue.shift()!;
        const node:string = path[path.length - 1];

        for (const neighbor in valves.find(v => v.name == node)!.tunnelsDistances) {
            if (visited.includes(neighbor)) continue;

            if(neighbor == end) return path.concat([neighbor]);
            visited.push(neighbor);
            queue.push(path.concat([neighbor]));
        }
    }
    return [];
}

valves.forEach(start => {
    valves.forEach(end => {
        start.tunnelsDistances[end.name] = bfs(start.name, end.name).length - 1;
    });
});
console.log(valves);