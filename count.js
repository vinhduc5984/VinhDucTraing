var count = function(arr){
    return 'There are ' + arr.length + ' elements in this arr'; 
};

var sum = function(a,b)
{
    return `The sum is: ${a+b}`;
};

var pi = 3.14;


/*module.exports.count = count;
module.exports.sum = sum;
module.exports.pi = pi;*/

// Cách gọi module khác

module.exports = {
    count: count,
    sum: sum,
    pi : pi
};

