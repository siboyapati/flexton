var isPal = function(low, high, s){

    if (s[low] != s[high] || low < 0 || high >= s.length) {
        return "";
    }
    while (low >= 0 && high < s.length && s[low] === s[high]) {
        low--;
        high++;
    }
    return s.substring(low + 1, high);
}


var longestPalindrome = function(s) {

    if(s.length == 0 || s.length ==1){
        return s;
    }

    var largest = 1;
    var len = "";
    var mx = "";

    for(var i =1; i<s.length; i++){

        len = isPal(i-1,i,s);
        if(len.length > largest){
            mx = len;
            largest = mx.length;
        }
        len = isPal(i-1,i+1,s);
        if(len.length > largest){
            mx = len;
            largest = mx.length;
        }
    }
    return mx;

};

var str = "ccc";
console.log(longestPalindrome(str));