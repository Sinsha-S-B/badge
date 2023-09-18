const x = "3.14159";
const y = parseFloat(x);
console.log(y); // Output: 3.14159

const str = "Hello, world!";
const str2 = parseFloat(str);
console.log(str2); // Output: NaN (Not-a-Number)

const scientificNotation = "1.23e-4";
const sciNotationFloat = parseFloat(scientificNotation);
console.log(sciNotationFloat); // Output: 0.000123
