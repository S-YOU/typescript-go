//// [tests/cases/conformance/types/objectTypeLiteral/methodSignatures/objectTypesWithOptionalProperties.ts] ////

//// [objectTypesWithOptionalProperties.ts]
// Basic uses of optional properties

var a: {
    x?: number; // ok
}

interface I {
    x?: number; // ok
}

class C {
    x?: number; // ok
}

interface I2<T> {
    x?: T; // ok
}

class C2<T> {
    x?: T; // ok
}

var b = {
    x?: 1 // error
}

//// [objectTypesWithOptionalProperties.js]
// Basic uses of optional properties
var a;
class C {
    x; // ok
}
class C2 {
    x; // ok
}
var b = {
    x: 1 // error
};
