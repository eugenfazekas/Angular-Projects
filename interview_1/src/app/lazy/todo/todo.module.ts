import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletTodoComponent } from './outlet-todo/outlet-todo.component';
import { MaterialModule } from '@lct/ui/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutletTodoFormBuilder } from './outlet-todo/outlet-todo-form-builder';

const COMPONENTS = [OutletTodoComponent];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    exports: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    providers:[
        OutletTodoFormBuilder
    ]
})
export class TodoModule { }
