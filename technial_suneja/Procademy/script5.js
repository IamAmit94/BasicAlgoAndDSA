/*****************************************************************
 *
 *
 *                NULLISH COALESCING OPERATOR
 *
 * a ?? b // syntax it is a logical operator
 *
 *****************************************************************/

let a = 30;
let b = "Height not undefined";
let Height;

// Height = (a == null || a == undefined) ? b : a;

// NULLISH COALESCING OPERATOR RETURNS THE VALUE OF ITS FIRST OPERAND
// IF IT IS NEITHER NULL OR UNDEFINED, OTHERWISE, IT RETURNS THE VALUE OF
// ITS SECOND OPERAND

// NULLISH COALESCING OPERATOR IS BINARY OPERATOR

// It is used to handle the NULL and UNDEFINED values
//
Height = a ?? b;
console.log(Height); // Output: "Height not undefined"

// OR OPERATOR returns the first TRUTHY VALUE
// TRUTHY VALUE - Everything except (0,'',null, undefined, false)

//https://www.youtube.com/watch?v=dSg0ekSwDXQ&list=PL1BztTYDF-QPMwbOB-gRHM_vPKxDAJ-h0&index=5
