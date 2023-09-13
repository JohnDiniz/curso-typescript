function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function showResult(result: number): void | boolean {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}

(() => {
  const num1String = prompt("First Number");
  const num2String = prompt("Second Number");

  const num1 = parseFloat(num1String);
  const num2 = parseFloat(num2String);

  let result = sum(num1, num2);

  result += multiply(1, 2);
  showResult(result);
})();
