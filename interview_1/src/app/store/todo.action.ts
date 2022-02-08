export namespace Todo {
    
    export class Initialize {
        public static readonly type: string = '[Todo] Initialize';

        public constructor(public userId: number) {
        }
    }

    export class UpdateTodo {
        public static readonly type: string = '[Todo] UpdateTodo';

        public constructor(public todoId: number) {
        }
    }

    export class CleanUpTodos {
        public static readonly type: string = '[Todo] CleanUpTodosTodo';

        public constructor() {
        }
    }
}
