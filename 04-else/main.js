let x1 = +prompt("enter number 1");//input
let discount = 0
if (x1 > 50) {
    discount = discount + 50
}
else if (x1 > 100) {
    discount = discount + 100
}
else if (x1 > 200) {
    discount = discount + 200
}

alert(discount)

