function identity<T>(arg:T):T {
    return arg
}


// 也可以直接省略 <>
let cutput = identity('mys')

function logIdentity<T>(arg:T[]):T[] {
    console.log(arg.length);
    return arg
}

// 泛型名称可以改变
let myIdentity: <U>(arg:U[]) => U[] = logIdentity

// 可以通过对象字面量形式定义泛型函数

let myIdentity2: {<T>(arg:T[]):T[]}


// 可以定义泛型接口
interface GenericIdentityFn {
    <T>(arg:T):T;
}
function ident<T>(arg:T):T {
    return arg
}
let _28:GenericIdentityFn = ident;


class _31<T>{
    zeroValue:T;
    add:(x:T,y:T)=>T;
}

// 注意： 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
