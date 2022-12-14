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
        path.push(c.split(" ").pop()!);
        if(!directories[path.join("\\")]) {
            directories[path.join("\\")] = 0;
        }
        return;
    }
    if (+c.split(" ")[0]) {
        Object.entries(directories).filter(x => path.join("\\").includes(x[0])).forEach(x => directories[x[0]] += +c.split(" ")[0]);
    }
});

for (const dir in directories) {
    sum += directories[dir] <= 100000 ? directories[dir] : 0;
}

console.log(sum);