//// [tests/cases/conformance/types/unknown/unknownType2.ts] ////

//// [unknownType2.ts]
type isUnknown<T> = unknown extends T ? true : false;
type isTrue<T extends true> = T;

type SomeResponse = 'yes' | 'no' | 'idk';
let validate: (x: unknown) => SomeResponse = x => (x === 'yes' || x === 'no') ? x : 'idk'; // No error

const u: unknown = undefined;

declare const symb: unique symbol;
declare const symbNonUnique: symbol;

if (u === 5) {
    const y = u.toString(10);
}

if (u === true || u === false) {
    const someBool: boolean = u;
}

if (u === undefined) {
    const undef: undefined = u;
}

if (u === null) {
    const someNull: null = u;
}

if (u === symb) {
    const symbolAlias: typeof symb = u;
}

if (!(u === 42)) {
    type A = isTrue<isUnknown<typeof u>>
}

if (u !== 42) {
    type B = isTrue<isUnknown<typeof u>>
}

if (u == 42) {
    type C = isTrue<isUnknown<typeof u>>
}

if (u == true) {
    type D = isTrue<isUnknown<typeof u>>
}

if (u == Object) {
    type E = isTrue<isUnknown<typeof u>>
}

declare const aString: string;
declare const aBoolean: boolean;
declare const aNumber: number;
declare const anObject: object;
declare const anObjectLiteral: { x: number };
declare const aUnion: { x: number } | { y: string };
declare const anIntersection: { x: number } & { y: string };
declare const aFunction: () => number;

if (u === aString) {
    let uString: string = u;
}

if (u === aBoolean) {
    let uString: boolean = u;
}

if (u === aNumber) {
    let uNumber: number = u;
}

if (u === anObject) {
    let uObject: object = u;
}

if (u === anObjectLiteral) {
    let uObjectLiteral: object = u;
}

if (u === aUnion) {
    type unionDoesNotNarrow = isTrue<isUnknown<typeof u>>
}

if (u === anIntersection) {
    type intersectionDoesNotNarrow = isTrue<isUnknown<typeof u>>
}

if (u === aFunction) {
    let uFunction: object = u;
}

enum NumberEnum {
    A,
    B,
    C
}

enum StringEnum {
    A = "A",
    B = "B",
    C = "C"
}

if (u === NumberEnum || u === StringEnum) {
    let enumObj: object = u;
}

if (u === NumberEnum.A) {
    let a: NumberEnum.A = u
}

if (u === StringEnum.B) {
    let b: StringEnum.B = u
}

function switchTestEnum(x: unknown) {
    switch (x) {
        case StringEnum.A:
            const a: StringEnum.A = x;
            break;
        case StringEnum.B:
            const b: StringEnum.B = x;
            break;
        case StringEnum.C:
            const c: StringEnum.C = x;
            break;
    }
    type End = isTrue<isUnknown<typeof x>>
}

function switchTestCollectEnum(x: unknown) {
    switch (x) {
        case StringEnum.A:
            const a: StringEnum.A = x;
        case StringEnum.B:
            const b: StringEnum.A | StringEnum.B = x;
        case StringEnum.C:
            const c: StringEnum.A | StringEnum.B | StringEnum.C = x;
            const all: StringEnum = x;
            return;
    }
    type End = isTrue<isUnknown<typeof x>>
}

function switchTestLiterals(x: unknown) {
    switch (x) {
        case 1:
            const one: 1 = x;
            break;
        case 2:
            const two: 2 = x;
            break;
        case 3:
            const three: 3 = x;
            break;
        case true:
            const t: true = x;
            break;
        case false:
            const f: false = x;
            break;
        case "A":
            const a: "A" = x;
            break;
        case undefined:
            const undef: undefined = x;
            break;
        case null:
            const llun: null = x;
            break;
        case symb:
            const anotherSymbol: typeof symb = x;
            break;
        case symbNonUnique:
            const nonUniqueSymbol: symbol = x;
            break;
    }
    type End = isTrue<isUnknown<typeof x>>
}

function switchTestObjects(x: unknown, y: () => void, z: { prop: number }) {
    switch (x) {
        case true:
        case false:
            const bool: boolean = x;
            break;
        case y:
            const obj1: object = x;
            break;
        case z:
            const obj2: object = x;
            break;
    }
    type End = isTrue<isUnknown<typeof x>>
}

function switchResponse(x: unknown): SomeResponse {
    switch (x) {
        case 'yes':
        case 'no':
        case 'idk':
            return x;
        default:
            throw new Error('unknown response');
    }
    // Arguably this should be never.
    type End = isTrue<isUnknown<typeof x>>
}

function switchResponseWrong(x: unknown): SomeResponse {
    switch (x) {
        case 'yes':
        case 'no':
        case 'maybe':
            return x; // error
        default:
            throw new Error('Can you repeat the question?');
    }
    // Arguably this should be never.
    type End = isTrue<isUnknown<typeof x>>
}

// Repro from #33483

function f2(x: unknown): string | undefined {
  if (x !== undefined && typeof x !== 'string') {
    throw new Error();
  }
  return x;
}

function notNotEquals(u: unknown)  {
    if (u !== NumberEnum) { }
    else {
        const o: object = u;
    }

    if (u !== NumberEnum.A) { }
    else {
        const a: NumberEnum.A = u;
    }


    if (u !== NumberEnum.A && u !== NumberEnum.B && u !== StringEnum.A) { }
    else {
        const aOrB: NumberEnum.A | NumberEnum.B | StringEnum.A  = u;
    }

    // equivalent to
    if (!(u === NumberEnum.A || u === NumberEnum.B || u === StringEnum.A)) { }
    else {
        const aOrB: NumberEnum.A | NumberEnum.B | StringEnum.A  = u;
    }
}






//// [unknownType2.js]
let validate = x => (x === 'yes' || x === 'no') ? x : 'idk'; // No error
const u = undefined;
if (u === 5) {
    const y = u.toString(10);
}
if (u === true || u === false) {
    const someBool = u;
}
if (u === undefined) {
    const undef = u;
}
if (u === null) {
    const someNull = u;
}
if (u === symb) {
    const symbolAlias = u;
}
if (!(u === 42)) {
}
if (u !== 42) {
}
if (u == 42) {
}
if (u == true) {
}
if (u == Object) {
}
if (u === aString) {
    let uString = u;
}
if (u === aBoolean) {
    let uString = u;
}
if (u === aNumber) {
    let uNumber = u;
}
if (u === anObject) {
    let uObject = u;
}
if (u === anObjectLiteral) {
    let uObjectLiteral = u;
}
if (u === aUnion) {
}
if (u === anIntersection) {
}
if (u === aFunction) {
    let uFunction = u;
}
var NumberEnum;
(function (NumberEnum) {
    NumberEnum[NumberEnum["A"] = 0] = "A";
    NumberEnum[NumberEnum["B"] = 1] = "B";
    NumberEnum[NumberEnum["C"] = 2] = "C";
})(NumberEnum || (NumberEnum = {}));
var StringEnum;
(function (StringEnum) {
    StringEnum["A"] = "A";
    StringEnum["B"] = "B";
    StringEnum["C"] = "C";
})(StringEnum || (StringEnum = {}));
if (u === NumberEnum || u === StringEnum) {
    let enumObj = u;
}
if (u === NumberEnum.A) {
    let a = u;
}
if (u === StringEnum.B) {
    let b = u;
}
function switchTestEnum(x) {
    switch (x) {
        case StringEnum.A:
            const a = x;
            break;
        case StringEnum.B:
            const b = x;
            break;
        case StringEnum.C:
            const c = x;
            break;
    }
}
function switchTestCollectEnum(x) {
    switch (x) {
        case StringEnum.A:
            const a = x;
        case StringEnum.B:
            const b = x;
        case StringEnum.C:
            const c = x;
            const all = x;
            return;
    }
}
function switchTestLiterals(x) {
    switch (x) {
        case 1:
            const one = x;
            break;
        case 2:
            const two = x;
            break;
        case 3:
            const three = x;
            break;
        case true:
            const t = x;
            break;
        case false:
            const f = x;
            break;
        case "A":
            const a = x;
            break;
        case undefined:
            const undef = x;
            break;
        case null:
            const llun = x;
            break;
        case symb:
            const anotherSymbol = x;
            break;
        case symbNonUnique:
            const nonUniqueSymbol = x;
            break;
    }
}
function switchTestObjects(x, y, z) {
    switch (x) {
        case true:
        case false:
            const bool = x;
            break;
        case y:
            const obj1 = x;
            break;
        case z:
            const obj2 = x;
            break;
    }
}
function switchResponse(x) {
    switch (x) {
        case 'yes':
        case 'no':
        case 'idk':
            return x;
        default:
            throw new Error('unknown response');
    }
}
function switchResponseWrong(x) {
    switch (x) {
        case 'yes':
        case 'no':
        case 'maybe':
            return x; // error
        default:
            throw new Error('Can you repeat the question?');
    }
}
// Repro from #33483
function f2(x) {
    if (x !== undefined && typeof x !== 'string') {
        throw new Error();
    }
    return x;
}
function notNotEquals(u) {
    if (u !== NumberEnum) { }
    else {
        const o = u;
    }
    if (u !== NumberEnum.A) { }
    else {
        const a = u;
    }
    if (u !== NumberEnum.A && u !== NumberEnum.B && u !== StringEnum.A) { }
    else {
        const aOrB = u;
    }
    // equivalent to
    if (!(u === NumberEnum.A || u === NumberEnum.B || u === StringEnum.A)) { }
    else {
        const aOrB = u;
    }
}
