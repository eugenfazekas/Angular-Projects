import { Component } from '@angular/core';
import { TodoModel } from '@lct/models/todo.model';
import { Todo } from '@lct/store/todo.action';
import { TodoState, TodoStateModel } from '@lct/store/todo.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OutletTodoFormBuilder } from './outlet-todo-form-builder';

@Component({
    templateUrl: './outlet-todo.component.html',
    styleUrls: ['./outlet-todo.component.scss']
})
export class OutletTodoComponent {

    public active_Button: string = 'all';

    @Select(TodoState.getTodos) getTodosState: Observable<TodoStateModel>;

    constructor(private store: Store, public outletForm: OutletTodoFormBuilder) {
        this.getAllTodos();
    }

    updateTodoState(id: number) {          
        this.store.dispatch(new Todo.UpdateTodo(id)).subscribe();
        this.getTodosState.subscribe(res => {
            this.outletForm.populateTodosFormArray(res.todos);
        })
    }

    getIncompletedTodos() {
        this.getTodosState.subscribe(res => {
           let filtered_todos = res.todos.filter( filter => filter.completed == false);
           this.outletForm.populateTodosFormArray(filtered_todos);
        })
        this.active_Button = 'incomplete'; 
    }

    getAllTodos() {
        this.getTodosState.subscribe(res => { 
            this.outletForm.populateTodosFormArray(res.todos);
            });
        this.active_Button = 'all';    
    }

    getTodayCompletedTodos() {
        this.getTodosState.subscribe(res => {
            let filtered_todos = this.todayFilter(res.todos);
            this.outletForm.populateTodosFormArray(filtered_todos);
         })
         this.active_Button = 'completed';  
    }

    todayFilter(todos: TodoModel[]) {
        let today = new Date();
        today.setHours(0,0,0,0)
        let epoch_Time_Today = today.getTime();
            return todos.filter(res => {
                let epoch_Time_completedDate ;
                res.completed != false ?  epoch_Time_completedDate = res.completedDate.getTime() : 1;
                    return epoch_Time_completedDate >=  epoch_Time_Today ;
 ;
            })
    }
}

