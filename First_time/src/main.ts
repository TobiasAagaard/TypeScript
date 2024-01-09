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
