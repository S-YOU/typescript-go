//// [tests/cases/compiler/limitDeepInstantiations.ts] ////

//// [limitDeepInstantiations.ts]
// Repro from #14837

type Foo<T extends "true", B> = { "true": Foo<T, Foo<T, B>> }[T];
let f1: Foo<"true", {}>;
let f2: Foo<"false", {}>;


//// [limitDeepInstantiations.js]
let f1;
let f2;
