//Parameter and return type
function multiply(a, b) {
    return a * b;
}
//Arrow function
var add = function (a, b) {
    return a + b;
};
//Optional parameters
var greet = function (name, greeting) {
    return "".concat(greeting || 'Hello', ", ").concat(name);
};
//Default Parameters
var greetWith = function (name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, ", ").concat(name);
};
