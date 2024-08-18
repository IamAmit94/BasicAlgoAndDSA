// call, Bind, Apply pollyfill

// call Polyfill 


let car1 = {
    color: 'Blue',
    company: 'Ford Mustang'
};

function purchaseCar(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
    )
}

// Pollyfill for call
Function.prototype.myCall = function(context = {}, ...args) {
    if(typeof this !== "function") {
        throw new Error(this + "It's not callable")
    }

    context.fn = this;
    context.fn(...args)
}

// purchaseCar.myCall(car1, "$", 70000)

// pollyFill for Apply
Function.prototype.myApply = function(context = {}, argsArr = []) {
    if(typeof this !== "function") {
        throw new Error(this + "It's not callable")
    }
    if(!Array.isArray(argsArr)) {
        throw new TypeError('Not provided the array for the appky polyfill')
    }

    context.fn = this;
    context.fn(...argsArr)
}
// purchaseCar.myApply(car1, ["$", 80000])




//PollyFill for the Bind

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const bindFunc = purchaseCar.myBind(car1, "$", 70000);

console.log(bindFunc("$", 70000))








