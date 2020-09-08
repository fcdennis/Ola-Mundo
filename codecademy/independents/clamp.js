const _ = {
    clamp(number, lower, upper){
        if (number < lower){
            return lower;
        } else if (number > upper){
            return upper;
        } else {
            return number;
        }
    }
}

console.log(_.clamp(-1, 0, 3));// print 0
console.log(_.clamp(1, 0, 3));//print 1
console.log(_.clamp(5, 0, 3)); // print 3