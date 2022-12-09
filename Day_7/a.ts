interface directoryInterface {
    [dirName: string]: number
}

const input = await Deno.readTextFile("Day_7/input.txt");

const commands = input.split("\r\n");
let sum = 0;
const path : string[] = [];
const directories: directoryInterface = {};

commands.forEach(c => {
    if (c.startsWith("$ cd ..")) {
        path.pop();
        return;
    }
    if (c.startsWith("$ cd")) {
        const directory = c.split(" ").pop()!;

        if(!directories[directory]) {
            directories[directory] = 0;
        }
        path.push(directory);
        return;
    }
    if (+c.split(" ")[0]) {
        path.forEach(p => {
            directories[p] += +c.split(" ")[0];
        })
    }
});

for (const dir in directories) {
    sum += directories[dir] <= 100000 ? directories[dir] : 0;
}

console.log(directories);
console.log(sum);