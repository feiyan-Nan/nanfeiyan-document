// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'time': "@date('yyyy-MM-dd HH:mm:ss')",
    'name': "@name()",
    "color": "@color()",
    "city": "@city()"
  }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))  // 这里的4表示输出的空格数量(为了让格式更加规整)



// 测试方法: node index.js
/**
{
  "list": [
      {
          "id": 1,
          "time": "1998-05-13 14:19:06",
          "name": "Richard Wilson",
          "color": "#e379f2",
          "city": "宜兰县"
      },
      {
          "id": 2,
          "time": "1990-01-15 09:25:34",
          "name": "Edward Gonzalez",
          "color": "#79f2c0",
          "city": "唐山市"
      },
      {
          "id": 3,
          "city": "中卫市"
      }
  ]
}
*/
