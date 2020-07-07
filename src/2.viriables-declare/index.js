// note 解构赋值时，要注意写法
let { a: test3, b: test2 } = { a: 1, b: 2 };
// note2
// Symbol.species是子对象（类）在调用父类默认构造函数对应的函数指针，也就是指向constructor，可以覆盖
// 所以我们new时constructor是不会调用symbol.species的，只有在子类调用时才用到
class MyArray extends Array {
    constructor(arrayLength, number, number2) {
        super();
    }
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map(x => x * x);
console.log(mapped instanceof MyArray);
// false
console.log(mapped instanceof Array);
// true
// note3 可以通过函数形式进行多重类的继承
const mixinsClass = (base) => (class extends base {
    say1() {
        console.log('say hello one');
    }
});
const mixinsClass2 = (base) => (class extends base {
    say2() {
        console.log('say hello two');
    }
});
class base {
    constructor() {
        this.a = 3;
    }
}
class Bar extends mixinsClass(mixinsClass2(base)) {
    test() {
    }
}
// note4 通过拓展运算符，只能获取当前对象的可枚举属性
const bar = new Bar();
const cloneBar = Object.assign({}, bar);
console.log(cloneBar.test); // undefined
