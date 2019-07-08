// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    
    // Return an object containing the minimum number of coins needed to make change

    // var H=0;
    // var Q=0;
    // var rem=100
    if (currency==0) return{};
    if (currency >= 10000)
    return { error: "You are rich, my friend! We don't have so much coins for exchange" };

    const result = {};
    const config = {
            H: 50,
            Q: 25,
            D: 10,
            N: 5,
            P: 1
          };

        for (const par in config) {
        if (config.hasOwnProperty(par)) {
          if (Math.floor(currency / config[par]) !== 0) {
            result[par] = Math.floor(currency / config[par]);
            currency = currency % config[par];
          }
        }
      }

      return result;
}



// 100   H=2
// 101  H=2

// '(((){}[])()[])'