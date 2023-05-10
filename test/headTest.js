// const head = require("../head.js");
// const assertEqual = require("../assertEqual.js");


// assertEqual(head([]), undefined);
// assertEqual(head([1, 2, 3, 4, 5]), 5);
// assertEqual(head(["Hello", "World"]), "Hello");

const assert = require("chai").assert;
const head = require("../head.js");

describe ("#head", () => {
  it ("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it ("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it ("returns '5' for ['5']", () => {
    assert.strictEqual(head(["hello", "world"]), "hello");
  });
});