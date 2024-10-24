
class Subject { // 被观察者
    constructor(name){
        this.name = name
        this._arr = [];
        this.state = '很开心的'
    }
    attach(o){
        this._arr.push(o); // 订阅
    }
    setState(newState){
        this.state = newState;
        // 宝宝状态变化了 会通知观察者更新，将自己传入过去
        this._arr.forEach((o)=>o.update(this)); // 发布
    }
}
class Observer { // 观察者
    constructor(name){
        this.name = name
    }
    update(s){
        console.log(this.name + ':' + s.name +s.state)
    }

}
let o1 = new Observer('爸爸')
let o2 = new Observer('妈妈')

let s = new Subject('宝宝'); // 创建一个被观察者
s.attach(o1) // 订阅
s.attach(o2)


s.setState('有人打我了')


//  发布订阅 用户要手动订阅 手动发布
// 观察者模式 是基于发布订阅的，主动的。 状态变化 主动通知
