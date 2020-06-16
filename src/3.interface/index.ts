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
