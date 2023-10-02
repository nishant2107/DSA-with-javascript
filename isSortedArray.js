let arr = [1,7,3,5,6];
let size = arr.length;
function checkSortedArray(arr, size, index =0) {
    if(size === 1 ||  size ===0){
return true;
    }
    if(arr[index] < arr[index+1]){
        return checkSortedArray(arr, size-1, index+1);
    }
    else{
        return false;
    }
}

console.log(checkSortedArray(arr, size));
