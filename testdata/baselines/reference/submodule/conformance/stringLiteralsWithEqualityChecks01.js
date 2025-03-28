//// [tests/cases/conformance/types/literal/stringLiteralsWithEqualityChecks01.ts] ////

//// [stringLiteralsWithEqualityChecks01.ts]
let x: "foo";
let y: "foo" | "bar";

let b: boolean;
b = x === y;
b = "foo" === y
b = y === "foo";
b = "foo" === "bar";
b = "bar" === x;
b = x === "bar";
b = y === "bar";
b = "bar" === y;

b = x !== y;
b = "foo" !== y
b = y !== "foo";
b = "foo" !== "bar";
b = "bar" !== x;
b = x !== "bar";
b = y !== "bar";
b = "bar" !== y;



//// [stringLiteralsWithEqualityChecks01.js]
let x;
let y;
let b;
b = x === y;
b = "foo" === y;
b = y === "foo";
b = "foo" === "bar";
b = "bar" === x;
b = x === "bar";
b = y === "bar";
b = "bar" === y;
b = x !== y;
b = "foo" !== y;
b = y !== "foo";
b = "foo" !== "bar";
b = "bar" !== x;
b = x !== "bar";
b = y !== "bar";
b = "bar" !== y;
