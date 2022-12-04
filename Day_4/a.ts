const input = await Deno.readTextFile("Day_4/input.txt");
const sections = input.split("\r\n");

let overlappingCount = 0;

sections.forEach(s => {
    const splitSections = s.split(/[,-]/g);

    if(+splitSections[0] >= +splitSections[2] && +splitSections[1] <= +splitSections[3]) {
        console.log(splitSections[0], "-", splitSections[1], "is contained in", splitSections[2], "-", splitSections[3]);
        ++overlappingCount;
        return;
    }
    if(+splitSections[0] <= +splitSections[2] && +splitSections[1] >= +splitSections[3]) {
        console.log(splitSections[2], "-", splitSections[3], "is contained in", splitSections[0], "-", splitSections[1]);
        ++overlappingCount;
        return;
    }
})

console.log(overlappingCount);