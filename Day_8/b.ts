const input = await Deno.readTextFile("Day_8/input.txt");
const rows = input.split("\r\n").map(x => x.split("").map(x => parseInt(x)));

let BestScenicScore = 0;

const scenicScore = (arr: number[], index: number): number => {
    let scenicLeft = 0;
    let scenicRight = 0;

    for (let i = index - 1; i >= 0; i--) {
        scenicLeft++;
        if(arr[i] >= arr[index]) break;    
    }

    for (let i = index + 1; i < arr.length; i++) {
        scenicRight++;
        if(arr[i] >= arr[index]) break;
    }

    return scenicLeft * scenicRight;
}

rows.forEach((r, index) => {
    r.forEach((_e, i) => {
        const c = rows.map(row => row[i]).flatMap(x => x);

        const horScore = scenicScore(r, i);
        const verScore = scenicScore(c, index);
        
        const currentScore = horScore * verScore;

        BestScenicScore = currentScore > BestScenicScore ? currentScore : BestScenicScore;
    });
});
 console.log(BestScenicScore)