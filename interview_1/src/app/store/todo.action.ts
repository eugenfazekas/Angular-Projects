import { TodoModel } from "@lct/models/todo.model";

export namespace Todo {
    
    export class Initialize {
        public static readonly type: string = '[Todo] initialize';

        public constructor() {
        }
    }

    export class SetTodos {
        public static readonly type: string = '[Todo] SetTodos';

        public constructor(public todoModels: TodoModel[]) {
        }
    }

    export class UpdateTodo {
        public static readonly type: string = '[Todo] UpdateTodo';

        public constructor(public todoId: number) {
        }
    }
}
