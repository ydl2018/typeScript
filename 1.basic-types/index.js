// boolean
var isDone = false;
// number
var hexLiteral = 0xf00d;
var octalLiteral = 484;
// 字符串
var test = 'bob';
// 泛型数组 Array<元素类型>
var list = [1, 2, 3];
// 元组
// 元组类型表示一个已知元素数量和类型的数组，各元素的类型不必相同
// note: please be careful of known numbers and types
// declare a typle type
var x;
x = ['hello', 10];
// x = [10,'hello'];
console.log(x[0].substr(1));
// 当访问一个越界元素时，会使用联合类型替代
// 以下代码是不生效的
//  x[3] = 'helloWorld';
//  console.log(x[5].toString());
// 枚举类型 enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// 这里的d为什么可以设置为任意类型呢？
var d = Color['0'];
// 不加any自动类型推导为Number类型
var notSure = 4;
// void
function warnUser() {
    console.log('This is my warning message!');
}
var unusable = undefined;
// note: 默认情况下null和undefined是所有类型的子类型。
//  就是说你可以把 null和undefined赋值给number类型的变量。
// 加上 --strictNullChecks ，下面代码会报错
// 此时 null与undefined只能赋值给自身和void类型
var u = null;
// Never
// 表示不存在的值的类型
// 是那些总是会抛出异常或根本就不会有返回值的函数表达式或
// 箭头函数表达式的返回值类型； 
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    // 类型推导出是never类型的
    return error('gg');
}
create({ prop: 0 });
create(null);
// create(42); // error
// 类型断言
var someValue = 'this is someValue';
// note: 这里的.号优先级高于<string>
var strLength = someValue.length;
strLength = someValue.length;
