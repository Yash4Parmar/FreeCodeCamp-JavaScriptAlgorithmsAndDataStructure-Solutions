function fun(a, b) {
    if (b <= a) {
        return a;
    }
    return (a + fun(a + 1, b));
}
var num1;
var num2;
console.log(fun(1, 4));