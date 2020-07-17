enum EventType {
    Mouse,
    Keyboard
}

interface  Event {timestamp:number}

interface MouseEvent2 extends Event{
    x:number;
    y:number
}
interface KeyEvent extends Event{
    keyCode:Number
}

function listenEvent(eventType:EventType,handler:(n:Event) => void) {

}
// 可以传入更加精细的事件,但是对应的类型必须是原函数的子类型
listenEvent(EventType.Mouse,(e:KeyEvent)=>{
    console.log(e)})

// 枚举
// 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。比如，

enum Status {
    Ready,
    Waiting
}
enum Color{
    red,
    blue,
    green
}
// error
// let status = Status.Ready;
// status = Color.green;


