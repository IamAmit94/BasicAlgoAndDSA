// WAP to find all the UNIQUE subset of the given string using recursion
            /***************************************
            *                                      *
            *    🌟🌟 🦄  UNIQUE SUBSET 🌟🌟     *         
            *                                      *
            ****************************************/


const uniqueSubSet = (str) => {

    let result = [];
    let map = new Map()
    let helper = (op, ip) =>  {

        if(ip.length === 0) {
            result.push(op);
            return
        }

        let op1 = op + ip[0];
        let op2 = op
        ip = ip.substring(1)

        helper(op1, ip)
        helper(op2, ip)
        

    }

    helper('',str)

    // return [...new Set(result)]  // using set to remove the duplicate

    // result.forEach(item => map.set(item, (map.get(item) || 0) + 1))  // using map to remove the duplicate
    // return Array.from(map.keys())

    return result
}

            
let str = 'aab'
console.log(uniqueSubSet(str))




/**
            We can use 2 approches to remove the duplicate from the array ie
            1. map
            2. set

            both has the complexity of o(n)
 */