// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// Best time to buy and sell stock



const bestTimeToBuyAndSellStock = (price) => {
    let size = price.length
    let minPrice  = Infinity;
    let maxProfit = 0;

    for(let i = 0;i<size;i++) {
        if(price[i] < minPrice) {
            // console.log('---')
            minPrice = price[i]
        } 
        else if(price[i] - minPrice > maxProfit) {
            // console.log('---$$$$$$$$$$$')
            maxProfit = price[i] - minPrice
        } 
    }

    return maxProfit;
}


console.log(bestTimeToBuyAndSellStock([7,1,5,3,6,4])) // 5
// console.log(bestTimeToBuyAndSellStock([7,6,4,3,1])) // 0



/**
 *   7 < Infinity  || True      || 7
 *      minPrice = 7
 * 
 *   1 < 7 || True              || 1
 *     minPrice = 1
 * 
 *  5 < 1 || False              || 5
 *  Else if (5 - 1>0)
 *  maxProfit = 5 - 1 ==> 4     
 * 
 *  3 < 1 || false
 *  (3 - 1>4) \\ false
 * 
 *  6 < 1 || False
 *  (6 - 1 > 4) || True
 *  maxProfit = 6 - 1 ==> 5     || Answer
 * 
 *  4 < 1 || False
 *  (4 - 1 > 4) || False
 * 
 *  maxProfit  == 4
 * 
 */