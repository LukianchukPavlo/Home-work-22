const counter = (function () {
    let count = 0;
    
    return function(n) {
        if (typeof n === 'number'){
            count = n;
            return count ++;

        }
        return count ++;
    };

})();

console.log(counter()) 
console.log(counter()) 
console.log(counter(100)) 
console.log(counter()) 
console.log(counter()) 
console.log(counter(500)) 
console.log(counter()) 
console.log(counter()) 
console.log(counter(0)) 
console.log(counter()) 
console.log(counter()) 

const counterFactory = function () {
    let count = 0;
    
    function value(n) {
        if (n !== undefined) {
            count = n;
        }
        return count;
    }
    function increment() {
        count += 1;
        return count;
    }
    function decrement() {
        count -=1;
        return count;
    }
    return {
        value,
        increment,
        decrement
    };
}();

console.log(counterFactory.value()) // 0
counterFactory.increment()
counterFactory.increment()
counterFactory.increment()
console.log(counterFactory.value()) // 3
counterFactory.decrement()
counterFactory.decrement()
console.log(counterFactory.value()) // 1
console.log(counterFactory.value(100)) // 100
counterFactory.decrement()
console.log(counterFactory.value()) // 99
console.log(counterFactory.value(200)) // 200
counterFactory.increment()
console.log(counterFactory.value()) // 201

const myPrint = (a, b ,result) => {
    return `${a}^${b}=${result}`
}
const myPow = (number, degree, callback) => {
    const createPow = (number, degree) => {
        if (degree === 1) return number;
        if (degree === 0) return 1;
        if (degree < 0) return 1 / createPow(number, -degree)
        return number * createPow(number, degree - 1);
    }
    
  const result = createPow(number, degree);

  return callback(number, degree, result);
}

console.log(myPow(3, 4, myPrint)) 
console.log(myPow(2, 3, myPrint)) 
console.log(myPow(2, 0, myPrint)) 
console.log(myPow(2, -2, myPrint)) 

const list = [12, 23, 100, 34, 56, 9, 233]
const myMax = () => {
    return Math.max.apply (this, list)
}

console.log(myMax(list)); 

const myMul = (a, b) => {
    return a * b;
}

const getmyDouble = (b) => {
    return myMul(2, b);

}

const getmyTriple = (b) => {
    return myMul(3, b);
}

console.log(getmyDouble(3)) 
console.log(getmyDouble(4)) 
console.log(getmyDouble(5)) 

console.log(getmyTriple(3)) 
console.log(getmyTriple(4)) 
console.log(getmyTriple(5)) 