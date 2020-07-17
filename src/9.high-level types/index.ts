// 交叉类型（Intersection Types）
// 交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
// 例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员。
function extend<T,U>(first:T,second:U) :T & U{
    let result = <T & U>{};
    for(let id in first){
        (<any>result)[id] = (<any>first)[id];
    }
    for(let id in second){
        (<any>result)[id] = second[id]
    }
    return result
}


// 联合类型 （Union Types）

// 联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，
// 所以 number | string | boolean表示一个值可以是 number， string，或 boolean。
function padLeft(value:string,padding:string | number) {
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ")+ value
    }
    if(typeof padding === "string"){
        return padding + value
    }
    throw new Error(`expect string or number, got ${padding}`)
}

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    if(Math.random() > .5){
        return {
            swim() {
            },
            layEggs() {
            }
        }
    }else{
        return {
            fly() {
            },
            layEggs() {
            }
        }
    }
}

let pet = getSmallPet();
pet.layEggs()

// error : 联合类型的判断只会通过接口之间相同的类型
// pet.swim()

// error 无法绕过类型检查
// if(pet.fly){
//     pet.fly()
// }


// 绕过方法1：
if((<Bird>pet).fly){
    (<Bird>pet).fly()
}

//绕过方法2：
// 类型保护机制
//  类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。
//  要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词
function isFish(pet:Fish | Bird):pet is Fish {
    return (<Fish>pet).swim !== undefined
}

function isBird(pet:Fish | Bird):pet is Bird {
    return (<Bird>pet).fly !== undefined
}

// 谓词为 parameterName is Type这种形式， parameterName必须是来自于当前函数签名里的一个参数名。

function isNumber(x:any):x is number{
    return typeof x === "number"
}
function isString(x:any):x is string{
    return typeof x === "string"
}

//typeof & instance 保护 可以绕过联合类型的类型检测
function padLeft2(value,padding:any) {
    if(typeof value === 'number'){
        value = value.toFixed(2)
    }
}

function f(sn:string | null):string {
    return sn || "default"
}

// note:!! => 通过 identifier! 从 identifier的类型去除了 null 和 undefined
function f1(name:string | null){
    console.log(name!.charAt(0));
}

// 类型别名
// 类型别名会给一个类型起一个新名字，与接口很像，但是可以作用与原始值，联合类型，元组以及其他需要
// 手写的类型

type Name = string;
type NameResolver = () => string;
type studentName = 'helloWorld' | 'happy' | 'sad'
function getName(n:NameResolver):Name{
    return n()
}

// 字符串字面量作为类型
function UIElement(tagName:'img') {

}

function rollDie() {

}
