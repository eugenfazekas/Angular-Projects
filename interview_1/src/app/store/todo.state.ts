import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { TodoModel } from '@lct/models/todo.model';
import { Todo } from '@lct/store/todo.action';
import { ApiService } from '@lct/api/api.service';
import { TodoModelClass } from '@lct/models/todo.model.class';




export class TodoStateModel {
   todos: TodoModelClass[];
}

type TodoContext = StateContext<TodoStateModel>;

@State<TodoStateModel>({
    name: 'todos',
    defaults : {
        todos: []
    }
})

@Injectable()
export class TodoState {

    constructor(public apiService: ApiService) {}

    @Action(Todo.Initialize)
    public initialize(ctx: TodoContext, action: Todo.Initialize) {
        const state = ctx.getState();
        console.log('todo action init');
        return this.apiService.get<TodoModel[]>('/todos').subscribe( res => {
            let items: TodoModelClass[] = [];
                for  (let todo of res) {          
                    let todoModel = new TodoModelClass();
                    todoModel.id = todo.id;
                    todoModel.title = todo.title ;
                    todoModel.completed = todo.completed;
                    todo.completed ? todoModel.completedDate = new Date() : null;
                    items.push(todoModel);
                }
        ctx.setState({ ...state, todos: items })      
        })
    }

    @Action(Todo.SetTodos)
    public setTodos(ctx: StateContext<TodoStateModel>, action: Todo.SetTodos) {

    }
    
    @Selector()
    static initTodos(state: TodoStateModel) {
        return state;
    }
}