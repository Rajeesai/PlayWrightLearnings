function fibonacci(n) {
    if (n < 0) {
        console.log("Negative numbers are  not allowed");
    }
    else {
        var a = [0, 1];
        console.log("fibonacci series for ".concat(n, " is: "));
        for (var i = 0; i < n; i++) {
            console.log("fibonacci series  is  : ", a[0]);
            var current = a[0];
            var next = a[1];
            a = [next, current + next];
        }
    }
}
fibonacci(3);
fibonacci(2);
fibonacci(-2);
