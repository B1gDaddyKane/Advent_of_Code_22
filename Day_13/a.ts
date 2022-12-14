const input  = await Deno.readTextFile("Day_13/test.txt");

const pairs = input.split("\r\n")
let currentIndex = 0;
let sum = 0;

const MakeToArray = (str: string): string[] => {
    str.split("").forEach(s => {
        if(+s)
    })
}

for (let index = 0; index < pairs.length; index += 3) {
    currentIndex++;
    for (let i = 0; i < pairs[index].length; i++) {
        if(pairs[index][i] == "[" && pairs[index+1][i] == "[") continue;
        if(+pairs[index][i] > +pairs[index+1][i]) break;
    }

    console.log(`Pair 1`,pairs[index],`Pair 2`,pairs[index+1]);
    sum += currentIndex;
}
console.log(sum);