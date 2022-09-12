"use strict";
function genericTest(x) {
    return x;
}
let genericTestInterface = genericTest;
// generic class
class GenericNumber {
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// getProperty(x, "m");
function create(c, para) {
    return new c(para);
}
class SimpleClass {
}
class SimpleClassFactory {
    constructor() {
    }
    create(c) {
        return new c();
    }
}
new SimpleClassFactory().create(SimpleClass);
class BeeKeeper {
}
class ZooKeeper {
}
class Animal {
}
class Bee extends Animal {
}
class Lion extends Animal {
}
function createInstance(c) {
    return new c();
}
