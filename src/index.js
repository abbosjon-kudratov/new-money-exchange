// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    
    // Return an object containing the minimum number of coins needed to make change

    // var H=0;
    // var Q=0;
    // var rem=100
    var cur=currency;
    var obj={
            H: Math.floor(cur/50),
                // cur = cur - Math.floor(cur/50)*50;
            Q: Math.floor((cur%50)/20),
            D: Math.floor((cur%20)/10),
            N: Math.floor((cur%10)/5),
            P: Math.floor((cur%5)/1),
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };

        if (obj.H===0) {delete obj.H;}
        if (obj.Q===0) {delete obj.Q;}
        if (obj.D===0) {delete obj.D;}
        if (obj.N===0) {delete obj.N;}
        if (obj.P===0) {delete obj.P;}
    
    
        var obj2={};

        if (currency==0) { var obj1={}; return obj1;}
        if (currency>10000) {var obj1={error: "You are rich, my friend! We don't have so much coins for exchange"};
                                return obj1;}
     return obj;
     // return('hello!');
}



// 100   H=2
// 101  H=2

// '(((){}[])()[])'