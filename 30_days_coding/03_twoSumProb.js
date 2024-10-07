// two sum problem 

const twoSum = (num, target) => {
    let map = new Map()

    for(let i = 0;i<num.length;i++) {

        const complement = target - num[i]
        console.log('complement   ',complement)

        if(map.has(complement)) {
            
            const complementIndex = num.indexOf(complement)
            // console.log('complementIndex   ',complementIndex)
            // console.log('map ==== ',map)
            return[complementIndex, i]
        }

        map.set(num[i])
    }


}

console.log(twoSum([2,11,15,3,7], 9))