let o = {
    aab : "1111"
};


let p = new Proxy(o,{
    //参数列表第一个参数：是我们的原对象
    //参数列表第二个参数：是我们的访问属性名称
    //参数列表第三个参数：我们经过代理器处理后的对象
    get: function(a,b,c){
        console.log(a,b,c);
        //如果说，我们在代理器拦截层使用经过代理器处理后的对象，那么就会一直触发拦截层，从而导致栈溢出
        return Reflect.get(a,b,c);
    }
});

console.log(p.aab);