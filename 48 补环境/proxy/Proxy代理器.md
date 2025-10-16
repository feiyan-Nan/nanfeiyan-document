# Proxy

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

# Reflect

Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。大部分与Object对象的同名方法的作用都是相同的，而且它与Proxy对象的方法是一一对应的。

# Proxy 支持的拦截操作

```javascript
get(target, propKey, receiver); //拦截对象属性的读取，比如proxy.foo和proxy['foo']。
set(target, propKey, value, receiver); //拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
has(target, propKey); //拦截propKey in proxy的操作，返回一个布尔值。
deleteProperty(target, propKey); //拦截delete proxy[propKey]的操作，返回一个布尔值。
ownKeys(target); //拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
getOwnPropertyDescriptor(target, propKey); //拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
defineProperty(target, propKey, propDesc); //拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
preventExtensions(target); //拦截Object.preventExtensions(proxy)，返回一个布尔值。
getPrototypeOf(target); //拦截Object.getPrototypeOf(proxy)，返回一个对象。
isExtensible(target); //拦截Object.isExtensible(proxy)，返回一个布尔值。
setPrototypeOf(target, proto); //拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
apply(target, object, args); //拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
construct(target, args); //拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
```

# Reflect 静态方法

```javascript
Reflect.get(target, name, receiver); //查找并返回target对象的name属性，receiver绑定this
Reflect.set(target, name, value, receiver); //设置target对象的name属性等于value
Reflect.has(obj, name); //方法对应name in obj里面的in运算符
Reflect.deleteProperty(obj, name); //方法等同于delete obj[name]，用于删除对象的属性。
Reflect.construct(target, args); //等同于new target(...args)，调用构造函数的方法。
Reflect.getPrototypeOf(obj); //读取对象的__proto__属性，对应Object.getPrototypeOf
Reflect.setPrototypeOf(obj, newProto); //设置目标对象的原型 对应Object.setPrototypeOf
Reflect.apply(func, thisArg, args); //等同于Function.prototype.apply.call(func, thisArg, args)
Reflect.defineProperty(target, propertyKey, attributes); //等同于Object.defineProperty
Reflect.getOwnPropertyDescriptor(target, propertyKey); //等同于Object.getOwnPropertyDescriptor
Reflect.isExtensible (target); //对应Object.isExtensible 表示当前对象是否可扩展。
Reflect.preventExtensions(target); //对应Object.preventExtensions 让一个对象变为不可扩展
Reflect.ownKeys (target); //返回对象的所有属性，可以返回Symbol类型
```

