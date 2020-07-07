function add(x, y) {
    return x + y;
}
// 1. 函数定义
// 即使函数没有返回值 => 后面的类型也不能为空
let myAdd = function (x, y) {
    return x + y;
};
// 可选参数必须要放到最后，但是默认参数就不需要
function buildName(firstName, lastName) {
}
// 可以把所有的参数写在一个拓展运算符里
function buildNameFn(firstName, ...restOfName) {
    return firstName + ' ' + restOfName.join(" ");
}
class Handler {
    constructor() {
        this.onClickBad = (e) => { this.info = e.type; };
    }
}
// 重载了pickCard, 导致
function pickCard(x) {
}
// pickCard([1,2])
