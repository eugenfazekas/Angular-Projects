import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoModelClass } from '@lct/models/todo.model.class';
import { Todo } from '@lct/store/todo.action';
import { TodoState, TodoStateModel } from '@lct/store/todo.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'outlet-todo',
    templateUrl: './outlet-todo.component.html',
    styleUrls: ['./outlet-todo.component.scss']
})
export class OutletTodoComponent {

    public form: FormGroup;
    public todos: TodoModelClass[];
    @Select(TodoState.initTodos) initTodos: Observable<TodoStateModel>;

    constructor(private store: Store, private _builder: FormBuilder) {
        this.initTodos.subscribe(res => { this.todos = res.todos})
        }

    formBuilder() {

    }    
}

