import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { UserState, UserStateModel } from '@lct/store/user.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuard {

  @Select(UserState.loggedIn) loggedIn: Observable<UserStateModel>;  

  constructor( private router: Router, ) { }
 
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.loggedIn.pipe(map(res => {
            if(res.id == 1) 
                return true;
            else {
                this.router.navigateByUrl('/login')
                return false;
            }   
        }))
    }
}