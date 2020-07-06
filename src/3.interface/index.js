// note1 : 我们传入的参数可能有很多个，但是我们只接受label和name
function printLabel(obj) {
    // 报错
    // if(obj.age){
    //
    // }
}
let p1 = { x: 10, y: 10 };
// p1.x = 2; 报错
// note3: ReadonlyArray<T>
let arr = [1, 2];
let ro = arr;
// 报错
// let arr2:Array<number> = ro;
// 这样可以进行强制转换
arr = ro;
function createSquare(config) {
    return { color: '1', area: 10 };
}
const obj = { colour: 'red', color: 'red', width: 10 };
// note5 如果通过对象字面量来传参，则传参不能包括其他的属性
// let square = createSquare({colour:'red',color:'red', width:10});
// 如果想要绕开检测，有两种方法
// 1. 通过变量传递
createSquare(obj);
// 2. as
createSquare({ colour: 'red' });
let mySearch;
// note 6 类型首字母大写或者小写都可以；
// 如果我们不写参数类型 ，typescript 会推断出参数类型
mySearch = function (source, subString) {
    return false;
};
class Dod {
}
class Animal {
}
let readonlyArray = ['a'];
// 可以通过规定一个类的接口的规范
// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
class Clock {
    setTime(d) {
        this.currentTime = d;
    }
}
// 自动将name赋值到 this里
class Octopus {
    constructor(name) {
        this.name = name;
    }
}
class Employee {
    constructor() {
        this._fullName = '3';
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        this._fullName = newName;
    }
}
// 静态属性
class Grid {
    calculateDistanceFromOrigin(point) {
        console.log(Grid.origin.x);
    }
}
Grid.origin = { x: 0, y: 0 };
//抽象类
/**
 * 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
 * 不同于接口，抽象类可以包含成员的实现细节。
 * abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
 */
class Department {
    // constructor 也要是protected类型
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name:' + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor(name) {
        super(name);
        this.name = name;
    }
    printMeeting() {
    }
}
class Greeter {
    constructor() {
    }
}
// 使用 typeof Greeter，意思是取Greeter类的类型,而不是实例的类型
let greeterMaker = Greeter;
