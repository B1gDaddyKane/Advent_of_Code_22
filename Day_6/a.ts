const input = await Deno.readTextFile("Day_6/input.txt");

const stream = input.split("");
let marker : string[] = [];
let appearedAt = 0;

stream.forEach((s, index) => {
    if(appearedAt == 0){
        if(marker.length == 4) {
            appearedAt = index;
            return;
        }
        if(marker.includes(s)) {
            marker = marker.slice(marker.indexOf(s) + 1, marker.length)
            marker.push(s);
            return;
        }
        marker.push(s);
    }
});

console.log("The marker:", marker,"appeared after:",appearedAt,"characters")