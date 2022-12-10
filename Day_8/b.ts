const input = await Deno.readTextFile("Day_8/input.txt");
const rows = input.split("\r\n").map(x => x.split("").map(x => parseInt(x)));

const test = [[3,0,3,7,3],[2,5,5,1,2],[6,5,3,3,2],[3,3,5,4,9],[3,5,3,9,0]]
let BestScenicScore = 0;

test.forEach((r, index) => {
    r.forEach((e, i) => {
        const c = test.map(row => row[i]).flatMap(x => x);

        const scenicLeft = r.slice(0, i).findIndex(x => x >= e) == -1 
        ? (r.slice(0,i).length == 0 ? r.slice(0,i).length : r.slice(0,i).length - 1)
        : r.slice(0, i).findIndex(x => x >= e) + 1;

        const scenicRight = r.slice(i+1, r.length).findIndex(x => x >= e) == -1 
        ? (r.slice(i+1, r.length).length == 0 ? r.slice(i+1, r.length).length : r.slice(i+1, r.length).length - 1)
        : r.slice(i+1, r.length).findIndex(x => x >= e) + 1;

        const scenicUp = c.slice(0, index).findIndex(x => x >= e) == -1 
        ? (c.slice(0, index).length == 0 ? c.slice(0, index).length : c.slice(0, index).length - 1)
        : c.slice(0, index).findIndex(x => x >= e) + 1;

        const scenicDown = c.slice(index+1, c.length).findIndex(x => x >= e) == -1 
        ? (c.slice(index+1, c.length).length == 0 ? c.slice(index+1, c.length).length : c.slice(index+1, c.length).length - 1)
        : c.slice(index+1, c.length).findIndex(x => x >= e) + 1;
        BestScenicScore = (scenicLeft * scenicRight * scenicUp * scenicDown) > BestScenicScore ? (scenicLeft * scenicRight * scenicUp * scenicDown) : BestScenicScore;
    });
});
 console.log(BestScenicScore)