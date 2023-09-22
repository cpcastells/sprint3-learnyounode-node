const steps = process.argv.slice(2);

const sum = steps.reduce(
  (acc, currentNumber) => acc + Number(currentNumber),
  0,
);

console.log(sum);
