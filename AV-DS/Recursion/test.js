// WAP to print 1 to n using recursion


const printRecNum = (n, i = 1) => {
  if (i <= n) {
    console.log(i);
    printRecNum(n, i + 1);
  }
};

console.log(printRecNum(5));



// WAP to reverse print the number

const revRec = (n) => {

    if(n<=0) return;

    console.log(n)
    revRec(n-1)
}

// console.log(revRec(5))