const n = Number(process.argv[2]);

if(Number.isNaN(n)){
    console.log("Invalid Input");
}
else if(n<1){
    console.log("Invalid Input");
}
else{
    
    for (let i = 1; i <= n; i++) {
        if(i%21==0){
            console.log("FooBar");
        }
        else if(i%7==0){
            console.log("Bar");
        }
        else if(i%3==0){
            console.log("Foo");
        }
        else{
            console.log(i);
        }

    }
}
