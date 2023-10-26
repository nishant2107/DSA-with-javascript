function tileOccurences(n){
    // Base case
    if(n<4) {
        return 1;
    }
    
    return tileOccurences(n-1) + tileOccurences(n-4);
}

console.log(tileOccurences(4))
