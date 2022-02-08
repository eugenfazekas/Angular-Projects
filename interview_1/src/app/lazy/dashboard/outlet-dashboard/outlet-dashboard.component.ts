import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Todo } from '@lct/store/todo.action';
import { TodoState, TodoStateModel } from '@lct/store/todo.state';
import { User } from '@lct/store/user.actions';
import { UserState, UserStateModel } from '@lct/store/user.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
@Component({
    templateUrl: './outlet-dashboard.component.html',
    styleUrls: ['./outlet-dashboard.component.scss']
})
export class OutletDashboardComponent {

    @Select(UserState.loggedIn) loggedIn: Observable<UserStateModel>;
    @Select(TodoState.getTodos) getTodosState: Observable<TodoStateModel>;

    public name: string;
    public companyName: string;
    public todo:number = 5;
    public logged: boolean = false;

    constructor(public dialog: MatDialog, private store: Store, private router: Router) {

        this.loggedIn.subscribe(res => {
            this.name = res.name;
            this.companyName = res.company.name; 
            res.id > -1 && this.logged == false ? (
                this.store.dispatch(new Todo.Initialize(res.id)).subscribe(res => {
                    this.logged = true;
                    let incomplete_todos = res.todos.todos.filter(filter => filter.completed == false);
                    this.todo = incomplete_todos.length;     
                })
             ) : null;
        })
    }

    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
      }

    goToLink(url: string){
        window.open(url, "_blank");
    }

    logout() {
        this.store.dispatch(new User.Init()).subscribe();
        this.store.dispatch(new Todo.CleanUpTodos()).subscribe();
        this.router.navigateByUrl('login');
    }

    navigateToTodos() {
        this.router.navigateByUrl('dashboard/todos');
    }
}

@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: 'dialog-elements-example-dialog.html',
  })
  export class DialogElementsExampleDialog {}
