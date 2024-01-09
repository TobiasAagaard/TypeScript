var operation;
function calculate(a, b, operation) {
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
            }
            else {
                return "DON*T YOU F#!KING DARE DEVIDEING BY 0!!!";
            }
    }
}
var result = calculate(7, 5, "devide");
console.log(result);
