//// [tests/cases/compiler/functionExpressionInWithBlock.ts] ////

//// [functionExpressionInWithBlock.ts]
function x() {
 with({}) {
  function f() {
   () => this;
  }
 }
}

//// [functionExpressionInWithBlock.js]
function x() {
    with ({}) {
        function f() {
            () => this;
        }
    }
}
