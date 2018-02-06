var data = [0,3,0];
function test(data, elem) {
    if (typeof data == "number") {
        return (!elem || data > elem)?data:elem;
    } else {
        for (var i=0; i<data.length; i++) {
            elem = test(data[i], elem);
        }
        return elem;
    }
}
console.log(data.length)
var result = test(data);
console.log(result);