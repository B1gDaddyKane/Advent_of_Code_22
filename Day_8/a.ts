const input = await Deno.readTextFile("Day_8/input.txt");
const rows = input.split("\r\n").map(x => x.split("").map(x => parseInt(x)));

const test = [[3,0,3,7,3],[2,5,5,1,2],[6,5,3,3,2],[3,3,5,4,9],[3,5,3,9,0]]
let visible = 0;

rows.forEach((r, index) => {
    r.forEach((e, i) => {
        const c = rows.map(row => row[i]).flatMap(x => x);
        const isVisibleHor = (r.slice(0, i).every(x => x < e) || r.slice(i+1, r.length).every(x => x < e));
        const isVisibleVer = (c.slice(0, index).every(x => x < e) || c.slice(index+1, c.length).every(x => x < e));
        if(isVisibleHor || isVisibleVer) visible++;
    });
});

console.log(visible);