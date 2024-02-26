// chaining of the function
// once input others output

const myObj = {
    value : 0,
    increment : function () {
        this.value++;
        return this;
    },
    double: function () {
        this.value *=2;
        return this;
    },
    getValue: function() {
        return this.value;
    }

};

const result = myObj.increment().double().getValue();

console.log(result)

// As a good programming practice, we should write individual functions/methods for dealing with individual actions.
//  And, writing only one method/function for all actions is a thing. However, sticking to good practice takes a toll on the readability and
//   comprehensibility of the code, because defining a separate function for each action means that the output of a single function/method is input. 
//   This makes code comprehensibility even worse, as the function needs to be nested in reverse order. This is where method chaining comes to the rescue.

// What is Method chaining?
// It is a programming strategy that simplifies and embellishes your code. It is a mechanism for calling a method on another method of the same object.

// JavaScript this keyword refers to the current object in which it is called. Thus, when a method returns this, it simply returns an instance of the object in which 
// it is returned. Since the returned value is an instance of an object, it is, therefore, possible to call another method of an object to the returned value, which is its
//  instance. This makes method chaining possible in JavaScript.

// Example 1: In this example, each method in Land.prototype returns this, which refers to the entire instance of that Land object. 
// This would help in calling a method on another method of the same object.

/*
//creating a function Land()
function Land() {
	this.area = '';
	this.status = 'for Sale';
}
//Setting status open for sale
Land.prototype.open = function () {
	this.status = 'Open for Sale';
	return this;
}
//Setting status not for sale
Land.prototype.close = function () {
	this.status = 'Not for Sale';
	return this;
}
//Setting Parameters
Land.prototype.setParams = function (area) {
	this.area = area;
	return this;
}
//printing land status
Land.prototype.doorStatus = function () {
	console.log('The', this.area, 'Land is', this.status);
	return this;
}
//creating a land object
let land = new Land();
land.setParams("500 sq ft")
	.close()
	.doorStatus()
	.open()
	.doorStatus();*/
