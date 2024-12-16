"use strict";
/*
Index Signatures

An index signature in TypeScript is like telling TypeScript,
"This object can have many properties, and I don't know all the property names right now,
 but I know what type they will be and what type their values will have."
 */
//  interface TransactionsObj {
//     Pizza : number,
//     Books: number , 
//     Job: number
//  }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions[`Pizza`]);
/*
Both todaysTransactions.Pizza and todaysTransactions['Pizza'] are used to access the
value of the Pizza property in the todaysTransactions object.
They are equivalent in functionality but differ in syntax:
*/
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
