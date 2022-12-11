export interface MonkeyInterface {
    StartingItems: number[];
    Operation: (worryLevel: number) => number;
    Test: (a:number) => boolean;
    ifTrue: number;
    ifFalse: number;
}

export const monkeys: MonkeyInterface[] = [];

export const makeMonkey = (monkeyStrings: string[]) => {
    const Monkey: MonkeyInterface = {} as MonkeyInterface;
    monkeyStrings.forEach(str => {
        if(str.includes("Starting items")) {
            Monkey.StartingItems = str.split(" ").map(x => x.split(",")).map(x => x.filter(x => x != "")).filter(x => +x).flatMap(x => x.map(x => parseInt(x)))
            return;
        }
        if(str.includes("Operation")) {
            const b:number = str.split(" ").filter(x => +x).map(x => parseInt(x))[0];
            
            if(str.includes("old * old")) {
                Monkey.Operation = (worryLevel: number) => {return worryLevel * worryLevel};
                return;
            }
            
            if(str.includes("old * ")) {
                Monkey.Operation = (worryLevel: number) => {return worryLevel * b}
                return;
            }
            
            if(str.includes("old + ")) {
                Monkey.Operation = (worryLevel: number) => {return worryLevel + b}
                return;
            }
        }
        if(str.includes("Test")) {
            const TestDiv = str.split(" ").filter(x => +x).map(x => parseInt(x))[0];
            Monkey.Test = (worryLevel: number) => {return worryLevel % TestDiv == 0}
            return;
        }
        if(str.includes("If true")) {
            Monkey.ifTrue = +str.split(" ").pop()!;
            return
        }
        if(str.includes("If false")) {
            Monkey.ifFalse = +str.split(" ").pop()!;
            return;
        }
    });
    monkeys.push(Monkey);
}