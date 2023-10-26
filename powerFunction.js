function power(p, number) {
    if(p === 0) {
        return 1;
    }
    
    return number * power(p-1, number)
}

console.log(power(1, 3));
