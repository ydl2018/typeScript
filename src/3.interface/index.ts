interface labeledWithValue {
    label: string;
    name?: string;
}

// note1 : 我们传入的参数可能有很多个，但是我们只接受label和name
function printLabel(obj: labeledWithValue): void {
    // 报错
    // if(obj.age){
    //
    // }
}

// note2: readonly 只读的
interface point {
    readonly x: number;
    readonly y: number;
}

let p1: point = {x: 10, y: 10};
// p1.x = 2; 报错

// note3: ReadonlyArray<T>
let arr = [1, 2];
let ro: ReadonlyArray<number> = arr;

// 报错
// let arr2:Array<number> = ro;

// 这样可以进行强制转换
arr = ro as number[];

// note 4
// readonly vs const
// 最简单判断该用readonly还是const的方法是看
// 要把它做为变量使用还是做为一个属性。 做为变量
// 使用的话用 const，若做为属性则使用readonly。


interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare(config: SquareConfig): { color: string, area: number } {
    return {color: '1', area: 10};
}
const obj = {colour:'red',color:'red', width:10}

// note5 如果通过对象字面量来传参，则传参不能包括其他的属性
// let square = createSquare({colour:'red',color:'red', width:10});

// 如果想要绕开检测，有两种方法

// 1. 通过变量传递
createSquare(obj)

// 2. as

createSquare({colour:'red'} as SquareConfig);

// 3. 通过重定义接口的方式

interface SquareConfig{
    color?:string,
    width?:number,
    [propName:string]:any;
}


interface SearchFunc{
    (source:string,subString:string):boolean;
}

let mySearch: SearchFunc;

// note 6 类型首字母大写或者小写都可以；
// 如果我们不写参数类型 ，typescript 会推断出参数类型
mySearch = function (source:String,subString:string) {
    return false
}

// 定义字符串数组
interface StringArray{
    [index:number]:string
}


class Dod{
    breed:string
}

class Animal{
    name:string
}

// note 7 如果同时定义了字符串类型的索引和数值类型的索引
// 那么数值索引对应的类型必须要是字符串类型对应的类的子类型

// interface notekey{
//     [x:number]:Animal,
//     [x:string]:Dod
// }

// note 8  [index:string]:number代表着索引
// 包括obj.name 的，不止于索引
interface NumberDictionary{
    [index:string]:number,
    length:number
}
// 报错
// let numberDict:NumberDictionary = {'name':2};

// note 9  接口可以通过readonly设置数组是只读的
interface ReadonlySringArray{
    readonly[index:number]:string
}
let readonlyArray:ReadonlySringArray = ['a'];
// 报错
// readonlyArray[0] = 1

interface ClockInterface {
    currentTime:Date;
}


// 可以通过规定一个类的接口的规范
// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
class Clock implements ClockInterface{
    currentTime:Date;
    setTime(d:Date){
        this.currentTime = d;
    }
}

// 疑问：什么时候用到这种接口呢？
interface ClockConstructor{
    new (hour:number,minute:number);
}

// 自动将name赋值到 this里
class Octopus {
   constructor(readonly name) {

   }
}

class Employee {
    constructor() {
        this._fullName = '3'
    }
    private _fullName: string;
    get fullName() : string{
        return this._fullName
    }
    set fullName(newName:string){
        this._fullName = newName;
    }
}

// 静态属性

class Grid{
    static origin = {x:0 ,y :0}
    calculateDistanceFromOrigin(point: {x:number,y:number}){
        console.log(Grid.origin.x)
    }
}

//抽象类
/**
 * 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
 * 不同于接口，抽象类可以包含成员的实现细节。
 * abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
 */
abstract class Department {
    // constructor 也要是protected类型
    protected constructor(public name) {

    }
    printName():void{
        console.log('Department name:' + this.name)
    }
    abstract printMeeting():void;
}

class AccountingDepartment extends Department {
    constructor(public name) {
        super(name);
    }
    printMeeting(): void {

    }
}

class Greeter {
    greeting: string;
    constructor() {

    }
}

// 使用 typeof Greeter，意思是取Greeter类的类型,而不是实例的类型
let greeterMaker: typeof Greeter = Greeter;
