//*************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number 
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney

function calcInvestitions(amountOfMoney: number, percent: number, directionOfMarket?: string) {
    if (directionOfMarket === 'top') {
        return amountOfMoney + (amountOfMoney * percent / 100);
    } else if (directionOfMarket === 'bottom') {
        return amountOfMoney - (amountOfMoney * percent / 100);
    } else {
        return amountOfMoney;
    }
}

console.log(calcInvestitions(4000, 43, 'top'))
console.log(calcInvestitions(3000, 27, 'bottom'))
console.log(calcInvestitions(2000, 13))