//// [tests/cases/compiler/collisionArgumentsArrowFunctions.ts] ////

//// [collisionArgumentsArrowFunctions.ts]
var f1 = (i: number, ...arguments) => { //arguments is error
    var arguments: any[]; // no error
}
var f12 = (arguments: number, ...rest) => { //arguments is error
    var arguments = 10; // no error
}
var f1NoError = (arguments: number) => { // no error
    var arguments = 10; // no error
}

var f2 = (...restParameters) => {
    var arguments = 10; // No Error
}
var f2NoError = () => {
    var arguments = 10; // no error
}

//// [collisionArgumentsArrowFunctions.js]
var f1 = (i, ...arguments) => {
    var arguments; // no error
};
var f12 = (arguments, ...rest) => {
    var arguments = 10; // no error
};
var f1NoError = (arguments) => {
    var arguments = 10; // no error
};
var f2 = (...restParameters) => {
    var arguments = 10; // No Error
};
var f2NoError = () => {
    var arguments = 10; // no error
};
