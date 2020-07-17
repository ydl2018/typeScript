function identity(arg) {
    return arg;
}
// 也可以直接省略 <>
let cutput = identity('mys');
function logIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// 泛型名称可以改变
let myIdentity = logIdentity;
// 可以通过对象字面量形式定义泛型函数
let myIdentity2;
function ident(arg) {
    return arg;
}
let _28 = ident;
class _31 {
}
// 注意： 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
