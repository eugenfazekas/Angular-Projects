import { TodoModel } from "./todo.model";

export class TodoModelClass implements TodoModel {
    id: number;
    title: string;
    completed: boolean;
    completedDate: Date;
}