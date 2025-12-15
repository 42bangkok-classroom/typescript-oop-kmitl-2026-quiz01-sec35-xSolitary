export {};

const balance: number = Number(process.argv[2]);
const amount: number = Number(process.argv[3]);

if (Number.isNaN(balance)&&Number.isNaN(amount)){
  console.log('Invalid inout');
}
else if(!balance||!amount){
    console.log("Invalid Input");
}
else if (amount > balance) {
  console.log("Insufficient balance");
}

else if (amount > 5000) {
  console.log("Exceeds per-withdrawal limit");
}

else {
  console.log("Withdrawal successful");
}