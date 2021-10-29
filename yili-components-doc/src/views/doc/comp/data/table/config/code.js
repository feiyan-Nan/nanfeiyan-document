const dataList = [
  { name: '保罗', age: '25', school: '清华大学' },
  { name: '詹姆斯', age: '32', school: '哈尔滨理工大学' },
  { name: '库里', age: '28', school: '华南理工大学' },
  { name: '杜兰特', age: '22', school: '复旦大学' },
  { name: '欧文', age: '30', school: '浙江大学' }
]
const base = {
  name: 'DialogBase',
  template:
    `<yi-table :data="dataList"
               style="width: 100%">
      <yi-table-column prop="name"
                       label="学生姓名"
                       width="180">
      </yi-table-column>
      <yi-table-column prop="age"
                       label="年龄"
                       width="180">
      </yi-table-column>
      <yi-table-column prop="school"
                       label="毕业学校">
      </yi-table-column>
    </yi-table>`,
  data: {
    dataList
  }
}

export default {
  base
}
