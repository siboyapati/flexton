var strStr = function (haystack, needle) {

    var hlen = haystack.length;
    var nlen = needle.length;

    if (hlen == 0 && nlen == 0) {
        return 0;
    }
    if (nlen == 0) {
        return 0;
    }
    var index = -1, k;

    for (var i = 0; i < hlen; i++) {
        index = -1;
        k = 0;

        if (i + nlen > hlen) {

            continue;
        }
        while (needle[k] === haystack[i + k] && i + k < hlen) {

            if (index == -1) {
                index = i;
            }
            if (k == nlen - 1) {
                return index;
            }
            k++;
        }
    }
    return index;

}

var haystack = "a", needle = "a";

console.log(strStr(haystack, needle))