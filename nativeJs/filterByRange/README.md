#Filter by Range
Create filterRange `function(arr, a, b)`, which receives an array arr numbers and 
removes all the numbers is a..b range. That is, the test is of the form 
`a ≤ arr [i] ≤ b`. The function should change the array itself and did not return.

###Example:

    arr = [5, 3, 8, 1];
    filterRangeInPlace (arr, 1, 4); // Delete the number outside the range 1..4
    alert (arr); // Array changed: left [3, 1]
    