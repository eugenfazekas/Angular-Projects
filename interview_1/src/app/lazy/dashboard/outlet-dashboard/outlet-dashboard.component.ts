import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Todo } from '@lct/store/todo.action';
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
    public name: string;
    public companyName: string;
    public todo:number = 5;

    constructor(public dialog: MatDialog, private store: Store, private router: Router) {
        this.loggedIn.subscribe(res => {
            this.name = res.name;
            this.companyName = res.company.name; 
        })
        this.store.dispatch(new Todo.Initialize()).subscribe();
    }

    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
      }

    goToLink(url: string){
        window.open(url, "_blank");
    }

    logout() {
        this.store.dispatch(new User.LogOut()).subscribe();
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
