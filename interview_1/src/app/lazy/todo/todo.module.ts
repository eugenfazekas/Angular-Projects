import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletTodoComponent } from './outlet-todo/outlet-todo.component';

const COMPONENTS = [OutletTodoComponent];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    exports: [...COMPONENTS],
    imports: [
        CommonModule
    ]
})
export class TodoModule { }
