function factorial(n) {
    if (n < 0) {
        console.log("Negative numbers are  not allowed");
    }
    else {
        var result = 1;
        for (var index = 1; index <= n; index++) {
            result = result * index;
        }
        console.log("Factorial of ".concat(n, " is ").concat(result));
    }
}
factorial(5);
factorial(-8);
