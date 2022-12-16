const input  = await Deno.readTextFile("Day_13/input.txt");
type Packet = (number | Packet)[];
const pairs = input.split("\r\n\r\n").map(lines => lines.split("\n").map(_ => JSON.parse(_)) as [Packet, Packet]);

const dividerPacket = [[[2]],[[6]]];

const comparePairs = (pair1: Packet, pair2: Packet) : number => {
    for(let i = 0; i < pair1.length; i++) {
        if(pair2.length <= i) return -1;

        const left = pair1[i]!;
        const right = pair2[i]!;

        if(typeof left === 'number' && typeof right === 'number')
        {
            if(left < right) return 1;
            if(left > right) return -1;
        } else {
            const isOrdered = comparePairs(
                    Array.isArray(left) ? left : [left], 
                    Array.isArray(right) ? right : [right]
                );
            if(isOrdered !== 0) return isOrdered;
        }
    }
    if(pair1.length === pair2.length) return 0;

    return 1;
}

let multOfIndices = 1;
const packets: Packet[] = [...pairs.flat(1),...dividerPacket];

packets.sort((a, b) => 
    comparePairs(a,b)
);
packets.reverse();
dividerPacket.forEach(packet => {
    multOfIndices *= packets.findIndex(p => p === packet) + 1;
})
console.log(multOfIndices);