import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@lct/store/user.actions';
import { UserState } from '@lct/store/user.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserStateModel } from '@lct/store/user.state';
@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    @Select(UserState.loggedIn) loggedIn: Observable<UserStateModel>;
    loggedError: boolean = false;

    public form: FormGroup;

    public constructor(private _builder: FormBuilder, private store: Store, private router: Router) {
        this.form = this._builder.group({ 'username': this._builder.control('')
        });
    }

    public submit(): void {
        if(this.form.valid) {
            this.store.dispatch(new User.LoginState(this.form.value.username)).subscribe();
            this.loggedIn.subscribe(res => {
                res.id == 1 ? this.loggedError = false : this.loggedError = true ;
                res.id == 1 ? this.router.navigateByUrl('dashboard/todos') : null;       
            })
        }
    }
}
