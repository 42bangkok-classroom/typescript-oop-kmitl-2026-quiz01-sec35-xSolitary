export {};
const n: number = Number(process.argv[2]);
let sum = 1;
if(Number.isNaN(n)){
    console.log("Invalid Input");
}
else if(n<0){
    console.log("Invalid Input");
}
else{
    for(let i = 1;i<=n;i++){
    sum *= i;
    }
    console.log(sum);
}