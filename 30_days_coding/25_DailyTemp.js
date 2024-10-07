

// https://leetcode.com/problems/daily-temperatures/description/

// Daily temperature


const dailyTemperature = (temperature) => {
    let result = [];
    let count = 0


    for(let i = 0;i<temperature.length;i++) {
        if(temperature[i] <temperature[i+1]) {
            count++
            result.push(count)
        }
    }

    return result;
}


console.log(dailyTemperature([73,74,75,71,69,72,76,73]))


// [1,1,4,2,1,1,0,0]