import { Injectable } from '@angular/core';
import { Action, Select, Selector, State, StateContext, Store } from '@ngxs/store';
import { TodoModel } from '@lct/models/todo.model';
import { Todo } from '@lct/store/todo.action';
import { ApiService } from '@lct/api/api.service';
import { map } from 'rxjs/operators';


export class TodoStateModel {
   todos: TodoModel[];
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

    constructor(public apiService: ApiService) {
    }

    @Action(Todo.Initialize)
    public initialize(ctx: TodoContext, action: Todo.Initialize) {
        const state = ctx.getState();  
        type apiTodoModeL = { id: null, userId: null, title: null , completed: null, completedDate: null};    
            return  this.apiService.get<apiTodoModeL[]>('/todos').pipe(map(res => {
                        let userTodos = res.filter(todo =>  action.userId == todo.userId  )
                        let todos:TodoModel[] = [];
                        for  (let todo of userTodos) {
                            let todoModel = { id: null, title: null , completed: null, completedDate: null};
                            todoModel.id = todo.id;
                            todoModel.title = todo.title ;
                            todoModel.completed = todo.completed;
                            todo.completed ? todoModel.completedDate = new Date(1643492572) : todoModel.completedDate = null;
                            todos.push(todoModel);
                        }
                        ctx.setState({ ...state, todos: todos });
                 }))
        }

    @Action(Todo.UpdateTodo)
    public updateTodo(ctx: TodoContext, action: Todo.UpdateTodo) {
        const state = ctx.getState();
        let todos = state.todos;
        let index = todos.findIndex((obj => obj.id == action.todoId));
        todos[index].completed == false ?  (
               todos[index].completed = true , todos[index].completedDate = new Date() 
               )  :  (
                    todos[index].completed = false, todos[index].completedDate = null 
                     )
        ctx.patchState({ ...state, todos: todos })
    }
    
    @Action(Todo.CleanUpTodos)
    public cleanUpTodos(ctx: TodoContext, action: Todo.CleanUpTodos) {
        const state = ctx.getState();
        let todos:TodoModel[] = [];
        ctx.setState({ ...state, todos: todos });
    }

    @Selector()
    static getTodos(state: TodoStateModel) {
        return state;
    }
}