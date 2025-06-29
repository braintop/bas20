function evenOrOdd1(n) {
    if (n % 2 == 0) {
        return "even"
    }
    else {
        return "odd"
    }
}
function evenOrOdd2(n) {
    if (n % 2 == 0) {
        return "even"
    }
    return "odd"
}

function evenOrOdd3(n) {
    return n % 2 == 0 ? "even" : "odd"
}

function evenOrOdd4(n) {
    return n1 % 2 == 0 // true of false 
}



let solution1 = evenOrOdd1(203)
console.log(solution1)