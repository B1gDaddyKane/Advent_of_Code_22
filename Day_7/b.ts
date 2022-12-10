interface directoryInterface {
    [dirName: string]: number;
}

const input = await Deno.readTextFile("Day_7/input.txt");

const commands = input.split("\r\n");
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

const root = directories["/"];
let list: number[] = [];

for (const dir in directories) {
    // Find the smallest dir that when delleted will fullfill the space requirements of: 40000000 = 70000000-30000000
    if(root - directories[dir] <= 40000000 ) {
        list.push(directories[dir]);
    }
}

console.log(list.sort((a, b) => a + b).pop())