class Person {
  name: string;
  protected age: number;

  private girlfriend: string;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(this.name + ' eat');
  }
}

const lisi = new Person(
  'lisi',
  '23'
);

interface StyleInfo {
  [key: string]:string;
}
