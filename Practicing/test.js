
// AUTO_REFRESH_STOPPER

function makeMultiplier( multiplier ){
    var myFunc = function (x){
        return multiplier * x;
    }
    return myFunc;
}

var multiplyby3 = makeMultiplier(3);
console.log(multiplyby3(10));

function OP(x, operation){
    return operation(x);
}

var result = OP(5,multiplyby3)
console.log(result);