function add(x:number,y:number) {
    return x + y;
}
// 1. 函数定义

// 即使函数没有返回值 => 后面的类型也不能为空
let myAdd: (x:number,y:number)  => void = function (x:number,y:number):number {
    return x+ y
}

// 可选参数必须要放到最后，但是默认参数就不需要
function buildName(firstName:string,lastName?:string) {
}

// 可以把所有的参数写在一个拓展运算符里
function buildNameFn(firstName:string,...restOfName:string[]) {
    return firstName + ' ' + restOfName.join(" ")
}


interface UIElement{
    addClickListener(onclick:(this:void,e:Event)=>void):void
}

class Handler {
    info:string;
    onClickBad = (e:Event) => {this.info = e.type}
}

function pickCard(x:string):number;

function pickCard(x:number):{suit:string,card:number};

// 重载了pickCard, 导致
function pickCard(x):any {

}
// pickCard([1,2])

