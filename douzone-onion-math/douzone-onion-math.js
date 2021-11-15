module.exports = {
    sum: function () {
        var sum = 0;
        Array.from(arguments).forEach((e) => sum += e)
        return sum
    },
    max: function(){
        var max = Number.MIN_SAFE_INTEGER
        Array.from(arguments).forEach((e) => max < e? max = e: false)
        return max
    },
    min: function(){
        var min = Number.MAX_SAFE_INTEGER
        Array.from(arguments).forEach((e) => min > e? min = e: false)
        return min
    }
}