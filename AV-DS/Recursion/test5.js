// WAP to find all the CASE CHANGE PERM of the given string using recursion
            /***************************************
            *                                      *
            *    🌟🌟 🦄  CASE CHANGE PERMUTATION 🌟🌟     *         
            *                                      *
            ****************************************/


const caseChange = (str) => {

    let result = []
    let helper = (op,ip) => {

        if(ip.length === 0) {
            result.push(op)
            return
        }

        let op1 = op + ip[0].toUpperCase()
        let op2 = ip[0] + op
        ip = ip.substring(1)

        helper(op1,ip)
        helper(op2,ip)

    }

    helper('',str)

    return result
}

const str = 'ab'
console.log(caseChange(str))