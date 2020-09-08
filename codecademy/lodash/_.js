const _ = {
    clamp(number, lower, upper){
        if (number < lower){
            return lower;
        } else if (number > upper){
            return upper;
        } else {
            return number;
        }
    },

    inRange(number, start, end){
        if (end === undefined){
            end = start;
            start = 0;
        };
        if (start > end){
            let temp = start;
            start = end;
            end = temp;
        }
        return number >= start && number < end
    },

    words(string) {
        let words = string.split(" ")
        return words
    },

    pad(string, length) {
        if (length <= string.length){
            return string;
        } else{
            let newString = [];
            let totalBlanckSpaces = length - string.length;
            let start = Math.floor(totalBlanckSpaces / 2)
            for (let i = 0; i < length; i++){
                
            }
        }

    }

}
// Do not write or modify code below this line.
module.exports = _;