export namespace Todo {
    export class Initialize {
        public static readonly type: string = '[Todo] initialize';

        public constructor() {
        }
    }

    export class SetTodos {
        public static readonly type: string = '[Todo] SetTodos';

        public constructor(public TodoModel: []) {
        }
    }
}
