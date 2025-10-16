
let sss = {
    dddd:"123456",
    dqweqw: "aaad123",
    www: {
        qqq:"abcwwww"
    }
};
//node 浏览器调试 node --inspect-brk 文件名 然后谷歌浏览器访问 chrome://inspect/#devices
function myProxy(obj,name){
    return new Proxy(obj,{
        get(target, propKey, receiver){ //拦截对象属性的读取，比如proxy.foo和proxy['foo']。
            let temp = Reflect.get(target,propKey,receiver);
            console.log(`${name} -> get ${propKey} return -> ${temp}`);
            if(typeof temp == 'object') {
                temp = myProxy(temp,name + " => " + propKey)
            }
            return temp;
        }, 
        set(target, propKey, value, receiver){ //拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
            const temp = Reflect.set(target,propKey,value,receiver);
            console.log(`${name} -> set ${propKey} value -> ${value}`);
            return temp;
        }, 
        has(target, propKey){ //拦截propKey in proxy的操作，返回一个布尔值。
            const temp = Reflect.has(target,propKey);
            console.log(`${name} -> has ${propKey}`);
            return temp;
        }, 
        deleteProperty(target, propKey){ //拦截delete proxy[propKey]的操作，返回一个布尔值。
            const temp = Reflect.deleteProperty(target,propKey);
            return temp;
        }, 
        ownKeys(target){ //拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
            const temp = Reflect.ownKeys(target);
            return temp;
        }, 
        getOwnPropertyDescriptor(target, propKey){ //拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
            const temp = Reflect.getOwnPropertyDescriptor(target,propKey);
            return temp;
        }, 
        defineProperty(target, propKey, propDesc){ //拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
            const temp = Reflect.defineProperty(target,propKey,propDesc);
            return temp;
        }, 
        preventExtensions(target){ //拦截Object.preventExtensions(proxy)，返回一个布尔值。
            const temp = Reflect.preventExtensions(target);
            return temp;
        }, 
        getPrototypeOf(target){ //拦截Object.getPrototypeOf(proxy)，返回一个对象。
            const temp = Reflect.getPrototypeOf(target);
            return temp;
        }, 
        isExtensible(target){ //拦截Object.isExtensible(proxy)，返回一个布尔值。
            const temp = Reflect.isExtensible(target);
            return temp;
        }, 
        setPrototypeOf(target, proto){ //拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
            const temp = Reflect.setPrototypeOf(target,proto);
            return temp;
        }, 
        apply(target, object, args){ //拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
            const temp = Reflect.apply(target, object, args);
            return temp;
        }, 
        construct(target, args){ //拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
            const temp = Reflect.construct(target, args);
            return temp;
        } 
    })
}

sss = myProxy(sss,"sss");