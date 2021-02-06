// Union
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(20, 24, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("20", "24", "as-number");
console.log(combinedStringAges);
var sample1 = combine("test", "kazumasa", "as-text");
console.log(sample1);
