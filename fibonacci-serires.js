function fibonacci (val) {
    if(val ===0 || val ===1) {
        return val;
    }

    const f1 = fibonacci(val-1);
    const f2 = fibonacci(val -2);
    return f1+f2;
}

console.log(fibonacci(4))
