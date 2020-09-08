const _ = {
    inRange(number, start, end){
        return number >= start && number <= end
    }
}

console.log(_.inRange(-10, 0, 10)); // print false
console.log(_.inRange(5, 0, 10)); // print true
console.log(_.inRange(15, 0, 10)); // print false