const input = await Deno.readTextFile("Day_4/input.txt");
const sections = input.split("\r\n");

let overlappingCount = 0;

sections.forEach(s => {
    const splitSections = s.split(/[,-]/g);

    if(+splitSections[1] >= +splitSections[2] && +splitSections[0] <= +splitSections[3]) {
        console.log(splitSections[0], "-", splitSections[1], "overlaps with", splitSections[2], "-", splitSections[3]);
        ++overlappingCount;
        return;
    }
    console.log(splitSections[0], "-", splitSections[1], "does not overlaps with", splitSections[2], "-", splitSections[3]);
})

console.log(overlappingCount);