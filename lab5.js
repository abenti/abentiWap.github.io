// Question 1
function max(x, y) {
    if(x > y) 
    return x;
    else 
    return y;
}

let r = max(3, 6);

//console.log(r);

//Question 2

function maxOfThree(x, y,z) {
    ArrayList = [x, y, z];
    // if(x >= y && x >= z)
    // return x;
    // if(y >= x && y >= z)
    // return y;
    // else
    // return z;
    return max(ArrayList);
}

let result = maxOfThree(8, 9, 10);
console.log(result);