const subSet = (arr) => {

    let result = [];

let helper = (op, ip) => {
    // console.log(ip)
    if(ip.length === 0) {
        
        // Push the current subset to the result
        result.push(op.join(' '));
        return;
    }


     // Include the first element of ip in op
     let op1 = [...op, ip[0]];
     // Exclude the first element of ip
     let op2 = [...op];
     // Remove the first element from ip
     let ipRest = ip.slice(1);

    helper(op1, ipRest)
    helper(op2, ipRest)

}

helper([], arr)

    return result
}

let arr = [1,2,3];
console.log(subSet(arr)); 



// let arr = [1,2,3];
// console.log(arr[1])