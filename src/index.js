// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    
    // Return an object containing the minimum number of coins needed to make change

    // var H=0;
    // var Q=0;
    // var rem=100

    var cur=currency;
    var obj={
            H: cur%50,
             // if (H) {}
            Q: cur%20,
            D: cur%10,
            N: cur%5,
            P: cur%1,
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
     return obj;
     // return('hello!');
}



// 100   H=2
// 101  H=2