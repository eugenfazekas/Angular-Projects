import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,  } from '@angular/forms';
import { TodoModel } from '@lct/models/todo.model';

@Injectable()
export class OutletTodoFormBuilder {

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.formBuilder();
    }

    formBuilder() { 
        this.form = this.fb.group({
            todos: this.fb.array([])
        });       
    }

    todosForm(): FormArray {
        return this.form.get("todos") as FormArray
    }

    newtodo(todo: TodoModel): FormGroup {
        return this.fb.group({
            id: todo.id,  
            title : todo.title,
            checked: todo.completed
          })
    }

    addTodo(todo: TodoModel) {
        this.todosForm().push(this.newtodo(todo));
    }

    populateTodosFormArray(todos: TodoModel[]) {
        this.emptyTodosForm();
        for(let todo of todos) {
           this.addTodo(todo);
        }
    }

    emptyTodosForm() {
        this.todosForm().length > 0 ? 
            (  
            this.form.removeControl('todos'), this.form.addControl('todos', this.fb.array([]))
            ) : null 
    }
}
