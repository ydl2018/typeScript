interface labeledWithValue {
    label: string;
    name?:string;
}

// note1 : 我们传入的参数可能有很多个，但是我们只接受label和name
function printLabel(obj:labeledWithValue):void{
    // 报错
    // if(obj.age){
    //
    // }
}

// note2: readonly 只读的
interface point {
    readonly x:number;
    readonly y:number;
}
let p1:point = {x:10,y:10};
// p1.x = 2; 报错

// note3: ReadonlyArray<T>
let arr = [1,2];
let ro:ReadonlyArray<number> = arr;
