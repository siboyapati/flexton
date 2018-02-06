// Input: ABC
// Output: 2
// Input: AACECAAAA
// Output: 2


var maxPalindrome = function (A) {

    if (A.length == 0 || A.length == 1) {
        return A.length;
    }
    var max = 1;
    for (var i = 1; i < A.length; i++) {

        var len = isPal(i - 1, i + 1, A);
        if (len > max) {
            max = len;
        }
        len = isPal(i - 1, i, A);
        if (len > max) {
            max = len;
        }
    }
    return A.length - max;
}

function isPal(start, end, A) {
    while (start >= 0 && end < A.length && A[start] == A[end]) {
        start--;
        end++;
    }
    return end - start - 1;
}

console.log(maxPalindrome("ABC"));

banana