function fastPower(power, number) {
    if (power === 0) {
        return 1;
    }
    const subprob = fastPower(Math.floor(power / 2), number);
    const subprobsquare = subprob * subprob;
    
    if (power & 1) {
        return number * subprobsquare;
    } else {
        return subprobsquare;
    }
}
console.log(fastPower(4, 3));
