

let a = 100;
let b = 8;

function mod(n, m) {
    let i = 1;
    let product = 0;
    if (m == 0) {
        return -1;
    }

    if (m < 0) {
        m = -m;
    }

    if (n < 0) {
        n = -n;
    }

    while (product <= n) {
        product = m * i;
        i++;
    }
    return n - (product - m);
}


console.log(mod(a, b));

