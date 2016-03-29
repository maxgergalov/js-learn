#Recursion, cycles, fibona4i and factorial
###Part 1
Write function sumTo (n), for which calculates the sum of the numbers n 1 to n, for example:

`sumTo (1) = 1`<br>
`sumTo (2) = 2 + 1 = 3`<br>
`sumTo (3) = 3 + 2 + 1 = 6`<br>
`sumTo (4) = 4 + 3 + 2 + 1 = 10`<br>
...
`sumTo (100) = 100 + 99 + 2 + ... + 1 = 5050`

Make three options:

- Using cycle.
- Via recursion as sumTo (n) = n + sumTo (n-1) for n> 1.
- Using the formula for the sum of an arithmetic progression.

###Part 2

Write function that return **factorial**

`factorial(n)`

Easy? ok...

###Part 3

Fibonacci sequence has the formula: `Fn = Fn-1 + Fn-2`. That is, the next number is the sum of the previous two.

The first two numbers are equal to `1`, then `2` `(1 + 1)`, then `3` `(1 + 2)`, `5` `(2 + 3)`, and so on: `1, 1, 2, 3, 5, 8, 13, 21 ... `.

Write a function `fib (n)`, which returns the n-th Fibonacci number. Operation Example:

`function fib (n) {/ * your code * /}`

`alert (fib (3)); // 2`<br>
`alert (fib (7)); // 13`<br>
`alert (fib (77)); // 5527939700884757`

