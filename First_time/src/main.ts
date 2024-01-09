let operation: string | "add" | "subtract" | "multiply" | "divide";

function calculate(a: number, b: number, operation: number | string) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b !== 0) {
                return a / b;
            } else {
                return "DON*T YOU F#!KING DARE DEVIDEING BY 0!!!"
            }
    }
}


const result = calculate(7, 5, "devide" )
console.log(result);



//!importent

//variabler
let firstName: string = "Tobias";
let age: number = 22;
let age22: boolean = true;
let nullValue: null = null;
let undefindedValue: undefined = undefined;


//arrys

let arrNumbers: Array<number> = [22, 33]
let arrNames: Array<string> = ["Kasper", "Lotte"] 
let arrFunny: Array<string | number> = ["Kasper", "Lotte", 33]

arrFunny.push(66);

//objeckt

let personObj = {
    firstName: "Thomas",
    lastName: "Sørensen",
    eyeColor: "Red",
    hairColor: "Brown",
    age: 55
}

let tal: number = 10;
let procent: number = 17;


function beregnProcent(tal: number, procent: number) {
    if (tal < 0 || procent < 0 || procent > 100) {
    }
    return (tal * procent) / 100;
}


function getaArray<T>(array: T[], indeks: number): T | undefined {
    if (indeks < 0 || indeks >= array.length) {
    }

    return array[indeks];
}


const mitArray = [10, 20, 30, 40, 50];
const indeksAtHente = 2;



console.log("hello my name is ", firstName, " and i'm", age, " old");

