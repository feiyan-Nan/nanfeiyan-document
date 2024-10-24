const { createClient } = require('redis');

const client = createClient({
    url: 'redis://127.0.0.1:6379'
});
async function setValue(key, value, expire) {
    if (typeof expire == 'undefined') {
        return client.set(key, value)
    } else {
        return client.set(key, value, { EX: expire })
    }
}
async function getExpire(key) {
    return client.ttl(key)
}

async function remove(key) {
    return client.del(key)
}
async function getValue(key) {
    return client.get(key)
}
async function setHash(key, memeber, value) {
    client.hSet(key, memeber, value)

    client.hGet(key, memeber)
    ///......
}
(async () => {
    await client.connect();
    // console.log('链接成功')
    // await setValue('name', 'jw', 3);
    // let ttl = await getExpire('name');
    // console.log(ttl);
    // await new Promise((resolve, reject) => {
    //     setTimeout(() => { resolve() }, 3500)
    // })
    // let value = await getValue('name')
    // console.log(value);

    // await remove('name')



    // xx.on
    client.subscribe('clear', function (value) { // 发布订阅
        console.log(value)
    })
    // return client.disconnect()
})();