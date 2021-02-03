interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'hah',
  completed: false,
};

/*
  联合类型  ｜    type Message = string | string[];
  类型别名： type   type Message = string | string[];
  交叉类型： &  type PartialPointX = { x: number; };  type Point = PartialPointX & { y: number; };
  索引签名   [key: string]: any
  keyof  得到一个联合类型
  in   in可以遍历一个联合类型
 */
