
function printDecreasing(n){
    
    // Base case
    if(n==0){
        return;
    }
    console.log(n);
    // Recursive call
    printDecreasing(n-1);
}

function printIncreasing(n) {
    // base case
    if(n==0) {
        return;
    }
    //Recursive call
    printIncreasing(n-1);
    console.log(n)
}

printDecreasing(5);
printIncreasing(5);
