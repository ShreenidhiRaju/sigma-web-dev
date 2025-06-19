/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
do {
    var r = Math.random();
    var a = Number(prompt("Enter a:"));
    var b = Number(prompt("Enter b:"));
    var op = prompt("Enter operator (+, *, -, /):");

    let obj = {
        '+': '-',
        '*': '+',
        '-': '/',
        '/': '**'
    };

    let expression;
    if (r < 0.1) {
        var nop = obj[op];
        expression = `${a} ${nop} ${b}`;
    } else {
        expression = `${a} ${op} ${b}`;
    }

    alert(`The result is ${eval(expression)}`);

    var ch = prompt("Do you want to continue? (y/n)");
} while (ch === 'y');

