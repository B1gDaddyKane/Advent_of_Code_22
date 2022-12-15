const input  = await Deno.readTextFile("Day_13/input.txt");
type Packet = (number | Packet)[];
const pairs = input.split("\r\n\r\n").map(lines => lines.split("\n").map(_ => JSON.parse(_)) as [Packet, Packet]);

const comparePairs = (pair1: Packet, pair2: Packet) : boolean => {
    while(pair1.length > 0) {
        if(pair2.length < 1) return false;

        const left = pair1.shift()!;
        const right = pair2.shift()!;

        if(typeof left === 'number' && typeof right === 'number')
        {
            if(left < right) return true;
            if(left > right) return false;
        } else {
            const isOrdered = comparePairs(
                    Array.isArray(left) ? left : [left], 
                    Array.isArray(right) ? right : [right] as Packet
                );
            if(isOrdered !== undefined) return isOrdered;
        }
    }

    return true;
}

let sumOfIndices = 0;
pairs.forEach(([pair1,pair2],index) => {
    const res = comparePairs(pair1, pair2);
    if(res) sumOfIndices += index + 1
});
console.log(sumOfIndices);