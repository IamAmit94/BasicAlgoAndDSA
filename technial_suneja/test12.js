/****************************************
 *
 *          SEARCHIG
 *          Linear Search
 *
 * ***************************************/

// let stdName = ['alfa','beta','gama','theta'];

// console.log(stdName.includes('1alfa'));

// Linear Search Algo

const users = [
  { userName: "alfa", email: "alfa@email.com" },
  { userName: "beta", email: "beta@email.com" },
  { userName: "gamma", email: "gamma@email.com" },
  { userName: "theta", email: "theta@email.com" },
  { userName: "delta", email: "delta@email.com" },
];

const findUser = (array, val) => {
  for (let item of array) {
    if (item["userName"] === val) {
      return true;
    }
  }
  return false;
};

const result = findUser(users, "alfa");

console.log("result======>", result);
