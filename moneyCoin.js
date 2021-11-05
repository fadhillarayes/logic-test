function moneyCoins(money) {
  // Start Code Here
  let count = 0;
  let coins = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];

  var changer = function (index, value) {
    var currentCoin = coins[index];
    if (index === 0) {
      if (value % currentCoin === 0) {
        count++;
      }
      return;
    }

    while (value >= 0) {
      changer(index - 1, value);
      value -= currentCoin;
    }
  };
  changer(coins.length - 1, money);
  return count;
}

// Drive code
console.log(moneyCoins(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
