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
    return { colour: '1', area: 10 };
}
createSquare({ colour: 1 });
