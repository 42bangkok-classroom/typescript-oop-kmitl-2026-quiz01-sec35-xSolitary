export {};

const op: string = process.argv[2];
const a: number = Number(process.argv[3]);
const b: number = Number(process.argv[4]);

let result: number;
if (Number.isNaN(a)&&Number.isNaN(b)){
  console.log('Invalid inout');
}
else{
  switch (op) {
    case "add":
      result = a + b;
      console.log(result);
      break;

    case "sub":
      result = a - b;
      console.log(result);
      break;

    case "mul":
      result = a * b;
      console.log(result);
      break;

    case "div":
      if (b === 0) {
        console.log("Invalid input");
      } else {
        result = a / b;
        console.log(result);
      }
      break;

    default:
      console.log("Invalid operator");
  }

}
